<template>
    <div class="cropper">
        <div class="cropper-state">
            <img class="cropper-state-img" ref="imgRef" src="../../assets/images/2.jpg" alt="Picture" />
        </div>
        <div class="cropper-preview">
            <div class="cropper-preview-square"></div>
            <div class="cropper-preview-circle"></div>
        </div>
    </div>

    <a-button @click="handleDestroy">destroy</a-button>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, onBeforeUnmount, ref } from 'vue'


import Cropper from 'cropperjs'

const cropper = ref()
// var cropper
const imgRef = ref()

function init() {
    cropper.value = new Cropper(imgRef.value)
}

function handleDestroy() {
    console.log('cropper', cropper.value)

    cropper.value && cropper.value.destroy()
    cropper.value = null
}
// init()
onMounted(() => {
    init()
})
// onBeforeUnmount(() => {
//     cropper && cropper.destroy()
//     cropper = null
// })
// onUnmounted(() => {
//     cropper=null
// })
</script>
<style lang="less" scoped>
.cropper {
    // display: flex;
    &-state {
        width: 61.8%;
        height: 497px;
        max-height: 497px;
        min-height: 497px;
        &-img {
            max-width: 100%;
            height: 100%;
            display: block;
        }
    }
    &-preview {
        flex: 1;
    }
}
</style>
