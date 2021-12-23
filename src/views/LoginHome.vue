<template>

    <div class="loginhome-container">

        <h1
            style="color: white; padding-bottom: 50px"
            v-if="$store.state.user"
        >
        Welcome {{ $store.state.user.displayName }}
        </h1>

        <profileHeader style="width: 800px; z-index=1000000;"/>

        <div class="setup-links-container">
            <div 
                class="setup-links"
                v-for="setup in $store.state.setups" 
                :key="setup.id"
            >
                <router-link to="/Edit">
                    <img
                        class="setup-image"
                        :src="setup.imageURL" 
                        alt="main-img"
                    />
                </router-link>
            </div>
            
            <router-link  to="Edit"><div class="placeholder">Add more setups!</div></router-link>
        </div>

    </div>

</template>

<script>
import profileHeader from '../components/edit-page/profile-header.vue'

export default {
    components: { profileHeader },
}
</script>

<style scoped>

.loginhome-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;
    height: 100%;
}

.setup-links-container {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
    width: min-content;
    margin: 50px auto;
}

.setup-image {
    height: 250px;
    box-shadow: 0px 0px 33px -20px #000000;
    transition: .2s ease-in-out;
}

.setup-image:hover {
    transform: scale(1.01);
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