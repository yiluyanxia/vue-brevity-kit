<template>
    <div class="brevity-page-header">
        <a-page-header @back="handleGoBack">
            <template #title>
                {{ title || $t($route.meta.title as string) }}
            </template>
            <template #extra>
                <a-button-group>
                    <slot name="button"></slot>
                    <a-tooltip>
                        <template #title>刷新</template>
                        <a-button @click="emitReload" v-if="onReload" class="reload-btn">
                            <template #icon>
                                <ReloadOutlined />
                            </template>
                        </a-button>
                    </a-tooltip>
                </a-button-group>
            </template>
            <slot></slot>
        </a-page-header>
    </div>
</template>
<script setup lang="ts">
import { ReloadOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'

const props = defineProps({
    title: String,
    onReload: Function,
    back: {
        type: Boolean,
        default: true
    }
})
const router = useRouter()
const emit = defineEmits(['reload'])
const emitReload = () => {
    emit('reload')
}
const goBack = () => {
    router.go(-1)
}
const handleGoBack = props.back ? goBack : undefined
</script>
<style lang="less" scoped>
.brevity-page-header {
    background-color: @low-color;
    margin: -24px -24px 24px;
}
</style>
