<template>

<div class="loginhome-container">

    <h1 style="color: white; padding-bottom: 50px">Welcome {{ $store.state.user.displayName }}</h1>

    <profileHeader style="width: 800px; z-index=1000000;"/>

    <div class="setup-links">
        <router-link to="/Edit"><img class="setup-image" :src="$store.state.setupImages[0].imageURL" alt="main-img"></router-link>
        <div class="placeholder">Add more setups!</div>
    </div>

</div>





</template>

<script>
import profileHeader from '../components/edit-page/profile-header.vue'

export default {
    components: {
        profileHeader
    },

}
</script>

<style scoped>

.loginhome-container {
    max-width: 1200px;
    margin: 50px auto;
    padding: 0 30px;
    height: 100%;
}

.setup-links {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
    width: min-content;
}

.setup-image {
    height: 250px;
}

.placeholder {
    border: 2px dashed white;
    height: 250px;
    width: 333px;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    opacity: 0.5;
    cursor: pointer;
}

.placeholder:hover {
    opacity: 1;
}

</style>