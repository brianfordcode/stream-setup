<template>
  <div class="container">
    <navBar/>

    <router-view/>

    <mainFooter/> 

  </div>
  

</template>

<script>
import navBar from './components/navbar.vue'
import mainFooter from './components/main-footer.vue'


export default {
  components: { navBar, mainFooter }

}

</script>


<style>
@import url('http://fonts.cdnfonts.com/css/sofia-pro');

* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Sofia Pro', sans-serif;
  background: linear-gradient(45deg, rgba(36,55,81,1) 0%, rgba(56,90,139,1) 50%, rgba(7,11,16,1) 100%);
}

</style>
