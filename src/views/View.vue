<template>

<div class="view-container">

  <profileHeader/>

  <sideBar/>
</div>



</template>

<script>
import profileHeader from '../components/edit-page/profile-header.vue'
import sideBar from '../components/side-bar.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    profileHeader, sideBar
  },
  methods: {
  }
}

</script>

<style scoped>

.view-container {
  display: flex;
  justify-content: space-between;
  margin: 100px auto;
  width: 1200px;
}

</style>