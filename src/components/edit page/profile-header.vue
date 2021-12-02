<template>

  <div class="wrapper">
    
    <div class="prof-pic">
      <button class="upload-btn" @click="uploadProfImg">upload pic</button>
      <img style="width: 120px; height: auto;" :src="'/' + uploadedPic" />
    </div>
    
      <div class="name-edit">
        <h1 v-if="editOpen" @click="editOpen = !editOpen">{{ profName }}</h1>
        <input class="name-field" type="text" v-model="this.profName" v-if="!editOpen" v-on:keyup.enter="editOpen = !editOpen">
        <img class="edit-btn"
             src="https://img.icons8.com/material-outlined/24/000000/edit--v1.png"
             @click="editOpen = false"
             v-if="editOpen"
        />
        <button class="enter-btn" v-if="!editOpen" @click="editOpen = true">Enter</button>
      </div>

    <button class="add-links-btn" @click="uploadSocial">Add Social Links</button>
  
  </div>

</template>

<script>

  export default {
    data() {
      return {
        uploadedPic: '',
        profName: 'Name',
        editOpen: true,
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
    height: 90px;
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
    transform: translate(10px, -15px);
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

  .add-links-btn {
      background: green;
      border: none;
      color: white;
      width: 130px;
      margin: 0 auto;
      padding: 5px;
      cursor: pointer;
      position: absolute;
      transform: translate(150px, 60px);
  }

  .name-edit {
    transform: translate(150px, 12px);
    display: flex;
    align-items: center;
    height: max-content;
  }  
  
  .name-field {
    position: relative;
    border: none;
    outline: none;
    height: 30px;
    width: 150px;
    background-color: black;
    color: white;
    padding-left: 5px;
    font-size: 20px;
  }

  .enter-btn {
    padding: 5px;
    border: none;
    background-color: green;
    color: white;
    height: 30px;
  }

  .edit-btn {
    height: 24px;
    transition: .2s ease-in-out;
    cursor: pointer;
  }

  .edit-btn:hover {
    transform: scale(1.1);
  }



</style>
  
  
  