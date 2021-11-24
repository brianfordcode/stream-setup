<template>

  <div class="wrapper">
    
    <div class="prof-pic">
      <button class="upload-btn" @click="upload">upload pic</button>
      <img style="width: 120px; height: auto;" :src="'/' + uploadedPic" />
    </div>
    
    <div class="details">
      <h1>Name Name</h1>
      <button class="add-links-btn">Add Social Links</button>
    </div>
    
  
  </div>

</template>

<script>

  export default {
    data() {
      return {
        uploadedPic: ''
      }
    },
    methods: {
      upload() { 
        console.log('profile picture upload')
      },
    }
  }

</script>

<style scoped>

  .wrapper {
    height: 100px;
    /* width: 1000px; */
    margin: 20px auto;
    background-color: lightgrey;
    position: relative;
    display: flex;
  }
  
  .prof-pic {
    position: absolute;
    height: 120px;
    width: 120px;
    border-radius: 100px;
    background-color: grey;
    transform: translate(10px, -10px);
    display: flex;
    justify-content: space-around;
    align-items: end;
    overflow: hidden;
  }
  
  .upload-btn {
    position: absolute;
    transform: translateY(-20px)
  }
  
  .details {
    display: flex;
    flex-direction: column;
  }

</style>
  
  
  