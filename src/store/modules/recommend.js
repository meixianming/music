// initial state
const state = {
  banners: [],
  personalized: [],
  newSong: []
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
  },
  getPersonalized(state, payload) {
    state.personalized = payload.result;
  },
  getNewSong(state, payload) {
    state.newSong = payload.result;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
