<template>

<!-- MAIN IMAGE -->
  <div
    class="container"
    @mousemove = "onMouseMove"
    @mouseup = "dragging = null"
  >
      <div
        class="images-container"
        ref = "imagesContainer"
      >
          <!-- IMAGE PLACEHOLDER -->
          <div
            @click="addMainImg"
            class="main-img-placeholder"
            v-if="!mainImg"
           >
            add image
          </div>

          <img class="main-img"
               draggable="false"
               @click="recordCoord"
               :src="mainImg"
          />
      </div>
<!--  TARGET  -->
    <div v-for="(item, index) in $store.state.activeEditEquipment.items" :key="index">
    	<img class="target"
            @click.stop="item.display = true"
            @mousedown="dragging = index"
         	src="@/assets/target-icon.png"
            alt="target"
            draggable="false"
    	    :style="{top: (item.y - 15) + 'px',
                     left: (item.x - 25) + 'px'
                    }"
         />
<!-- DETAILS BOX -->
      <div class="details-box"
           v-if="item.display"
           :style="{top: (item.y + 30) + 'px', left: (item.x) + 'px'}"
      >
          <div class="details-text-wrapper">
              <p style="color:white">Category:</p>
              <select
                  name="category"
                  id="category" 
                  v-model="item.category"
                  style="width:200px; height: 30px;"
              >
                  <option value="none" disabled>Select Category</option>
                  <option value="keyboard">Keyboard</option>
                  <option value="monitor">Monitor</option>
                  <option value="speaker">Speaker</option>
                  <option value="chair">Chair</option>
                  <option value="desk">Desk</option>
                  <option value="mouse">Mouse</option>
                  <option value="computer">Computer</option>
                  <option value="microphone">Microphone</option>
                  <option value="accessory">Accessory</option>
                  <option value="webcam">Webcam</option>
              </select>
          </div>

          <div class="details-text-wrapper">
              <p style="color:white">Model:</p>
              <input v-model="item.name"/>
          </div>

          <div class="details-text-wrapper">
              <p style="color:white">URL:</p>
              <input v-model="item.url"/>
          </div>

            <button
                class="enter-btn btn"
                @click.stop="$store.dispatch('hideItem', index)"
            >ENTER</button>
            <button
              class="remove-btn btn"
              @click.stop = "item.splice(index, 1)"
            >REMOVE
            </button>
         </div>
    </div>
  </div>

<!-- ITEMS SECTION-->

      <!-- PLACEHOLDER -->
    <div class="placeholder"
        v-if="equipment.length===0"
    >
    Add your equipment info by clicking on your setup's image!
    </div>

    <!-- ITEMS LIST -->
    <draggable 
        v-model="this.equipment" 
        group="items"
        @start="drag=true" 
        @end="drag=false" 
        item-key="id"
        class="items-list-container"
    >
        <template #item="{element}">
            <div class="item-details"
                @click.stop="element.display = !element.display"
            >
            <!-- ICON -->
            <img class="icon" 
                    :src="getIconPic(element)"
                    :alt="element.category"
                    v-if="element.category"
                    style="height: 50px;"
                >
                <!-- NAME -->
                <p style="color: white; padding-left: 10px">{{element.name}}</p>
                <!-- STORE LINK -->
                <a :href="element.url"
                    class="store-link"
                    target="_blank"
                    v-if="element.url"
                    >Visit Store
                </a>
            </div>
        </template>
    </draggable>

    <p style="font-size: 14px; color: white; opacity: 0.5; margin-top: 10px"
       v-if="equipment.length>1"
    >
    *drag to reorder
    </p>

  <div>{{this.equipment}}</div>

</template>

<script>
import draggable from 'vuedraggable'
  
export default {
  data() {
    return {
      equipment: [],
      done: false,
      draggable: false,
      dragging: null,
      mainImg: require('@/assets/setup-example.jpg'),
      
    }
  },
  components: { draggable },

  methods: {
    recordCoord(e) {
      const rect = e.target.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const point = {
        category: '',
        name: '',
        url: '',
        x,
        y,
        display: true,
      }
      this.$store.dispatch('addItem', point)
    },
    getIconPic(e) {
        if (e.category === 'accessory') {
            return require('@/assets/icons/accessory.png')
        }
        if (e.category === 'chair') {
            return require('@/assets/icons/chair.png')
        }
        if (e.category === 'computer') {
            return require('@/assets/icons/computer.png')
        }
        if (e.category === 'desk') {
            return require('@/assets/icons/desk.png')
        }
        if (e.category === 'headset') {
            return require('@/assets/icons/headset.png')
        }
        if (e.category === 'keyboard') {
            return require('@/assets/icons/keyboard.png')
        }
        if (e.category === 'microphone') {
            return require('@/assets/icons/microphone.png')
        }
        if (e.category === 'monitor') {
            return require('@/assets/icons/monitor.png')
        }
        if (e.category === 'mouse') {
            return require('@/assets/icons/mouse.png')
        }
        if (e.category === 'speaker') {
            return require('@/assets/icons/speaker.png')
        }
        if (e.category === 'webcam') {
            return require('@/assets/icons/webcam.png')
        }
    },
    onMouseMove(event) {
        event.preventDefault()
        if (this.dragging === null) { return }

        const {x, y} = this.$refs.imagesContainer.getBoundingClientRect()

        this.equipment[this.dragging].x = event.clientX - x
        this.equipment[this.dragging].y = event.clientY - y

    },
    addEquipment() {
        this.equipment[index].display = false 
    }

  }
}
  
</script>

<style scoped>
  
  .container {
    position: relative;
  }

  .main-img-placeholder {
      border: 2px dashed white;
      height: 400px;
      color: white;
      display: flex;
      justify-content: space-around;
      align-items: center;
      opacity: 0.5;
      cursor: pointer;
      margin-bottom: 20px;
  }
  .main-img-placeholder:hover {
      opacity: 1;
  }
  
  .main-img {
    width: 800px;
    height: auto;
    margin: 10px 0;
    cursor: crosshair;
    box-shadow: 0px 0px 33px -20px #000000;
  }
  
  .target {
    position: absolute;
    opacity: .75;
    width: 50px;
    height: auto;
    cursor: pointer;
    transition: opacity .1s ease-in-out;
  }

  .target:hover {
      opacity: 0.75;
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
      border: none;
  }

  #category {
      outline: none;
      border: none;
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
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 10px;
      width: min-content;
      /* border: 1px solid black; */
  }

  .placeholder {
      display: flex;
      justify-content: space-around;
      align-items: center;
      border: 2px dashed white;
      height: 200px;
      text-align: center;
      opacity: 0.5;
      cursor: default;
      color: white;
  }

  .item-details {
      display: flex;
      border: 1px solid white;
      border-radius: 7px;
      width: 227px;
      min-height: 90px;
      padding: 15px;
      position: relative;
      transition: .1s ease-in-out;
      cursor: grab;
  }

  .item-details:hover {
      transform: scale(1.01);
  }

  .item-details:active {
      cursor: grabbing;
  }

  .store-link {
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

  .store-link:hover {
      opacity: 1;
  }
  
</style>