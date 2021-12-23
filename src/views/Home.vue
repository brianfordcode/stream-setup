<template>

  <homeBanner/>
  
  <recentUploadsBanner/>
  
</template>

<script>
import homeBanner from '../components/home-page/home-banner.vue';
import recentUploadsBanner from '../components/home-page/recent-uploads-banner.vue';

export default {
  components: { homeBanner, recentUploadsBanner }


}
</script>

<style scoped>

</style>