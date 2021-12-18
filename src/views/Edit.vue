<template>


<div class="main-container">

  <div class="edit-container">
    <profileHeader style="z-index: 10000"/>
    <mainImg/>
    <itemsList/>
  </div>
  
  <!-- <sideBar/> -->

</div>

</template>

<script>
import profileHeader from '../components/edit-page/profile-header.vue'
import mainImg from '../components/edit-page/main-img.vue'
import itemsList from '../components/edit-page/items-list.vue'



// placeholder sidebar
import sideBar from '../components/side-bar.vue'

export default {
  components: {
    mainImg, profileHeader, sideBar, itemsList,
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