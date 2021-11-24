<template>

<div class="edit-container">
  <profileHeader/>
  <mainImg/>
</div>
  


</template>

<script>
import mainImg from '../components/edit page/main-img.vue'
import profileHeader from '../components/edit page/profile-header.vue'

export default {
  components: {
    mainImg, profileHeader
  }

}
</script>

<style scoped>

.edit-container {
  max-width: 1200px;
  margin: 0 auto;
}

</style>