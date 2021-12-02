<template>

<div class="container">
  <img :src="selectedFile" :alt="selectedFile.name"/>
  <input type="file" @change="onFileSelected">
</div>



</template>

<script>
export default {
  data() {
    return {
      selectedFile: '',
    }
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0]
      console.log(this.selectedFile)
    },
  }
}

</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  width: min-content;
}

</style>