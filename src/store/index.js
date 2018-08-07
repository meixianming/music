import Vue from "vue"
import Vuex from "vuex"
import userInfo from "./modules/userInfo"
import singerInfo from "./modules/singerInfo"
import recommend from "./modules/recommend"
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userInfo,
    singerInfo,
    recommend
  }
})
