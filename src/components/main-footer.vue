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
                      <a href="https://twitter.com" target="_blank">
                        <img :src="twitterLogo" alt="twitter"/>
                      </a>
                      <a href="https://discord.com" target="_blank">
                        <img :src="discordLogo" alt="discord"/>
                      </a>  
                      <a href="https://youtube.com" target="_blank">
                        <img :src="youtubeLogo" alt="youtube"/>
                      </a>
                      <a href="https://facebook.com" target="_blank">
                        <img :src="facebookLogo" alt="facebook"/>
                      </a>
                  </div>
                  <p>2021 &#169; desca.io</p>
              </div>
          </div>
          
      </div>
      
  </div>
</template>

<script>
export default {
    data() {
        return {
          twitchLogo: require('@/assets/social-links/twitch-logo.png'),
          twitterLogo: require('@/assets/social-links/twitter-logo.png'),
          youtubeLogo: require('@/assets/social-links/youtube-logo.png'),
          discordLogo: require('@/assets/social-links/discord-logo.png'),
          facebookLogo: require('@/assets/social-links/facebook-logo.png'),
          websiteLogo: require('@/assets/social-links/website-logo.png'),
        }
    }

}
</script>

<style scoped>

.container {
    height: 150px;
    color: white;
    background-color: rgba(255,255,255,0.15);
    box-shadow: 0px 0px 33px -20px #000000;
    /* margin-top: 100px; */
    padding: 0 100px 0 100px;
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
    /* border: 1px solid black; */
    width: 112px;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    flex-wrap: wrap;
    cursor: pointer;
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
    opacity: 0.5;
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
    justify-content: space-between;
    width: 40%;
}

.sm-links a > * {
    /* margin-right: 5px; */
    margin-top: 3px;
    height: 20px;
}

</style>