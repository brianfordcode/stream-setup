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
        profileDetails: {
          profName: '',
          profPic: '',
          socialLinks: {
            twitchLink: '',
            twitterLink: '',
            youtubeLink: '',
            discordLink: '',
            websiteLink: '',
        },
        allowComments: false,
        liveStatus: false,
      },
      setups: []
    }
  },
  getters: {
    setup: state => id => {
      return state.setups.find(s => s.id === id)
    }
  },
  mutations: {
    addItem(state, { item, setupId }) {
      state.setups.find(s => s.id === setupId).items.push(item)
    },
    setLoggedInUser(state, user) {
      state.user = user;
      state.loggedIn = true;
      state.profileDetails.profPic = user.photoURL
      console.log(state.profileDetails)
    },
    setLoggedOutUser(state) {
      state.user = null;
      state.loggedIn = false;
      state.profileDetails.profPic = null
    },
    removeItem(state, {item, setupId, index}) {
      state.setups.find(s => s.id === setupId).items.splice(index, 1)
    },
    addSetup(state, setup) {
      state.setups.push(setup)
    },
    moveItem(state, { setupId, itemIndex, point }) {
      const setup = state.setups.find(s => s.id === setupId)
      const item = setup.items[itemIndex]
      item.x  = point.x
      item.y = point.y
    },
    deleteSetup(state, setupId) {
      state.setups = state.setups.filter(setup => setup.id !== setupId)
      
    }
  },
  actions: {
    // LOGIN
    login() {
      login(user => {
        this.commit('setLoggedInUser', user);
        
        // EDIT PAGE OPENS AFTER LOG IN
        router.push('LoginHome')
      })
    },
    // LOGOUT
    logout() {
      logOut()
      router.push('/')
      this.commit('setLoggedOutUser')
      setTimeout(() => {alert('logged Out')}, 500);
    },
    addItem(context, { item, setupId }) {
      context.commit('addItem', { item, setupId })
    },
    removeItem(context, {item, setupId, index }) {
      context.commit('removeItem', {item, setupId, index })
    },
    addSetup(context, setup) {
      context.commit('addSetup', setup)
    },
    moveItem(context, { setupId, itemIndex, point }) {
      context.commit('moveItem', { setupId, itemIndex, point })
    },
    deleteSetup(context, setupId ) {
      context.commit('deleteSetup', setupId)
    }
    
  }
})

export default store