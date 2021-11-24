<template>

<!-- MAIN IMAGE -->
  <div class="container">
    <img class="main-img"
         draggable="false"
         @click="recordCoord"
         src="https://www.minimaldesksetups.com/wp-content/uploads/2020/09/Featureimage.jpg"
    />

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
            <input v-model="equipment[index].name"/>
        
            <select name="category" id="category" v-model="equipment[index].category">
                <option value="none" selected disabled hidden>Category</option>
                <option value="keyboard">Keyboard</option>
                <option value="monitor">Monitor</option>
                <option value="speaker">Speaker</option>
                <option value="chair">Chair</option>
                <option value="desk">Desk</option>
                <option value="mouse">Mouse</option>
                <option value="Accessory">Accessory</option>
            </select>
        
            <button
                style="width: 50%"
                @click.stop="equipment[index].display = false"
            >ENTER</button>
            <button
              @click.stop = "equipment.splice(index, 1)"
            > REMOVE
            </button>
         </div>
       </div>
    </div>

  <ul class="items-list-container">
    <li v-for="itemName in equipment" :key="itemName">
      {{ itemName.category }}: {{ itemName.name }}
      
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
        display: true
      }
      this.equipment.push(point)
      console.log(this.equipment)
    }
  }
}
  
</script>

<style scoped>
  
  .container {
    position: relative;
    /* padding: 20px; */
  }
  
  .main-img {
    width: 750px;
    height: auto;
  }
  
  .target {
    position: absolute;
    opacity: .5;
    width: 50px;
    height: auto;
  }
  
  .details-box {
    position: absolute;
    display: flex;
    flex-direction: column;
    border: 2px solid white;
    padding: 20px;
    background-color: rgba(0,0,0,0.5)
  }

  .items-list-container {
      padding: 20px;
  }
  
</style>