<template>
  <div class="banner-container">
      <div class="copy-wrapper">
          <h1 class="copy">The #1 destination to share YOUR ultimate gaming or streaming station.</h1>
          <div class="get-started-btn">Get Started</div>
      </div>
      <img class="image" src="@/assets/setup-example.jpg" alt="image"/>

  </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                {
                    imageLink: require('@/assets/setup-example.jpg'),
                },
            ]
        }
    }

}
</script>

<style scoped>

.banner-container {
    height: 400px;
    max-width: 1200px;
    margin: 0 auto;
    /* border: 1px solid yellow; */
    display: flex;
    position: relative;
}

.copy-wrapper {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    transform: translateY(75px);
    /* justify-content:start; */
    align-items: center;
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
}

.get-started-btn:hover {
    transform: scale(1.02);

}


</style>