<template>
    <div class="links-wrapper">

        <div class="edit-page-links">
            <router-link to="/LoginHome" v-if="$route.name === 'Edit' || 'Home'">My Setups</router-link>
            <p class="save-btn" v-if="$route.name === 'Edit'" @click="$store.dispatch('save')">Save</p>
            <router-link  v-if="$route.name === 'Edit'" to="/edit">Edit</router-link>
            <router-link class="link" v-if="$route.name === 'Edit'" to="/view">Preview</router-link>
            <p v-if="$route.name === 'Edit'">Share</p>
            <p @click="$store.dispatch('logout')">Log Out</p>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
        }
        
    }
}
</script>

<style scoped>
.links-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.edit-page-links {
    display: flex;
    align-items: center
}

.edit-page-links > * {
    margin: 0 10px;
    text-decoration: none;
    color: black;
    cursor: pointer;
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