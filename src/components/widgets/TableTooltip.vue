<template>
    <a-tooltip>
        <template #title>{{ title }}</template>
        <div class="ellipsis" v-if="state.isShowTooltip">{{ title }}</div>
    </a-tooltip>
    <span class="box" ref="boxRef" v-if="!state.isShowTooltip">{{ title }}</span>
</template>
<script setup lang="ts">
import { nextTick, reactive, ref, watch } from 'vue'

const props = defineProps({
    title: String
})

const boxRef = ref()
const state = reactive({
    isShowTooltip: false
})
function getState() {
    nextTick(() => {
        if (boxRef.value && boxRef.value.offsetWidth > boxRef.value.parentNode.offsetWidth) {
            state.isShowTooltip = true
        } else {
            state.isShowTooltip = false
        }
    })
}
getState()
watch(
    () => props.title,
    () => {
        state.isShowTooltip = false
        getState()
    }
)
</script>
<style lang="less" scoped>
.box {
    white-space: nowrap;
}
</style>
