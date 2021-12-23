<template>

    <div 
        class="not-logged-in-wrapper"
        v-if="this.$route.name === 'Home'"
    >

        <!-- SEARCH BAR -->
        <div>
            <input
                class="search-input"
                type="email"
                placeholder="Search for your favorite streamer"
            >
            <button class="search-btn">SEARCH</button>
        </div>
        <!-- LOG IN BUTTON -->
        <div
            class="login-btn"
            @click="$store.dispatch('login')"
        >
        Log In
        </div>
        
    </div>

</template>

<script>

</script>

<style scoped>

.not-logged-in-wrapper {
    display: flex;
    align-items: center;
}

.search-input {
    height: 35px;
    width: 200px;
    padding-left: 12px;
    outline: none;
    background-color: black;
    color: white;
    border: none;
}

.search-btn {
    color: white;
    background-color: green;
    border: none;
    height: 35px;
    padding: 0 5px;
    cursor: pointer;
}

.login-btn {
    border: 1px solid black;
    padding: 5px;
    cursor: pointer;
    margin-left: 20px;
    height: min-content;
}

</style>