<template>
    <a-layout-sider
        class="brevity-layout-sider"
        :class="[settingStore.display, { 'dark-menu': !settingStore.lightMenu }]"
        :breakpoint="layoutStore.miniScreen ? null : 'lg'"
        :collapsed-width="layoutStore.collapsedWidth"
        @breakpoint="onBreakpoint"
        v-model:collapsed="layoutStore.collapsed"
        :width="layoutStore.siderWidth"
        :style="{
            overflow: 'hidden auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 2,
            transition: 'width 0.2s'
        }">
        <ColumnsMenu v-if="layoutStore.column" />
        <Menu v-else />
    </a-layout-sider>
</template>
<script setup lang="ts">
import Menu from './Menu.vue'
import ColumnsMenu from './ColumnsMenu.vue'
import { useSettingStore } from '@/stores/setting'
import { useLayoutStore, useBrokenStore } from '@/stores/layout'

const settingStore = useSettingStore()
const layoutStore = useLayoutStore()
const brokenStore = useBrokenStore()

const onBreakpoint = (broken: boolean) => {
    if (layoutStore.noColumn) {
        layoutStore.setCollapsed(true)
        return
    }
    if (broken) {
        layoutStore.setCollapsed(true)
    } else {
        layoutStore.setCollapsed(false)
    }
    brokenStore.onBroken(broken)
}
</script>
<style lang="less" scoped>
.brevity-layout-sider {
    box-shadow: 0 2px 8px 0 @height-color;
    background-color: @low-color;
    &.light {
        &.dark-menu {
            background-color: #001529;
        }
    }
}
</style>
