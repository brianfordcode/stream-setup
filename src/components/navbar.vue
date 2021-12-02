<template>

  <div id="nav">

    <div class="nav-wrapper">
      <div class="logo"><router-link to="/">MyStreamSetup</router-link></div>
    
      <div class="links-wrapper">
        <!-- <router-link to="/about">About</router-link> -->
        <p class="save-btn">Save</p>
        <router-link class="link" to="/edit">Edit</router-link>
        <router-link class="link" to="/view">Preview</router-link>
        <img class="gear-icon" src="https://img.icons8.com/material-outlined/24/000000/settings.png"/>
      </div>
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
  /* border-bottom: 1px solid black; */
  background-color: rgba(255,255,255,0.5);
  box-shadow: 0px 0px 33px -20px #000000;
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  /* border: 1px solid blue; */
  margin: 0 auto;
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

.save-btn {
    border: 1px solid black;
    padding: 5px;
    cursor: pointer
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
  color: rgb(33,51,77);
}

</style>