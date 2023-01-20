<template>
    <div class="confetti">
        <div
            class="circular-container"
            :style="{ background: `linear-gradient(rgba(${r}, ${g}, ${b}, 0.1), #fff 85%)` }"></div>
        <div class="shadow-container" :style="{ background: `rgba(${r}, ${g}, ${b}, 0.1)` }"></div>
        <CheckCircleFilled class="icon success" v-if="type === 'success'" />
        <CloseCircleFilled class="icon error" v-if="type === 'error'" />
        <template v-if="type === 'success'">
            <i v-for="(item, index) in rectangle" :key="index" :style="item" class="rectangle"></i>
        </template>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getRandomInt } from '@/utils/tool'
import { useSettingStore } from '@/stores/setting'
import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons-vue'

const props = defineProps({
    type: {
        type: String,
        default: 'success'
    }
})

const settingStore = useSettingStore()

const rectangle: any = ref([])
const color = [
    settingStore?.customTheme?.primary,
    settingStore?.customTheme?.success,
    settingStore?.customTheme?.warning,
    settingStore?.customTheme?.error
]
for (let i = 0; i < 30; i++) {
    rectangle.value.push({
        '--bg': color[getRandomInt(3)],
        '--x': getRandomInt(1),
        '--y': getRandomInt(1),
        '--z': getRandomInt(1),
        '--a': getRandomInt(360) + 'deg',
        '--ax': getRandomInt(10) + 'deg',
        '--ay': getRandomInt(10) + 'deg'
    })
}
const colorType = props.type === 'success' ? settingStore?.customTheme?.success : settingStore?.customTheme?.error
const r16 = colorType?.substring(1, 3)
const g16 = colorType?.substring(3, 5)
const b16 = colorType?.substring(5, 7)

const r = parseInt(`0x${r16}`)
const g = parseInt(`0x${g16}`)
const b = parseInt(`0x${b16}`)

function send() {
    let rectangles = document.querySelectorAll<HTMLElement>('i.rectangle')
    for (let i = 0; i < rectangles.length; i++) {
        rectangles[i].style.left = getRandomInt(300) + 'px'
        rectangles[i].style.top = getRandomInt(150) + 'px'
        rectangles[i].style.transition = 'top .2s, left .2s'
    }
    setTimeout(() => {
        for (let i = 0; i < rectangles.length; i++) {
            rectangles[i].style.top = '300px'
            rectangles[i].style.opacity = '0'
            rectangles[i].style.transition = 'top 2s, opacity 1.5s'
            rectangles[i].style.animation = 'rotate linear infinite .6s'
        }
    }, 200)
}
onMounted(() => {
    if (props.type === 'success') {
        setTimeout(() => {
            send()
        }, 0)
    }
})
</script>
<style lang="less" scoped>
.confetti {
    user-select: none;
    pointer-events: none;
    position: relative;
    width: 300px;
    height: 340px;
    .rectangle {
        display: block;
        width: 16px;
        height: 8px;
        background-color: var(--bg);
        transform: rotate3d(var(--x), var(--y), var(--z), var(--a)) skew(var(--ax), var(--ay));
        position: absolute;
        top: 300px;
        left: 140px;
    }
    .circular-container {
        width: 300px;
        height: 300px;
        border-radius: 100%;
        // background: linear-gradient(rgba(24, 144, 255, 0.2), #fff 85%);
    }
    .shadow-container {
        width: 300px;
        height: 40px;
        border-radius: 100%;
        // background: rgba(24, 144, 255, 0.12);
    }
    .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 98px;
        color: @primary;
        &.success {
            color: @success;
        }
        &.error {
            color: @error;
        }
    }
}

@keyframes rotate {
    0% {
        transform: rotateY(0deg) rotate3d(var(--x), var(--y), var(--z), var(--a)) skew(var(--ax), var(--ay));
    }
    100% {
        transform: rotateY(360deg) rotate3d(var(--x), var(--y), var(--z), var(--a)) skew(var(--ax), var(--ay));
    }
}
@media (max-width: 576px) {
    .confetti {
        transform: scale(0.8);
    }
}
</style>
