<template>
  <div class="container">
      <div class="links-wrapper">
          <div class="links">
              <p>home</p>
              <p>about</p>
              <p>contact</p>
              <p>blog</p>
              <p>faq</p>
          </div>
          <div class="sub-copy">
              <div class="sub-box">
                  <input class="sub-input" type="email" placeholder="Your Email">
                  <button class="sub-btn">SUBSCRIBE</button>
              </div>
              <div class="copy-sm">
                  <div class="sm-links">
                      <p>a</p>
                      <p>a</p>
                      <p>a</p>
                      <p>a</p>
                  </div>
                  <p>2021 MyStreamSetup</p>
              </div>
          </div>
          
      </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.container {
    height: 150px;
    color: white;
    background-color: rgba(255,255,255,0.15);
    box-shadow: 0px 0px 33px -20px #000000;
    margin-top: 100px;
    padding: 20px;
}

.links-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
}

.links {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    /* align-items: flex-start; */
    justify-content: space-between;
    height: 120px;
}

.sub-copy {
    /* border: 1px solid black; */
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.sub-input {
    height: 35px;
    padding-left: 12px;
    outline: none;
    background-color: black;
    box-shadow: none;
    color: white;
    border: none;
}

.sub-input::placeholder {
    color: white;
}

.sub-btn {
    color: white;
    background-color: green;
    border: none;
    height: 35px;
    outline: none;
    width: 100px;
    cursor: pointer;
}

.sub-btn:focus {
    outline-width: 0;
}

.copy-sm {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.sm-links {
    display: flex;
}

.sm-links > * {
    margin: 5px;
}

</style>