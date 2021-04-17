import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    password: '',
    title: ''
  },
  mutations: {
    username2(state, user) {
      state.username = user.用户名
      state.password = user.密码
    },
    title(state, title) {
      state.title = title
    }
  },
  actions: {
  },
  modules: {
  }
})
