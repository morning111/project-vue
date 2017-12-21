export default {
  setCityAfterFiveSecond ({commit}, city) {
    setTimeout(() => {
      commit('changeCity', city)
    }, 1000)
  }
}
