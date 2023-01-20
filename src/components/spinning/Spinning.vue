<template>
    <section class="full-spinning" v-if="spinning" :style="[background ? `background-color: ${background}` : '']">
        <Spin :size="size" :tip="tip" :spinning="spinning" />
    </section>
</template>

<script setup lang="ts">
import { Spin } from 'ant-design-vue'
import type { SpinSize } from 'ant-design-vue/lib/spin/Spin'
import type { PropType } from 'vue'

defineProps({
    size: {
        type: String as PropType<SpinSize>,
        default: 'default'
    },
    tip: {
        type: String,
        default: ''
    },
    spinning: {
        type: Boolean,
        default: false
    },
    background: {
        type: String
    }
})
</script>

<style lang="less" scoped>
.full-spinning {
    position: fixed;
    background-color: hsla(0, 0%, 100%, 0.3);
    top: 0;
    left: 0;
    transition: opacity 0.3s;
    z-index: 9999;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}
</style>
