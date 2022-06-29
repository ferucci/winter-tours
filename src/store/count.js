const count = {
  state: {
    count: 111
  },
  getters: {
    getCount(state) {
      return state.count
    }
  },
  mutations: {
    setIncrement(state) {
      state.count++
    }
  },
  actions: {
    setIncrement({ commit }) {
      commit('setIncrement')
    }
  },
}

export default count