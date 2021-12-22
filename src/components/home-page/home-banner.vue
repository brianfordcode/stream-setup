<template>
  <div class="banner-container">

      <div class="copy-btn-wrapper">
        <div class="copy-btn">
          <h1 class="copy">The #1 destination to share YOUR ultimate gaming or streaming station.</h1>
          <div class="get-started-btn">Get Started</div>
        </div>
      </div>

      <img class="image" src="@/assets/setup-example.jpg" alt="image"/>

  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    }

}
</script>

<style scoped>

.banner-container {
    height: 500px;
    max-width: 1200px;
    margin: 0 auto;
    /* border: 1px solid yellow; */
    display: flex;
    position: relative;
}

.copy-btn-wrapper {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
}

.copy {
    width: 300px;
    color: white;
    line-height: 40px;
}

.get-started-btn {
    color: white;
    border: 2px solid rgb(11,116,25);
    border-radius: 50px;
    padding: 20px 35px;
    cursor: pointer;
    transition: .2s ease-in-out;
    margin-top: 20px;
    width: max-content;
}

.get-started-btn:hover {
    transform: scale(1.02);

}

.copy-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media screen and (max-width: 1000px ) {
    .image {
        display: none;
    }
    .copy-btn-wrapper {
        width: 100%;
    }
}

</style>