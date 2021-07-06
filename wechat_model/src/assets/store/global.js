import store from "store";
import wxconfig from "../utils/wx.config";
import wx from "weixin-js-sdk";
import webconfig from "../../web.config";
import qxApi from "../utils/qxApi";
// import { async } from 'q';
const state = {
  // baseURL: '/'
  baseURL: webconfig.domain,
  adminBaseURL: webconfig.domain
};
let domain = location.origin + "/wechat/"; //用于分享
const mutations = {
  setGlobalData(state, payload) {
    state = payload;
  }
};

const actions = {
  init: async function() {
    if (actions.checkToken()) {
      actions.setToken();
      await actions.initWxConfig();
      // await actions.InitHomeSwiper()
      return true;
    } else {
      return false;
    }
  },
  checkToken: function() {
    // 检查微信用户是否授权
    // return false
    if (
      typeof store.get("token") === "undefined" ||
      store.get("token") == null ||
      store.get("token") == undefined ||
      store.get("token") == ""
    ) {
      var token = actions.getHashParameter("token");
      if (
        typeof token === "undefined" ||
        token == null ||
        token == undefined ||
        token == ""
      ) {
        var currentUrl = location.href;
        store.set("oauthUrl", currentUrl);
        // var currentUrl = actions.changeURLPar()
        var url =
          state.baseURL + "/OAuth2?goUrl=" + encodeURIComponent(currentUrl);
        location.href = url;
        return false;
      }
      store.set("token", token);
      location.href = store.get("oauthUrl");
      return false;
    }
    return true;
  },
  changeURLPar: function() {
    var loca = window.location;
    var baseUrl = loca.origin + loca.pathname;
    var query = loca.search.substr(1);
    var names = ["from", "isappinstalled"];
    for (var i = 0; i < names.length; i++) {
      query = actions.queryUrl(query, names[i]);
    }
    if (query) {
      return baseUrl + "?" + query;
    } else {
      return baseUrl;
    }
  },
  queryUrl: function queryUrl(query, name) {
    if (query.indexOf(name) > -1) {
      var obj = {};
      var arr = query.split("&");
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split("=");
        obj[arr[i][0]] = arr[i][1];
      }
      delete obj[name];
      return JSON.stringify(obj)
        .replace(/[\"\{\}]/g, "")
        .replace(/\:/g, "=")
        .replace(/\,/g, "&");
    }
    return query;
  },
  setToken: function() {
    var token = this.getHashParameter("token");
    if (
      token &&
      typeof token !== "undefined" &&
      JSON.stringify(token) != "{}"
    ) {
      store.set("token", token);
      location.href = store.get("oauthUrl");
    }
  },
  initWxConfig: async function(entity) {
    let res = await qxApi.GetWXConfig();
    if (res.code) {
      return console.error(res.msg);
    }
    wxconfig(res.data, wx);
    //wx.ready(actions._initShareConfig.bind(entity))
    if (entity) {
      let targetUrl = domain + "#/" + entity.targetUrl;
      entity["link"] =
        domain + "redirect.html?app3Redirect=" + encodeURIComponent(targetUrl);
      if (entity.imgUrl.indexOf("http://") == -1) {
        entity.imgUrl = domain + entity.imgUrl;
      }
      wx.ready(function() {
        actions._initShareConfig(entity);
      });
    }
  },
  _initShareConfig: function(e) {
    /**
         * e.title, // 分享标题
           e.desc, // 分享描述
           e.link, // 分享链接
           e.imgUrl, // 分享图标
           e.type, // 分享类型,music、video或link，不填默认为link
           e.dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
           e.success,
           e.cancel
       
         */
    wx.onMenuShareQZone(e);
    wx.onMenuShareWeibo(e);
    wx.onMenuShareQQ(e);
    wx.onMenuShareAppMessage(e);
    wx.onMenuShareTimeline(e);
  },
  getHashParameter: function(key) {
    // 获得单个哈希参数
    var params = actions.getHashParameters();
    return params[key];
  },
  invokeWxPay: function(entity) {
    wx.chooseWXPay({
      appId: entity.appId, //公众号名称，由商户传入
      timestamp: entity.timeStamp, //时间戳
      nonceStr: entity.nonceStr, //随机串
      package: entity.package, //扩展包
      signType: "MD5", //微信签名方式:MD5
      paySign: entity.paySign, //微信签名
      success: entity.success,
      cancel: entity.cancel,
      fail: entity.fail
    });
  },
  getLocation: function(cbObj) {
    actions.initWxConfig();
    wx.getLocation({
      type: "wgs84", // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
      success: function(res) {
        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        cbObj.ok({ latitude, longitude });
      },
      cancel: function(res) {
        console.log("getLocation-cancel", res);
      },
      fail: function(res) {
        console.log("getLocation-fail", res);
      }
    });
  },
  getHashParameters: function() {
    // 获得多个哈希参数
    // debugger
    var arr = location.hash
      .substring(location.hash.indexOf("?") + 1, location.hash.length)
      .split("&");
    // var arr = (location.hash || '').replace(/^\#/, '').split('&')
    var params = {};
    for (var i = 0; i < arr.length; i++) {
      var data = arr[i].split("=");
      if (data.length === 2) {
        params[data[0]] = data[1];
      }
    }
    return params;
  }
};

export default {
  state,
  mutations,
  actions
};
