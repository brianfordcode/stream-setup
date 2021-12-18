<template>

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
            draggable: false,
        }
        
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

<style>

</style>