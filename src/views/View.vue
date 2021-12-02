<template>

  <draggable 
    v-model="myArray" 
    group="items" 
    @start="drag=true" 
    @end="drag=false" 
    item-key="id"
    class="equipment"
  >
  <template #item="{element}" >
      <div class="item">{{element.name}}</div>
  </template>

  </draggable>

    <div>{{myArray}}</div>

</template>

<script>
import draggable from 'vuedraggable'

export default {
    data() {
        return {
            myArray: [{name: 1}, {name: 2}, {name: 3}, {name: 4}, {name: 5}, {name: 6}]
        }
    },
      components: { draggable },

}
</script>

<style scoped>

.equipment {
    display: flex;
    cursor:grab;
    font-size: 50px;
    color: white;
}

.item {
     border: 1px solid white;
     display: flex;
     justify-content: space-around;
     align-items: center;
     margin: 5px;
     padding: 10px;
     width: 50px;
}

</style>