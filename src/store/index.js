import { createStore } from 'vuex'

export default createStore({
  state: {
    mapdata:'',
    map_now:''
  },
  mutations: {
    update (state, payload) {
      state[payload.name] = payload.value
    }
  },
  actions: {
  },
  modules: {
  }
})