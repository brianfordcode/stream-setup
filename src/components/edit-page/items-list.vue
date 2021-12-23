<template>
<div class="main-container">


      <!-- PLACEHOLDER -->
    <div class="placeholder"
        v-if="$store.state.activeEditEquipment.items.length===0"
    >
    Add your equipment info by clicking on your setup's image!
    </div>

    <!-- ITEMS LIST -->
    <draggable 
        v-model="$store.state.activeEditEquipment.items" 
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
                />
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
       v-if="$store.state.activeEditEquipment.items.length>1"
    >
    *drag to reorder
    </p>

</div>

  <!-- <div>{{$store.state.activeEditEquipment.items}}</div> -->

</template>

<script>
import draggable from 'vuedraggable'

export default {
    data() {
        return {
            draggable: false,
        }
        
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
    },
    components: { draggable },

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
    }
}
</script>

<style scoped>

.main-container {
    margin-bottom: 50px;
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

.items-list-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    width: min-content;
    /* border: 1px solid black; */
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