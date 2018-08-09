// initial state
const state = {
  newSong: {},
  hotSong: {}
}
//getters
const getters = {};

//actions
const actions = {};

//mutations
const mutations = {
  getNewSong(state, payload) {
    state.newSong = payload.playlist;
  },
  getHotSong(state, payload) {
    state.hotSong = payload.playlist;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
