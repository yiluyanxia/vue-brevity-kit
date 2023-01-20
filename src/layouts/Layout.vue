<template>
    <a-layout class="brevity-basic-layout-box">
        <a-drawer
            v-if="layoutStore.miniScreen"
            class="brevity-drawer"
            width="200"
            :closable="false"
            :visible="visible"
            placement="left"
            @close="onClose">
            <Sider title="drawer" />
        </a-drawer>
        <Sider title="sider" v-else />
        <a-layout class="layout-main-box" :style="{ marginLeft: `${layoutStore.marginLeft}px` }">
            <CommonHeader />
            <a-layout-content class="layout-content-box" :style="{ margin: '72px 24px 16px' }">
                <router-view></router-view>
            </a-layout-content>
            <a-layout-footer>
                <CommonFooter theme="white" />
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import CommonHeader from './components/Header.vue'
import CommonFooter from './components/Footer.vue'
import Sider from './components/Sider.vue'
import { useLayoutStore } from '@/stores/layout'

const layoutStore = useLayoutStore()

const visible = computed(() => {
    return layoutStore.miniScreen && !layoutStore.collapsed
})
const onClose = () => {
    layoutStore.setCollapsed(true)
}
</script>
<style lang="less" scoped>
.brevity-basic-layout-box {
    min-height: 100%;
    .layout-content-box {
        position: relative;
    }
}
</style>
<style lang="less">
.brevity-drawer {
    .ant-drawer-body {
        padding: 0 !important;
    }
    .ant-drawer-content {
        background-color: rgba(0, 0, 0, 0.45);
    }
    .brevity-layout-sider {
        box-shadow: initial;
    }
}
</style>
