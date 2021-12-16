<template>
    <div class="search-login">
        <div class="sub-box">
            <input class="search-input" type="email" placeholder="Search for your favorite streamer">
            <button class="search-btn">SEARCH</button>
        </div>

    <div class="sign-in-wrapper">
        <p class="signin-btn" @click="loginOpen = !loginOpen">Log In</p>

        <div class="sign-in-box" v-if="loginOpen"></div>
    </div>
    
</div>
</template>

<script>
export default {
    data() {
        return {
            loginOpen: false,
        }
    }

}
</script>

<style scoped>
.signin-btn {
    border: 1px solid black;
    padding: 5px;
    cursor: pointer;
    margin-left: 50px;
    height: min-content;
}

.sign-in-box {
    height: 400px;
    width: 300px;
    background-color: rgba(0,0,0,0.75);
    position: absolute;
    right: 0;
    z-index: 100000000;
    transform: translateY(10px);
}

.search-login {
    display: flex;
    align-items: center
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

.search-input::placeholder {
    color: white;
    opacity: 0.5;
}

.sign-in-wrapper {
    position: relative;
}
</style>