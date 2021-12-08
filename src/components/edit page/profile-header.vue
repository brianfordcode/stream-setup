<template>
  <div class="container">
    <!-- PROF PIC -->
    <div class="prof-pic">
      <button class="upload-btn" @click="uploadProfImg">upload pic</button>
      <!-- <img style="width: 120px; height: auto;" :src="'/' + uploadedPic" /> -->
    </div>
    <!-- NAME EDIT -->
      <div class="name-edit">
        <h1 v-if="nameEditOpen"
           @click="nameEditOpen = !nameEditOpen">
           {{ profName }}
        </h1>
        <input class="name-field"
               type="text"
               v-model="this.profName"
               v-if="!nameEditOpen"
               v-on:keyup.enter="nameEditOpen = !nameEditOpen"
        >
        <img class="edit-btn"
             src="https://img.icons8.com/material-outlined/24/000000/edit--v1.png"
             @click="nameEditOpen = false"
             v-if="nameEditOpen"
        />
        <button class="enter-btn"
                v-if="!nameEditOpen"
                @click="nameEditOpen = true">
                Enter
        </button>
      </div>
    <!-- ADD SOCIAL LINKS -->
        <div class="links-display">
          <a v-if="socialLinks.twitch" :href="socialLinks.twitch" target="_blank">
            <img class="sm-logo" :src="twitchLogo" alt="twitch"/>
          </a>
          <a v-if="socialLinks.twitter" :href="socialLinks.twitter" target="_blank">
            <img class="sm-logo" :src="twitterLogo" alt="twitter"/>
          </a>
          <a v-if="socialLinks.youtube" :href="socialLinks.youtube" target="_blank">
            <img class="sm-logo" :src="youtubeLogo" alt="youtube"/>
          </a>
          <a v-if="socialLinks.discord" :href="socialLinks.discord" target="_blank">
            <img class="sm-logo" :src="discordLogo" alt="discord"/>
          </a>
          <a v-if="socialLinks.website" :href="socialLinks.website" target="_blank">
            <img class="sm-logo" :src="websiteLogo" alt="website"/>
          </a>
        </div>

        <div class="sl-container">
          <button class="add-links-btn" 
                  @click="socialLinksOpen = true">
                  Edit Social Links
          </button>
          <div class="sl-box"
               v-if="socialLinksOpen"
          >
          <button class="close-btn"
                  @click="socialLinksOpen = false"
          >
          &#10005;
          </button>
          <button class="enter-btn"
                  @click="submitSocialLinks(), socialLinksOpen = false"
          >
            Enter
          </button>
            <div class="sl-inputs-wrapper">
              <!-- TWITCH -->
              <div class="sl-wrapper twitch">
                <p>twitch</p>
                <input v-model="socialLinks.twitch"
                       class="field"
                       type="text"
                >
                <div class="live-status">
                  <input class="live-check" type="checkbox">
                  <div style="display: flex; flex-direction: column" class="live-text">
                    <p style="font-size: 15px">Live Status</p>
                    <p style="font-size:10px;">(Let people know you’re live!)</p>
                  </div>
                </div>
              </div>
              <!-- TWITTER -->
              <div class="sl-wrapper twitter">
                <p>twitter</p>
                <input v-model="socialLinks.twitter"
                       class="field"
                       type="text"
                >
              </div>
              <!-- YOUTUBE -->
              <div class="sl-wrapper youtube">
                <p>youtube</p>
                <input v-model="socialLinks.youtube"
                       class="field"
                       type="text"
                >
                <div class="live-status">
                  <input class="live-check" type="checkbox">
                  <div style="display: flex; flex-direction: column" class="live-text">
                    <p style="font-size: 15px">Live Status</p>
                    <p style="font-size:10px;">(Let people know you’re live!)</p>
                  </div>
                </div>
              </div>
              <!-- DISCORD -->
              <div class="sl-wrapper discord">
                <p>discord</p>
                <input v-model="socialLinks.discord"
                       class="field"
                       type="text"
                >
              </div>
              <!-- PERSONAL WEBSITE -->
              <div class="sl-wrapper personal-site">
                <p>website</p>
                <input v-model="socialLinks.website"
                       class="field"
                       type="text"
                >
              </div>
            </div>
          </div>
      </div>
  </div>

</template>

<script>

  export default {
    data() {
      return {
        uploadedPic: '',
        profName: 'Name',
        nameEditOpen: true,
        socialLinksOpen: false,
        socialLinks: {
          twitch: '',
          twitter: '',
          youtube: '',
          discord: '',
          website: '',
        },
        twitchLogo: require('/public/social-links/twitch-logo.png'),
        twitterLogo: require('/public/social-links/twitter-logo.png'),
        youtubeLogo: require('/public/social-links/youtube-logo.png'),
        discordLogo: require('/public/social-links/discord-logo.png'),
        websiteLogo: require('/public/social-links/website-logo.png'),
        
      }
    },
    methods: {
      uploadProfImg() { 
        console.log('profile picture upload')
      },
      submitSocialLinks() {
        
        console.log(this.socialLinks)
      }
    }
  }

</script>

<style scoped>

  .container {
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

  .name-edit {
    transform: translate(150px, 9px);
    display: flex;
    align-items: center;
    height: max-content;
  }  
  
  .name-field {
    position: relative;
    border: none;
    outline: none;
    height: 30px;
    width: 250px;
    background-color: black;
    color: white;
    padding-left: 5px;
    font-size: 20px;
  }

  .enter-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 60px;
    border: none;
    background-color: green;
    color: white;
    height: 30px;
    cursor: pointer;
  }

  .edit-btn {
    height: 24px;
    transition: .2s ease-in-out;
    cursor: pointer;
  }

  .edit-btn:hover {
    transform: scale(1.1);
  }

  .sl-container {
    position: absolute;
    transform: translate(150px, 60px);
  }

  .sl-box {
    background: black;
    height: min-content;
    width: min-content;
    position: absolute;
    margin-top: 2px;
    background-color: rgba(0,0,0,0.65);
    z-index: 1000;
  }

  .close-btn {
    outline: none;
    border: none;
    padding: 5px;
    background-color: red;
    color: white;
    position: absolute;
    right: 0;
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
  }

  .sl-wrapper {
    display: flex;
    align-items: center;
  }

  .field {
    width: 150px;
    padding: 5px;
    outline: none;
    border: none;
  }

  .sl-wrapper p { 
    padding-right: 5px;

  }

  .sl-inputs-wrapper {
    display: flex;
    /* border: 1px solid white; */
    margin: 25px;
    height: 175px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
  }

  .live-status {
    width: max-content;
    display: flex;
    align-items: center;
    height: 15px;
  }

   .live-check {
     outline: 0;
     border: 0;
     box-shadow: none;
     margin: 0 5px;
   }

   .links-display {
     position: absolute;
     transform: translate(150px, 42px);
   }

   .links-display > * {
     margin-right: 10px;
   }

   .sm-logo {
     height: 15px;
   }

</style>
  
  
  