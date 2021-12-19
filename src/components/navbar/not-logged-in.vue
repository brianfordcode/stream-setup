<template>
<div class="search-login" v-if="this.$route.name === 'Home'">

    <div class="sub-box">
        <input class="search-input" type="email" placeholder="Search for your favorite streamer">
        <button class="search-btn">SEARCH</button>
    </div>

    <p class="signin-btn" @click="$store.dispatch('login')">Log In</p>
    
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

.search-login {
    display: flex;
    align-items: center;
}

.search-input {
    height: 35px;
    width: 200px;
    padding-left: 12px;
    outline: none;
    background-color: black;
    box-shadow: none;
    color: white;
    border: none;
}

.search-btn {
    color: white;
    background-color: green;
    border: none;
    height: 35px;
    outline: none;
    width: 75px;
    cursor: pointer;
}

.search-btn:focus {
    outline-width: 0;
}

.signin-btn {
    border: 1px solid black;
    padding: 5px;
    cursor: pointer;
    margin-left: 20px;
    height: min-content;
}

</style>