<template>

  <div id="nav">

    <div class="nav-wrapper">

      <!-- LOGO -->
      <router-link  to="/">
        <img
          src="@/assets/logo.png"
          alt="logo"
          style="width: 120px"
        />
        </router-link>
    
      <!-- IF LOGGED IN -->
      <loggedIn v-if="$store.state.loggedIn"/>

      <!-- IF LOGGED OUT -->
      <notLoggedIn v-else/>

    </div>
    
    
  </div>

</template>

<script>
import notLoggedIn from './not-logged-in.vue'
import loggedIn from './logged-in.vue'

export default {
  components: { notLoggedIn, loggedIn },
  data() {
    return {
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn
    }
  }

}
</script>

<style scoped>
#nav {
  background-color: rgba(255,255,255,0.65);
  box-shadow: 0px 0px 33px -20px #000000;
  position: fixed;
  z-index: 10000000;
  width: 100%;
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  height: 60px;
}

</style>