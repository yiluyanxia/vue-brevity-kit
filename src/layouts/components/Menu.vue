<template>
    <div class="brevity-menu-box">
        <div
            class="logo-box"
            :class="layoutStore.collapsed ? 'collapsed' : ''"
            :style="{ width: layoutStore.miniScreen ? '200px' : layoutStore.marginLeft + 'px' }">
            <img class="logo" src="@/assets/images/logo.svg" />
            <h1
                v-if="!layoutStore.collapsed"
                :class="{ 'light-dark-menu': settingStore.display === 'light' && !settingStore.lightMenu }">
                {{ env.VITE_APP_TITLE }}
            </h1>
        </div>
        <a-menu
            v-model:selectedKeys="selectedKeys"
            v-model:openKeys="openKeys"
            :theme="settingStore.display === 'light' && settingStore.lightMenu ? 'light' : 'dark'"
            mode="inline"
            @click="handleClick">
            <template v-for="(item, index) in routes">
                <template v-if="item.children && item.children.length > 0">
                    <SubMenu :subMenus="item" :key="index" />
                </template>
                <template v-else>
                    <a-menu-item :key="item.name">
                        <template #icon>
                            <Icon v-if="item.meta.icon" :icon="item.meta.icon" />
                        </template>
                        {{ $t(item.meta.title) }}
                    </a-menu-item>
                </template>
            </template>
        </a-menu>
    </div>
</template>
<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import Icon from '@/components/icon/index'
import { routes } from '@/router/route'
import SubMenu from './SubMenu.vue'
import { useSettingStore } from '@/stores/setting'
import { useLayoutStore } from '@/stores/layout'

const env = import.meta.env

const router = useRouter()
const route = useRoute()
const layoutStore = useLayoutStore()
const settingStore = useSettingStore()

const selectedKeys = ref<string[]>()
const openKeys = ref<string[]>([])

const routeMatched = route.matched

const getCurrentMenu = () => {
    if (!route.meta.hide) {
        selectedKeys.value = [route.name] as string[]
    } else {
        selectedKeys.value = [route.meta.name] as string[]
    }
    if (layoutStore.collapsed) {
        openKeys.value = []
    } else {
        if (routeMatched.length >= 2) {
            routeMatched.map((i) => {
                openKeys.value.push(i.name as string)
            })
        } else {
            openKeys.value = [routeMatched[0].name as string]
        }
    }
}
getCurrentMenu()
const handleClick = (item: { key: string }) => {
    router.push({ name: item.key })
    layoutStore.miniScreen && layoutStore.setCollapsed(true)
}
</script>
<style lang="less" scoped>
.brevity-menu-box {
    min-height: 100%;
    .logo-box {
        height: 64px;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        justify-content: center;
        .logo {
            width: 32px;
            height: 32px;
            display: block;
        }
        h1 {
            white-space: nowrap;
            color: @color;
            font-size: 16px;
            margin: 0 0 0 12px;
            font-weight: 600;
            vertical-align: middle;
            &.light-dark-menu {
                color: #fff;
            }
        }
    }
}
</style>
