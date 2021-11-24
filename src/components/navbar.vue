<template>

  <div id="nav">

    <div class="logo"><router-link to="/">MyStreamSetup</router-link></div>
    
    <div class="links-wrapper">
      <!-- <router-link to="/about">About</router-link> -->
      <router-link class="link" to="/edit">Edit Page</router-link>
      <router-link class="link" to="/view">View Page</router-link>
      <img class="gear-icon" src="https://img.icons8.com/material-outlined/24/000000/settings.png"/>
    </div>
    
  </div>

</template>

<script>
export default {

}
</script>

<style scoped>
#nav {
  padding: 20px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
}


#nav a {
  margin-left: 15px;
  text-decoration: none;
  color: black;
}

.links-wrapper {
    display: flex;
    align-items: center;
}

.link a {
  border: 1px solid black;
  padding: 5px;
}

.gear-icon {
    margin-left: 15px;
    cursor: pointer;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>