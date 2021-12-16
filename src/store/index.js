import { createStore } from 'vuex'
import { login, logOut } from '../firebase.js'
import router from '../router/index.js'

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
    },
    setLoggedOutUser(state) {
      state.user = null;
      state.loggedIn = false;
    }
  },
  actions: {
    login() {
      console.log('login')
      login(user => {
        this.commit('setLoggedInUser', user);
      })
    },
    logout() {
      console.log('logout')
      logOut()
      this.commit('setLoggedOutUser')

      router.push('/')
    }
  }
})

export default store