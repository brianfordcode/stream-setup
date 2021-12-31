<template>

    <div class="logged-in-wrapper">

        <!-- EDIT -->
        <router-link
            v-if="$route.name === 'View'"
            to="/edit"
            style="background-color: rgb(245, 101, 35);"
        >
        Edit
        </router-link>

        <!-- PREVIEW -->
        <router-link
            v-if="$route.name === 'Edit'"
            to="/view"
            style="background-color: purple;"
        >
        Preview
        </router-link>

        <!-- SHARE -->
        <div
            v-if="$route.name === 'View'"
            style="background-color: rgb(88, 156, 179);"
        >
        Share
        </div>

        <!-- MY SETUPS -->
        <router-link
            to="/LoginHome" 
            v-if="$route.name === 'Edit' || $route.name === 'Home'"
            style="background-color: rgb(42, 43, 117);"
        >
        My Setups
        </router-link>

        <!-- LOG OUT -->
        <div
            @click="$store.dispatch('logout')"
            style="color: black; border: 1px solid black;"
        >
        Log Out
        </div>

    </div>

</template>

<script>

</script>

<style scoped>

.logged-in-wrapper {
    display: flex;
    align-items: center;
}

/* BUTTONS */
.logged-in-wrapper > * {
    margin: 0 10px;
    text-decoration: none;
    color: black;
    cursor: pointer;
    color: white;
    padding: 6px;
}

</style>