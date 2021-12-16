<template>

  <div id="nav">

    <div class="nav-wrapper">
      <div class="logo"><router-link to="/">MyStreamSetup</router-link></div>
    
      <loggedIn v-if="loggedIn"/>

      <notLoggedIn v-if="!loggedIn"/>

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
      loggedIn: false,
    }
  }

}
</script>

<style scoped>
#nav {
  padding: 20px;
  /* border-bottom: 1px solid black; */
  background-color: rgba(255,255,255,0.5);
  box-shadow: 0px 0px 33px -20px #000000;
  height: 30px;
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  /* border: 1px solid blue; */
  margin: 0 auto;
}

#nav a.router-link-exact-active {
  color: rgb(33,51,77);
}

</style>