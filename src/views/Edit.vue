<template>


<div class="main-container">

  <div class="edit-container">
    <profileHeader style="z-index: 10000"/>
    <mainImg/>
  </div>
  
  <!-- <sideBar/> -->

</div>

</template>

<script>
import mainImg from '../components/edit-page/main-img.vue'
import profileHeader from '../components/edit-page/profile-header.vue'


// placeholder sidebar
import sideBar from '../components/side-bar.vue'

export default {
  components: {
    mainImg, profileHeader, sideBar
  }

}
</script>

<style scoped>

.main-container {
  display: flex;
  justify-content: space-around;
  /* border: 1px solid black; */
  /* min-width: 1200px; */
  flex-grow: 0;
  flex-shrink: 0;
  margin: 30px auto 100px auto;
}

.edit-container {
  width: 800px;
  margin: 0 auto;
}

</style>