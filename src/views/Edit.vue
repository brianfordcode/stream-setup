<template>


<div class="edit-container">

  <profileHeader style="z-index: 10000"/>

  <mainImg/>

  <div style="padding-bottom: 50px;">{{ $store.state.setups }}</div>

</div>

</template>

<script>
import profileHeader from '../components/edit-page/profile-header.vue'
import mainImg from '../components/edit-page/main-img.vue'

export default {
  components: {
    mainImg, profileHeader
  }

}
</script>

<style scoped>

.edit-container {
  width: 800px;
  margin: 100px auto 0 auto;
  /* height: 100vh; */
}

</style>