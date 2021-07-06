import Vue from "vue"
import Vuex from "vuex"
import VuexPersistence from 'vuex-persist'
import global from './assets/store/global'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
Vue.use(Vuex)

// 解决不同模块命名冲突的问题，将不同模块的namespaced: true，之后在不同页面中引入getter、actions、mutations时，需要加上所属的模块名
const store = new Vuex.Store({
  modules: {
    global: {
      namespaced: true,
      ...global,
      plugins: [vuexLocal.plugin]
    }
  }
})
export default store