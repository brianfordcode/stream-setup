<template>

  <div class="wrapper">
    
    <div class="prof-pic">
      <button class="upload-btn" @click="uploadProfImg">upload pic</button>
      <img style="width: 120px; height: auto;" :src="'/' + uploadedPic" />
    </div>
    
    <div class="details">
      <h1>Name Name</h1>
      <button class="add-links-btn" @click="uploadSocial">Add Social Links</button>
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
      uploadProfImg() { 
        console.log('profile picture upload')
      },
      uploadSocial() {
          console.log('add social links')
      }
    }
  }

</script>

<style scoped>

  .wrapper {
    height: 75px;
    /* width: 1000px; */
    margin: 50px auto;
    background-color: rgba(255,255,255,.25);
    position: relative;
    display: flex;
    border-radius: 7px;
    color: white;
    box-shadow: 0px 0px 33px -20px #000000;
  }
  
  .prof-pic {
    position: absolute;
    height: 120px;
    width: 120px;
    border-radius: 100px;
    background-color: grey;
    transform: translate(10px, -30px);
    display: flex;
    justify-content: space-around;
    align-items: end;
    overflow: hidden;
    box-shadow: 0px 0px 33px -20px #000000;
  }
  
  .upload-btn {
    position: absolute;
    transform: translateY(-20px);
    background: green;
    color: white;
    border: none;
    padding: 5px;
    cursor: pointer;
  }
  
  .details {
    display: flex;
    flex-direction: column;
    transform: translate(150px, 10px);
  }

  .add-links-btn {
      background: green;
      border: none;
      color: white;
      width: 60%;
      margin: 0 auto;
      padding: 5px;
      cursor: pointer;
  }

</style>
  
  
  