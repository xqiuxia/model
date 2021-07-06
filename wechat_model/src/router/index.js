import Vue from "vue";
import Router from "vue-router";
import error500 from "@/views/500.vue";
import errorpc500 from "@/views/500pc.vue";
import demo from "@/views/demo.vue";
import home from "../views/Home";
import lianxi from "@/views/lianxi.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
      meta: {
        showFooter: true,
        title: "页面出错"
      }
    },
    {
      path: "/",
      name: "error500",
      component: error500,
      meta: {
        showFooter: true,
        title: "页面出错"
      }
    },
    {
      path: "/lianxi",
      name: "lianxi",
      component: lianxi,
      meta: {
        showFooter: true,
        title: "连续"
      }
    },
    {
      path: "/errorpc500",
      name: "errorpc500",
      component: errorpc500,
      meta: {
        // showFooter: true,
        title: "页面出错"
      }
    },
    {
      path: "/demo",
      name: "demo",
      component: demo,
      meta: {
        showFooter: true,
        title: "页面出错"
      }
    }
  ]
});
