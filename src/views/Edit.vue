<template>

<div class="edit-container">
  <profileHeader style="z-index: 1000;"/>
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
  padding: 0 20px;
  /* min-height: 1000px; */
}

</style>