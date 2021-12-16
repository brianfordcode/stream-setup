import { createStore } from 'vuex'
import { login } from '../firebase.js'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      user: null,
      loggedIn: false,
    }
  },
  mutations: {
    setLoggedInUser(state, user) {
      state.user = user;
      state.loggedIn = true;
    }
  },
  actions: {
    login() {
      login(user => {
        this.commit('setLoggedInUser', user);
      })
    }
  }
})

export default store