<template>

<div class="edit-container">

  <profileHeader style="z-index: 10000"/>

  <p style="margin-top: 50px;">{{ $store.state.profileDetails }}</p>

  <mainImg/>

  <itemsList/>

</div>

</template>

<script>
import profileHeader from '../components/edit-page/profile-header.vue'
import mainImg from '../components/edit-page/main-img.vue'
import itemsList from '../components/edit-page/items-list.vue'

export default {
  components: {
    mainImg, profileHeader, itemsList,
  }

}
</script>

<style scoped>

.edit-container {
  width: 800px;
  margin: 30px auto;
}

</style>