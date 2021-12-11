<template>
  <div class="container">
    
    <!-- PROF PIC -->
      <div class="prof-pic">
        <img draggable="false" 
             style="width: 120px; opacity: 0.2; height: auto;"
             src="https://img.icons8.com/ios-glyphs/50/000000/user--v1.png"
        />
      </div>

      <div class="details">

        <!-- PROFILE NAME -->
        <div class="name-live" style="display: flex; align-items: center">

          <h1 class="prof-name">{{ profDetails.profName }}</h1>

          <a :href="profDetails.socialLinks.twitchLink"
             v-if="profDetails.liveStatus"
             target="_blank"
          >
          !LIVE
          </a>

        </div>
        

        <!-- LINKS -->
        <div class="links-wrapper">
          <a v-if="profDetails.socialLinks.twitchLink" :href="profDetails.socialLinks.twitchLink" target="_blank">
            <img class="sm-logo" :src="twitchLogo" alt="twitch"/>
          </a>
          <a v-if="profDetails.socialLinks.twitterLink" :href="profDetails.socialLinks.twitterLink" target="_blank">
            <img class="sm-logo" :src="twitterLogo" alt="twitter"/>
          </a>
          <a v-if="profDetails.socialLinks.youtubeLink" :href="profDetails.socialLinks.youtubeLink" target="_blank">
            <img class="sm-logo" :src="youtubeLogo" alt="youtube"/>
          </a>
          <a v-if="profDetails.socialLinks.discordLink" :href="profDetails.socialLinks.discordLink" target="_blank">
            <img class="sm-logo" :src="discordLogo" alt="discord"/>
          </a>
          <a v-if="profDetails.socialLinks.websiteLink" :href="profDetails.socialLinks.websiteLink" target="_blank">
            <img class="sm-logo" :src="websiteLogo" alt="website"/>
          </a>
        </div>

      </div>
    
    <button class="edit-btn btn" @click="editOpen = !editOpen, enterBtn()">Edit Details</button>


    <!-- details box -->
    <div class="details-box"
         v-if="editOpen"
    >
      <div class="details-text">

        <!-- PROFILE NAME -->
        <div class="name-input input">
          <p style="padding-right: 5px">Name</p>
          <input type="text" v-model="profDetails.profName"/>
        </div>

        <!-- UPLOAD PICTURE -->
        <button class="upload-btn btn" @click="uploadProfImg">Upload Profile Pic</button>

        <!-- TWITCH -->
        <div class="twitch input">
          <img :src="twitchLogo" alt="twitch"/>
          <input v-model="profDetails.socialLinks.twitchLink"
                  type="text"
          >
        </div>
        <!-- TWITTER -->
        <div class="twitter input">
          <img :src="twitterLogo" alt="twitter"/>
          <input v-model="profDetails.socialLinks.twitterLink"
                  type="text"
          >
        </div>
        <!-- YOUTUBE -->
        <div class="youtube input">
          <img :src="youtubeLogo" alt="youtube"/>
          <input v-model="profDetails.socialLinks.youtubeLink"
                  type="text"
          >
        </div>
        <!-- DISCORD -->
        <div class="discord input">
          <img :src="discordLogo" alt="discord"/>
          <input v-model="profDetails.socialLinks.discordLink"
                  type="text"
          >
        </div>
        <!-- WEBSITE -->
        <div class="website input">
          <img :src="websiteLogo" alt="website"/>
          <input v-model="profDetails.socialLinks.websiteLink"
                  type="text"
          >
        </div>
        
        <!-- ALLOW LIVE STATUS -->
        <div class="allow-comments">
          <input type="checkbox"
                 v-model="profDetails.liveStatus"
          >
          <div style="display: flex; flex-direction: column; padding-left: 5px">
            <p>Live Status</p>
            <p style="font-size:10px;">(Let people know you’re live!)</p>
          </div>
        </div>

        <!-- ALLOW COMMENTS -->
        <div class="allow-comments">
          <input type="checkbox"
                 v-model="profDetails.allowComments"
          >
          <p>Allow Comments</p>
        </div>

      </div>
    
    
      <button class="enter-btn btn"
              @click="editOpen = false, enterBtn()"
      >
      Enter
      </button>
    </div>


</div>

</template>

<script>

  export default {
    data() {
      return {
        editOpen: false,
        profDetails: {
          profName: '',
          profPic: '',
          socialLinks: {
            twitchLink: '',
            twitterLink: '',
            youtubeLink: '',
            discordLink: '',
            websiteLink: '',
          },
          allowComments: false,
          liveStatus: false,
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
      enterBtn() {
        console.log(this.profDetails)
      }
    }
  }

</script>

<style scoped>

  .container {
    height: 80px;
    margin: 0 auto;
    background-color: rgba(255,255,255,.25);
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 7px;
    color: white;
    box-shadow: 0px 0px 33px -20px #000000;
  }
  
  .prof-pic {
    position: absolute;
    height: 120px;
    width: 120px;
    overflow: hidden;
    border-radius: 100px;
    background-color: grey;
    transform: translate(10px);
    box-shadow: 0px 0px 33px -20px #000000;
  }

  .prof-name {
    height: min-content;
    /* border: 1px solid blue; */
  }

  .details {
    transform: translateX(145px);
    /* border: 1px solid black; */
    height: 70%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
  }

  .links-wrapper {
    display: flex;
    width: min-content;
    height: 20px;
  }

  .edit-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    border-bottom-right-radius: 7px;
  }

  .btn {
    background: green;
    color: white;
    padding: 5px;
    cursor: pointer;
    border: none;
    
  }

  .details-box {
    position: absolute;
    right: 0;
    top: 0;
    transform: translateY(80px);
    background-color: rgba(0,0,0,0.75);
  }

  .enter-btn {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .details-text {
    padding: 30px 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

  }

  .details-text > * {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }

  .input img {
    height: 25px;
    padding-right: 7px
  }

  .sm-logo {
    height: 25px;
  }

  .links-wrapper a {
    margin-right: 5px;
  }

  .allow-comments > p {
    padding-left: 5px;
  }

  input {
    outline: none;
    border: none;
    padding: 5px;
  }

  .name-live a {
    text-decoration: none;
    color: rgb(209, 0, 0);
    border: 1px solid rgb(209, 0, 0);
    height: min-content;
    padding: 2px 2px 0 2px;
    margin-left:20px;
  }

</style>
  
  
  