// initial state
const state = {
  banners: [],
}
//getters
const getters = {};

//actions
const actions = {};

//mutations
const mutations = {
  getBanners(state, payload) {
    state.banners = payload.banners.map((item) => {
      return {
        url: item.url,
        img: item.picUrl
      }
    })
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
