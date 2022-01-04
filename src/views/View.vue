<template>

  <div class="view-container">

    <div class="profile">
      <profileHeader style="z-index: 10000"/>

      <!-- image and item icons CONTAINER -->
      <div
        class="image-container"
        style="height: 600px; width: 800px; position: relative; overflow: hidden"
      >
        <!-- MAIN IMAGE -->
        <img
          :src="$store.getters.setup($route.params.id).imageURL"
          :alt="$store.getters.setup($route.params.id).imageURL"
          style="height: 100%; width: 100%;"
          draggable = "false"
          @click="hoveredItem = null"
          @mouseleave="hoveredItem = null"
        />
        <!-- ITEM -->
          <div
            v-for="(item, index) in $store.getters.setup($route.params.id).items"
            :class="{'item-icon': true, 'hovered-list-item': hoveredListItem === index}"
            :key="index"
            :style="{
                    top: (item.y - 50) + 'px',
                    left: (item.x - 50) + 'px'
                  }"
            @mouseover="mouseOver(index)"
            
          >
          </div>

        <!-- ITEM MODAL -->
        <div
          class="modal-container"
          v-for="(item, index) in $store.getters.setup($route.params.id).items"
          :key="index"
        >
          <div
            class="item-modal"
            :style="{
                    top: detailBlockPlacement.y + 'px',
                    left: detailBlockPlacement.x + 'px'
                  }"
            v-if="hoveredItem == index && detailBlockPlacement"
          >
            <!-- ICON -->
            <img
              class="icon" 
              draggable="false"
              :src="getIconPic(item)"
              :alt="item.category"
              style="height: 50px;"
              
            />
            <!-- NAME -->
            <p style="color: white; padding-left: 10px">{{item.name}}</p>
            <!-- STORE LINK -->
            <a :href="item.url"
                class="store-link"
                target="_blank"
                v-if="item.url"
                >Visit Store
            </a>
          
          </div>
        </div>

      </div>

      <!-- item-list -->
      <div class="item-list-container">

        <div
          class="item-details"
          v-for="(item, index) in $store.getters.setup($route.params.id).items"
          :key="index"
          @click = "hoveredItem = null"
          @mouseenter = "hoveredListItem = index"
          @mouseleave = "hoveredListItem = null"
        >
          <!-- ICON -->
              <img
                class="icon" 
                draggable="false"
                :src="getIconPic(item)"
                :alt="item.category"
                style="height: 50px;"
              />
          <!-- NAME -->
              <p style="color: white; padding-left: 10px">{{item.name}}</p>
              <!-- STORE LINK -->
              <a :href="item.url"
                  class="store-link"
                  target="_blank"
                  v-if="item.url"
                  >Visit Store
              </a>

        </div>

      </div>

    </div>

    <sideBar/>

  </div>

</template>

<script>
import profileHeader from '../components/edit-page/profile-header.vue'
import sideBar from '../components/side-bar.vue'

export default {
  data() {
    return {
      hoveredItem: null,
      hoveredListItem: null,
    }
  },
  components: {
    profileHeader, sideBar
  },
  methods: {
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
    mouseOver(index) {
      if (this.hoveredItem === index) {return}
      this.hoveredItem = this.hoveredItem === index ? null : index;
    },
  },
  computed: {
    currentSetup() {
      return this.$store.getters.setup(this.$route.params.id)
    },
    currentlySelectedItem() {
      return this.currentSetup.items[this.hoveredItem]
    },
    detailBlockPlacement() {
      if (!this.currentlySelectedItem) return null
      const x = this.currentlySelectedItem.x >= 400 ? this.currentlySelectedItem.x - 250 : this.currentlySelectedItem.x - 5
      const y = this.currentlySelectedItem.y >= 300 ? this.currentlySelectedItem.y - 120 : this.currentlySelectedItem.y - 5
      console.log(x, y)
      return { x, y } 
    }
  }
}

</script>

<style scoped>

.view-container {
  display: flex;
  justify-content: space-around;
  margin: 100px auto;
  width: 1200px;
}

.item-icon {
  position: absolute;
  background: linear-gradient(45deg, rgb(255, 255, 255) 0%, rgb(187, 187, 187) 100%);
  height: 100px;
  width: 100px;
  border-radius: 50%;
  cursor: pointer;
  transition: .2s ease-in-out;
  opacity: 0;
}

.item-icon:hover,
.hovered-list-item {
  transform: scale(1.2);
  opacity: .25;
}

.item-list-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  width: min-content;
  margin-top: 10px;
  margin-bottom: 50px;
}

.item-details {
  display: flex;
  border: 1px solid white;
  border-radius: 7px;
  width: 227px;
  min-height: 60px;
  padding: 15px;
  position: relative;
}

.item-modal {
  position: absolute;
  display: flex;
  background: rgba(0,0,0,0.5);
  border-radius: 7px;
  width: 227px;
  min-height: 90px;
  padding: 15px;
  top: 0;
}

.item-container {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: black;
  /* padding: 20px; */
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