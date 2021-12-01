<template>

<!-- MAIN IMAGE -->
  <div class="container">
      <div class="images-container">
          <img class="main-img"
               draggable="false"
               @click="recordCoord"
               src="https://www.minimaldesksetups.com/wp-content/uploads/2020/09/Featureimage.jpg"
          />
      </div>
    

<!--  TARGET  -->
    <div v-for="(item, index) in equipment" :key="item">
    	<img class="target"
            @click.stop="equipment[index].display = true"
         	src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRekJKtc0jNpQ6WSma5IVnDTF7B_AI5k4Yg_Q&usqp=CAU"
    	    :style="{top: (item.y - 25) + 'px', left: (item.x - 25) + 'px'}"
         />
      <div class="details-box"
           v-if="equipment[index].display"
           :style="{top: (item.y + 30) + 'px', left: (item.x) + 'px'}"
      >
          <div class="details-text-wrapper">
              <p style="color:white">Category:</p>
              <select name="category"
                      id="category" 
                      v-model="equipment[index].category"
                      style="width:200px; height: 30px; outline: none"
              >
                  <option value="none" selected disabled hidden>Category</option>
                  <option value="keyboard">Keyboard</option>
                  <option value="monitor">Monitor</option>
                  <option value="speaker">Speaker</option>
                  <option value="chair">Chair</option>
                  <option value="desk">Desk</option>
                  <option value="mouse">Mouse</option>
                  <option value="computer">Computer</option>
                  <option value="accessory">Accessory</option>
              </select>
          </div>

          <div class="details-text-wrapper">
              <p style="color:white">Model:</p>
              <input v-model="equipment[index].name"/>
          </div>

          <div class="details-text-wrapper">
              <p style="color:white">URL:</p>
              <input v-model="equipment[index].url"/>
          </div>

            <button
                class="enter-btn btn"
                @click.stop="equipment[index].display = false"
            >ENTER</button>
            <button
              class="remove-btn btn"
              @click.stop = "equipment.splice(index, 1)"
            >REMOVE
            </button>
         </div>
       </div>
    </div>

<!-- ITEMS LIST -->
  <ul class="items-list-container">
    <li class="placeholder"
        v-if="equipment.length===0"
    >Add your equipment info by clicking on your setup's image!
    </li>
    <li 
      class="item"
      v-for="(item, index) in equipment" :key="item"
      @click.stop="equipment[index].display = !equipment[index].display"
    >
      <div class="item-details">
          
          <img class="icon" 
               :src="getIconPic(index)"
               alt="item"
               v-if="equipment[index].category"
          >
          <div class="item-text">
              <p>{{ item.name }}</p>
              <a :href="equipment[index].url"
                 class="store-link"
                 target="_blank"
                 v-if="equipment[index].url"
              >Visit Store
              </a>
          </div>
          
      </div>
    </li>
  </ul>
</template>

<script>
  
export default {
  data() {
    return {
      equipment: [],
      x: 0,
      y: 0,
      done: false,
    }
  },
  components: { },

  methods: {
    recordCoord(e) {
      const rect = e.target.getBoundingClientRect()
      this.x = e.clientX - rect.left
      this.y = e.clientY - rect.top
      const point = {
        x: this.x,
        y: this.y,
        name: '',
        category: '',
        display: true,
        url: '',
      }
      this.equipment.push(point)
      console.log(this.equipment)
    },

    getIconPic(index) {
        if (this.equipment[index].category === 'accessory') {
            return require('/public/icons/accessory.png')
        }
        if (this.equipment[index].category === 'chair') {
            return require('/public/icons/chair.png')
        }
        if (this.equipment[index].category === 'computer') {
            return require('/public/icons/computer.png')
        }
        if (this.equipment[index].category === 'desk') {
            return require('/public/icons/desk.png')
        }
        if (this.equipment[index].category === 'headset') {
            return require('/public/icons/headset.png')
        }
        if (this.equipment[index].category === 'keyboard') {
            return require('/public/icons/keyboard.png')
        }
        if (this.equipment[index].category === 'microphone') {
            return require('/public/icons/microphone.png')
        }
        if (this.equipment[index].category === 'monitor') {
            return require('/public/icons/monitor.png')
        }
        if (this.equipment[index].category === 'mouse') {
            return require('/public/icons/mouse.png')
        }
        if (this.equipment[index].category === 'speaker') {
            return require('/public/icons/speaker.png')
        }
        if (this.equipment[index].category === 'webcam') {
            return require('/public/icons/webcam.png')
        }
        
    }
  }
}
  
</script>

<style scoped>
  
  .container {
    position: relative;
  }
  
  .main-img {
    width: 750px;
    height: auto;
    margin-bottom: 10px;
    cursor: crosshair;
    box-shadow: 0px 0px 33px -20px #000000;
  }
  
  .target {
    position: absolute;
    opacity: .25;
    width: 50px;
    height: auto;
    cursor: pointer;
    transition: .1s ease-in-out;
  }

  .target:hover {
      opacity: 0.5;
  }
  
  .details-box {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 25px 20px 25px 20px;
    background-color: rgba(0,0,0,0.65);
    z-index: 1000;
  }

  .details-box > * {
      margin: 5px;
  }

  .details-text-wrapper {
      display: flex;
      align-items: center;
      justify-content: flex-end;
  }

  .details-text-wrapper p {
      padding-right: 5px;
  }

  input {
      width: 200px;
      padding: 5px;
      outline: none;
  }

  .btn {
      position: absolute;
      right: 0;
      border: none;
      margin: 0;
      cursor: pointer;
      color: white;
      padding: 5px;
  }
  
  .enter-btn {
      bottom: 0;
      background-color: green;
      width: 60px;
  }

  .remove-btn {
      top: 0;
      background-color: rgb(192, 7, 7);
  }

  .items-list-container {
      display: flex;
      flex-wrap: wrap;
      max-width: 966px;
      /* border: 1px solid black; */
  }

  .placeholder {
      display: flex;
      justify-content: space-around;
      align-items: center;
      border: 2px dashed white;
      height: 100px;
      width: 300px;
      text-align: center;
      opacity: 0.5;
      cursor: default;
  }

  li {
      color: white;
      margin-right: 15px;
      margin-bottom: 15px;
      list-style-type: none;
      cursor: pointer;
  }

  .item-details {
      display: flex;
      /* background-color: rgba(0,0,0,0.45); */
      border: 1px solid white;
      border-radius: 7px;
      width: 275px;
      min-height: 100px;
      padding: 15px;
      position: relative;
      transition: .1s ease-in-out;
  }

  .item-details:hover {
      transform: scale(1.01);
  }

  .item-text {
      display: flex;
      flex-direction: column;
      
  }

  .item-text p {
      padding-left: 10px;
      overflow: hidden;
  }

  .item-text a {
      position: absolute;
      opacity: 0.75;
      bottom: 0;
      right: 0;
      padding: 10px;
      text-decoration: none;
      color: white;
      background-color: green;
      transition: .1s ease-in-out;
      border-bottom-right-radius: 7px;
  }

  .item-text a:hover {
      opacity: 1;
  }

  .icon {
      height: 50px;
  }
  
</style>