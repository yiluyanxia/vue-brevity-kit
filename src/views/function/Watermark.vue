<template>
    <a-card :bordered="false" title="水印" class="brevity-stretch-card">
        <a-input v-model:value="watermark" style="max-width: 360px; display: block" />
        <a-button type="primary" class="mt24 mr12" @click="handleWatermark">加水印</a-button>
        <a-button type="primary" class="mr12" @click="clearWatermark">去水印</a-button>
    </a-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Watermark from '@/components/watermark/'

const watermark = ref()

const handleWatermark = () => {
    clearWatermark()
    let options = {}
    if (watermark.value) {
        options = {
            text: watermark.value
        }
    } else {
        options = {}
    }
    Watermark.service(options)
}

const clearWatermark = () => {
    Watermark.close()
}
</script>
