import Fly from "flyio";
import store from "store";
import { Indicator } from "mint-ui";

const request = Fly;

request.interceptors.request.use((config, promise) => {
  let token = store.get("token");
  console.log("token", token);
  if (token) {
    config.headers["Authorization"] = token;
  }
  if (request.method.toLowerCase() === "post") {
    request.headers["Content-Type"] = "application/x-www-form-urlencoded";
  }
  Indicator.open("加载中...");
  return config;
});

request.interceptors.response.use(
  (response, promise) => {
    // wx.hideNavigationBarLoading()
    // if (!(response && response.data && response.data.res === 0)) {
    //   errorPrompt(response)
    // }
    Indicator.close();
    return promise.resolve(response.data);
  },
  (err, promise) => {
    //   wx.hideNavigationBarLoading()
    return promise.reject(err);
  }
);

export default request;
