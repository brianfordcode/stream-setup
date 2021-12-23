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
      setups: [
        {
          id: 1,
          imageURL: require('@/assets/setup-example.jpg'),
        },
      ]
      
    }
  },
  mutations: {
    save(state, setup) {
      console.log('save')
      console.log(state.activeEditEquipment.items)
    },
    addItem(state, item) {
      state.activeEditEquipment.items.push(item)
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
    hideItem(state, index) {
      state.activeEditEquipment.items[index].display = false
    },
    removeItem(state, index) {
      state.activeEditEquipment.items.splice(index, 1)
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
    // SAVE
    save(context, equipment) {
      context.commit('save', equipment)
    },
    addItem(context, item) {
      context.commit('addItem', item)
    },
    hideItem(context, index) {
      context.commit('hideItem', index)
    },
    removeItem(context, index) {
      context.commit('removeItem', index)
    }
  }
})

export default store