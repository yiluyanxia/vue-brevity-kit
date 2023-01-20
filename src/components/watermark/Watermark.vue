<template></template>
<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
    width: {
        type: Number,
        default: 360
    },
    height: {
        type: Number,
        default: 180
    },
    textAlign: {
        type: String,
        default: 'center'
    },
    textBaseline: {
        type: String,
        default: 'middle'
    },
    font: {
        type: String,
        default: '20px serif'
    },
    fillStyle: {
        type: String,
        default: '#333'
    },
    rotate: {
        type: Number,
        default: 45
    },
    content: {
        type: String,
        default: '水印内容'
    }
})
const renderWatermark = () => {
    const canvas = document.createElement('canvas')
    canvas.setAttribute('width', props.width + 'px')
    canvas.setAttribute('height', props.height + 'px')
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    // eslint-disable-next-line no-undef
    ctx.textAlign = props.textAlign as CanvasTextAlign
    // eslint-disable-next-line no-undef
    ctx.textBaseline = props.textBaseline as CanvasTextBaseline
    ctx.font = props.font
    ctx.fillStyle = props.fillStyle
    ctx.rotate((Math.PI / 180) * props.rotate)
    ctx.fillText(props.content, parseFloat(props.width + 'px') / 2, parseFloat(props.height + 'px') / 2)
    const base64Url = canvas.toDataURL()
    const box = document.createElement('div')

    const styleStr = `
                  position:fixed;
                  top:0;
                  left:0;
                  bottom:0;
                  right:0;
                  width:100%;
                  height:100%;
                  z-index: 99999;
                  pointer-events:none;
                  background-repeat:repeat;
                  background-image:url('${base64Url}')`

    box.setAttribute('style', styleStr)
    document.body.insertBefore(box, document.body.firstChild)
}
renderWatermark()
</script>
