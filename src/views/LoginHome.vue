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

        <h2
            style="color: white; padding: 30px 0"
        >
        My Setups:
        </h2>

        <div class="setup-links-container">
            <!-- LIST CONTAINER -->
            <div 
                class="setup-links"
                v-for="setup in $store.state.setups" 
                :key="setup.id"
            >
                <!-- SETUP CONTAINER -->
                <div class="setup-image-container">
                        <!-- IMAGE -->
                        <img
                            draggable="false"
                            class="setup-image"
                            :src="setup.imageURL" 
                            alt="main-img"
                        />
                    <!-- BUTTONS -->
                        <!-- DELETE BTN -->
                        <div
                            class="btn delete-btn"
                            @click="$store.dispatch('deleteSetup', setup.id)"
                        >
                        Delete
                        </div>
                        <!-- EDIT BTN -->
                        <router-link :to="`/edit/${setup.id}`">
                            <div class="btn edit-btn">edit</div>
                        </router-link>
                        <!-- PREVIEW -->
                        <router-link :to="`/edit/${setup.id}`">
                            <div class="btn preview-btn">Preview</div>
                        </router-link>
                        <!-- SHARE BTN -->
                        <div
                            class="btn share-btn"
                        >
                        Share
                        </div>
                        
                    
                </div>
                
            </div>

            <!-- PLACEHOLDER -->
            <div
                @click="makeNewSetup"
                class="placeholder"
                ref="placeholder"
            >
            Add a Setup!
            </div>

        </div>

    </div>

    <div>{{ $store.state.setups }}</div>

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

            // innerhtml of setup box
            this.$refs.placeholder.innerHTML = this.$store.state.setups.length > 1 ? "Add a Setup" : "Add More Setups!"

            // open new setup
            this.$router.push(`/edit/${id}`)
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
    margin: 0 auto 50px auto;
}

.setup-image-container {
    position: relative;
    height: 250px;
    width: 326.47px;
}

.setup-image {
    height: 250px;
    box-shadow: 0px 0px 33px -20px #000000;
}

.btn {
    position: absolute;
    color: white;
    opacity: 0.75;
    padding: 7px;
    cursor: pointer;
}

.btn:hover {
    opacity: 1;
}

.edit-btn {
    top: 0;
    background-color: rgb(245, 101, 35);
}

.delete-btn {
    bottom: 0;
    background-color: rgb(192, 7, 7);
}

.preview-btn {
    top: 0;
    right: 0;
    background-color: purple;
}

.share-btn {
    bottom: 0;
    right: 0;
    background-color: rgb(88, 156, 179);
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