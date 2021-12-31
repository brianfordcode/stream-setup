<template>
  <div class="r-u-container">
      <h1>Recent Uploads</h1>

      <div class="square-container">
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
      </div>
      


  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.r-u-container {
    max-width: 1200px;
    margin: 0 auto;
    background-image: url('http://adwallpapers.xyz/uploads/posts/473-wooden-desk-background.jpg');
    background-repeat: repeat;
    background-size: auto;
    height: 100%;
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 50px 0;
}

h1 {
    color: white;
    padding-bottom: 30px;
}

.square-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
}

.square {
    height: 150px;
    width: 200px;
    background-color: rgb(138, 138, 138);
}

</style>