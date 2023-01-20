<template>
    <VideoPlayer :options="videoOptions" />
</template>
<script setup lang="ts">
import VideoPlayer from '@/components/video/VideoPlayer.vue'

const videoOptions = {
    sources: [{ src: '/video/video.mp4', type: 'video/mp4' }]
}
</script>
