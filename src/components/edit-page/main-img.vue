<template>

<!-- MAIN IMAGE -->
  <div
    class="main-container"
    @mousemove = "onMouseMove"
    @mouseup = "dragging = null"
    @mouseleave="dragging = null"
  >
      <div
        class="images-container"
        ref = "imagesContainer"
        style = "height: 612.61px; width: 800px;"
      >
      
          <!-- IMAGE PLACEHOLDER -->
          <div
            @click="addMainImg"
            class="main-img-placeholder"
            v-if="!$store.getters.setup($route.params.id).imageURL"
           >
            add image
          </div>
            <div class="add-image-btn">Change Image</div>
            <img class="main-img"
                draggable="false"
                @click="addItem"
                :src="$store.getters.setup($route.params.id).imageURL"
            />

      </div>

<!--  TARGET  -->
    <div v-for="(item, index) in $store.getters.setup($route.params.id).items" :key="index">
    	<img
        src="@/assets/target-icon.png"
        class="target"
        @dblclick.stop="displayedItemIndex = displayedItemIndex === index ? null : index, hoveredItem = null"
        @mousedown="dragging = index"
        @mouseenter="hoveredItem = hoveredItem === index ? null : index;"
        @mouseleave="hoveredItem = null"
        alt="target"
        draggable="false"
        :style="{
                  top: (item.y - 25) + 'px',
                  left: (item.x - 25) + 'px'
                }"
      />

         <!-- TOOLTIP ON HOVER -->
        <p
          class="tooltip"
          v-if="hoveredItem === index"
          :style="{
                    top: (item.y + 30) + 'px',
                    left: (item.x - 55) + 'px'
                  }"
        >
        Click to move<br>Double click to edit
        </p>

<!-- DETAILS BOX -->
      <div class="details-box"
           v-if="displayedItemIndex === index"
           :style="{top: (item.y + 5) + 'px', left: (item.x + 5) + 'px'}"
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
              @click.stop="displayedItemIndex = null"
          >ENTER
          </button>
          <button
            class="remove-btn btn"
            @click.stop="$store.dispatch('removeItem', { item, setupId: this.$route.params.id, index }), displayedItemIndex = null"
          >REMOVE
          </button>
      </div>

    </div>

  </div>

  <!-- ITEM LIST -->
  <itemList @toggleItemDisplay="index => displayedItemIndex = index"/>

</template>

<script>
import itemList from './items-list.vue'

// make sure target doesn't go off image-container when moving
const clamp = (value, min, max) => Math.max(min, Math.min(max, value))
  
export default {
  data() {
    return {
      dragging: null,
      displayedItemIndex: null,
      hoveredItem: null,
    }
  },
  components: { itemList },
  methods: {
    addItem(e) {
      const rect = e.target.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const setupId = this.$route.params.id
      const setup = this.$store.getters.setup(setupId)
      this.displayedItemIndex = setup.items.length
      const item = {
        category: '',
        name: '',
        url: '',
        x,
        y,
      }
      this.$store.dispatch('addItem', { item, setupId })

      console.log(this.$route.params.id)

    },
    onMouseMove(event) {
        event.preventDefault()

        if (this.dragging === null) { return }

        this.hoveredItem = null;
        this.displayedItemIndex = null;
        
        const {x, y, width, height} = this.$refs.imagesContainer.getBoundingClientRect()

        this.$store.dispatch({
          type: 'moveItem',
          setupId: this.$route.params.id,
          itemIndex: this.dragging,
          point: {
            x: clamp(event.clientX - x, 0, width),
            y: clamp(event.clientY - y, 0, height)
          }
        })
    },

  }

}
  
</script>

<style scoped>
  
  .main-container {
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
  }

  .main-img-placeholder:hover {
      opacity: 1;
  }
  
  .main-img {
    width: 800px;
    height: auto;
    /* padding: 10px 0; */
    cursor: crosshair;
    box-shadow: 0px 0px 33px -20px #000000;
  }

  .add-image-btn {
    position: absolute;
    bottom: 0;
    color: white;
    background: green;
    padding: 7px;
    cursor: pointer;
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

  .tooltip {
    position: absolute;
    background: rgba(0,0,0,0.5);
    padding: 5px;
    color: white;
    opacity: 0.5;
    border-radius: 5px;
    font-size: 12px;
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
  
</style>