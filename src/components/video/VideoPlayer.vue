<template>
    <div>
        <video ref="videoPlayer" class="video-js brevity-video-js"></video>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import videojs from 'video.js'
import type { VideoJsPlayerOptions } from 'video.js'
import 'video.js/dist/video-js.css'

const props = defineProps({
    options: {
        type: Object,
        default() {
            return {}
        }
    }
})

const videoPlayer = ref()
const player = ref()

onMounted(() => {
    const options: VideoJsPlayerOptions = {
        controls: true,
        playbackRates: [0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0],
        autoplay: false,
        muted: false,
        loop: false,
        preload: 'auto',
        language: 'zh-CN',
        aspectRatio: '16:9',
        fluid: true,
        poster: '',
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: true
        },
        ...props.options
    }
    player.value = videojs(videoPlayer.value, options)
})

onUnmounted(() => {
    if (player.value) {
        player.value.dispose()
    }
})
</script>
<style lang="less">
.brevity-video-js {
    // position: absolute;
    // top: 0;
    // bottom: 0;
    // left: 0;
    // right: 0;
    // margin: auto;
    // background-color: aquamarine;
    // width: 100%;
    // height: 100%;
    // padding-top: 0 !important;
    .vjs-big-play-button {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
