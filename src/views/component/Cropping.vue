<template>
    <Cropper @upload="handleUpload" />
</template>
<script setup lang="ts">
import Cropper from '@/components/cropping/Cropper.vue'
import { message } from 'ant-design-vue'

const handleUpload = (value) => {
    console.log('value', value);
    message.success('上传成功')
}
</script>
