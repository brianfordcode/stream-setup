<template>
  
  <navBar/>

  <router-view/>
</template>

<script>
import navBar from './components/navbar.vue'


export default {
  components: { navBar }

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
  /* background-color: blue; */
  height: 100vh;
}

</style>
