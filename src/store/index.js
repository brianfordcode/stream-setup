import { createStore } from 'vuex'
import { login, logOut } from '../firebase.js'
import router from '../router/index.js'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      user: null,
      loggedIn: false,
      activeEditEquipment: {
        items: [],

      },
    }
  },
  mutations: {
    addItem(state, item) {
      state.activeEditEquipment.items.push(item)
    },
    setLoggedInUser(state, user) {
      state.user = user;
      state.loggedIn = true;
    },
    setLoggedOutUser(state) {
      state.user = null;
      state.loggedIn = false;
    },
    hideItem(state, index) {
      state.activeEditEquipment.items[index].display = false
    }
  },
  actions: {
    // LOGIN
    login() {
      console.log('login')
      login(user => {
        this.commit('setLoggedInUser', user);
        
        // EDIT PAGE OPENS AFTER LOG IN
        router.push('Edit')
      })
    },
    // LOGOUT
    logout() {
      console.log('logout')
      logOut()
      this.commit('setLoggedOutUser')

      router.push('/')
    },
    // SAVE
    save(context, equipment) {

    },
    addItem(context, item) {
      context.commit('addItem', item)
    },
    hideItem(context, index) {
      context.commit('hideItem', index)
    }
  }
})

export default store