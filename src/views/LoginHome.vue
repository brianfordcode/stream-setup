<template>

    <div class="loginhome-container">

        <!-- WELCOME USER -->
        <h1
            style="color: white; padding: 30px 0"
            v-if="$store.state.user"
        >
        Welcome {{ $store.state.user.displayName }}
        </h1>

        <!-- PROFILE HEADER -->
        <profileHeader style="width: 800px;"/>


        <div class="setup-links-container">
            <!-- LIST CONTAINER -->
            <div 
                class="setup-links"
                v-for="setup in $store.state.setups" 
                :key="setup.id"
            >
                <!-- IMAGE -->
                <router-link :to="`/edit/${setup.id}`">
                    <img
                        class="setup-image"
                        :src="setup.imageURL" 
                        alt="main-img"
                    />
                </router-link>
            </div>

            <!-- PLACEHOLDER -->
            <div @click="makeNewSetup" class="placeholder">Add more setups!</div>
        </div>

    </div>

</template>

<script>
import profileHeader from '../components/edit-page/profile-header.vue'

export default {
    components: { profileHeader },

    methods: {
        makeNewSetup() {
            const id = Date.now() + ''
            const setup = {
                id,
                imageURL: `https://picsum.photos/seed/${id}/333/255`,
                items: []
            }
            this.$store.dispatch('addSetup', setup)
        }
    }
}
</script>

<style scoped>

.loginhome-container {
    max-width: 1200px;
    margin: 60px auto 0 auto;
}

.setup-links-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
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