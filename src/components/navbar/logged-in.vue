<template>
    <div class="links-wrapper">
        <!-- <router-link to="/about">About</router-link> -->
        <p class="save-btn" v-if="this.$route.name === 'Edit'" @click="$store.dispatch('save')">Save</p>
        <router-link v-if="this.$route.name === 'Home' || this.$route.name === 'View'" class="link" to="/edit">Edit</router-link>
        <router-link class="link" to="/view">Preview</router-link>
        <p style="cursor: pointer">Share</p>
        <div class="settings-wrapper">
            <img class="gear-icon" @click="settingsOpen = !settingsOpen" src="https://img.icons8.com/material-outlined/24/000000/settings.png"/>
            <div class="settings-box" v-if="settingsOpen" @click="$store.dispatch('logout')">Log Out</div>
        </div>

        
    </div>

</template>

<script>
export default {
    data() {
        return {
            settingsOpen: false,
        }
        
    }
}
</script>

<style scoped>
.links-wrapper {
    display: flex;
    align-items: center;
}

#nav a {
  margin: 0 15px;
  text-decoration: none;
  color: black;
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

.settings-box {
    height: 100px;
    width: 300px;
    background-color: rgba(0,0,0,0.75);
    position: absolute;
    right: 0;
    z-index: 100000000;
    transform: translateY(10px);
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.settings-wrapper {
    position: relative;
}

#nav a.router-link-exact-active {
  color: rgb(33,51,77);
}
</style>