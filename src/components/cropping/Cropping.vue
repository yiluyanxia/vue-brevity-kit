<template>
    <div>
        <img ref="imgRef" src="../../assets/images/2.jpg" alt="Picture" />

    </div>
    <a-button @click="handleDestroy">destroy</a-button>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, onBeforeUnmount, ref } from 'vue'
import Cropper from 'cropperjs'

const cropper = ref()
// var cropper
const imgRef = ref()

var options = {
    aspectRatio: 16 / 9,
    preview: '.img-preview',
    ready: function (e) {
        console.log(e.type)
    },
    cropstart: function (e) {
        console.log(e.type, e.detail.action)
    },
    cropmove: function (e) {
        console.log(e.type, e.detail.action)
    },
    cropend: function (e) {
        console.log(e.type, e.detail.action)
    },
    crop: function (e) {
        // var data = e.detail

        console.log(e.type)
        // dataX.value = Math.round(data.x)
        // dataY.value = Math.round(data.y)
        // dataHeight.value = Math.round(data.height)
        // dataWidth.value = Math.round(data.width)
        // dataRotate.value = typeof data.rotate !== 'undefined' ? data.rotate : ''
        // dataScaleX.value = typeof data.scaleX !== 'undefined' ? data.scaleX : ''
        // dataScaleY.value = typeof data.scaleY !== 'undefined' ? data.scaleY : ''
    },
    zoom: function (e) {
        console.log(e.type, e.detail.scale)
    }
}
function init() {
    cropper.value = new Cropper(imgRef.value, options)
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
img {
    display: block;

    /* This rule is very important, please don't ignore this */
    max-width: 100%;
}
</style>
