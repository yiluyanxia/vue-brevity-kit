<template>
    <div class="brevity-column-menu-box" :class="[settingStore.display, { 'dark-menu': !settingStore.lightMenu }]">
        <div class="layout-menu-left" :class="{ 'show-title': settingStore.columnsMenuTitle }">
            <div class="logo-box">
                <img class="logo" src="@/assets/images/logo.svg" />
            </div>
            <template v-for="(item, index) in routes" :key="index">
                <a-tooltip placement="right" v-if="settingStore.columnsMenuTooltip">
                    <template #title>{{ $t(item.meta.title) }}</template>
                    <ColumnsMenuItem
                        :menuItem="item"
                        :currentMenu="currentMenu"
                        :showTitle="settingStore.columnsMenuTitle"
                        :display="settingStore.display"
                        :lightMenu="settingStore.lightMenu"
                        @active="handleRouteGroup(item)" />
                </a-tooltip>
                <ColumnsMenuItem
                    v-else
                    :menuItem="item"
                    :currentMenu="currentMenu"
                    :showTitle="settingStore.columnsMenuTitle"
                    :display="settingStore.display"
                    :lightMenu="settingStore.lightMenu"
                    @active="handleRouteGroup(item)" />
            </template>
        </div>
        <div class="layout-menu-right" v-if="!currentMenu?.meta.noColumn">
            <div class="current-title">{{ $t(currentMenu?.meta.title) }}</div>
            <a-menu
                v-model:selectedKeys="selectedKeys"
                v-model:openKeys="openKeys"
                :theme="settingStore.display === 'light' && settingStore.lightMenu ? 'light' : 'dark'"
                mode="inline"
                @click="handleClick">
                <template v-for="(item, index) in currentMenu.children">
                    <template v-if="!item.meta.hide && item.children && item.children.length > 0">
                        <SubMenu :subMenus="item" :key="index" />
                    </template>
                    <template v-else>
                        <a-menu-item v-if="!item.meta.hide" :key="item.name">
                            <Icon v-if="item.meta.icon" :icon="item.meta.icon" />
                            {{ $t(item.meta.title) }}
                        </a-menu-item>
                    </template>
                </template>
            </a-menu>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import Icon from '@/components/icon/index'
import { routes } from '@/router/route'
import { useLayoutStore } from '@/stores/layout'
import { useSettingStore } from '@/stores/setting'
import SubMenu from './SubMenu.vue'
import ColumnsMenuItem from './ColumnsMenuItem.vue'

const router = useRouter()
const route = useRoute()

const settingStore = useSettingStore()
const layoutStore = useLayoutStore()

const selectedKeys = ref<string[]>()
const openKeys = ref<string[]>([])
const currentMenu = ref()

const getCurrentMenu = () => {
    const routeMatched = route.matched
    if (!route.meta.hide) {
        selectedKeys.value = [route.name] as string[]
    } else {
        selectedKeys.value = [route.meta.name] as string[]
    }
    if (routeMatched.length >= 3) {
        routeMatched.map((i) => {
            openKeys.value.push(i.name as string)
        })
    }
}
getCurrentMenu()

const getMenuChildren = () => {
    routes.map((i) => {
        if (i.name === route.matched[1].name) {
            currentMenu.value = i
        }
    })

    if (currentMenu.value.meta.noColumn) {
        layoutStore.setNoColumn(true)
    }
}
getMenuChildren()

const handleRouteGroup = (item: any) => {
    currentMenu.value = item
    router.push({ name: item.name })
    if (item.meta.noColumn) {
        layoutStore.setNoColumn(true)
        layoutStore.setCollapsed(true)
    } else {
        layoutStore.setNoColumn(false)

        if (layoutStore.collapsed) {
            layoutStore.setCollapsed(false)
        }
    }
}

const handleClick = (item: { key: string }) => {
    router.push({ name: item.key })
}
watch(route, () => {
    getCurrentMenu()
})
</script>
<style lang="less" scoped>
.brevity-column-menu-box {
    display: flex;
    min-height: 100%;
    .layout-menu-left {
        padding: 12px;
        background-color: @height-color;
        &.show-title {
            padding: 12px 6px;
            .logo-box {
                background-color: transparent;
            }
        }
        .logo-box {
            text-align: center;
            padding: 4px;
            border-radius: 4px;
            background-color: #fff;
            margin-bottom: 12px;
            .logo {
                width: 28px;
                height: 28px;
                display: block;
                margin: 0 auto;
            }
        }
    }
    .layout-menu-right {
        background-color: @low-color;
        flex: 1;
        padding-top: 12px;
        .current-title {
            font-size: 16px;
            color: @color;
            line-height: 36px;
            padding: 0 24px;
            margin-bottom: 8px;
        }
    }
    &.light {
        &.dark-menu {
            .layout-menu-left {
                background-color: #101727;
            }
            .layout-menu-right {
                background-color: #1d2939;
                .current-title {
                    color: #fff;
                }
            }
        }
    }
}
</style>
<style lang="less">
.brevity-column-menu-box {
    &.dark,
    &.deep,
    &.dark-menu {
        .ant-menu .ant-menu-item {
            margin-bottom: 12px !important;
        }
        .ant-menu.ant-menu-dark,
        .ant-menu-dark .ant-menu-sub,
        .ant-menu.ant-menu-dark .ant-menu-sub {
            background-color: @low-color;
        }
        .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
            background-color: @low-color;
        }

        .ant-menu-root .ant-menu-item {
            padding-left: 12px !important;
            padding-right: 12px !important;
        }
        .ant-menu-root .ant-menu-item > .ant-menu-title-content {
            padding-left: 12px;
        }
        .ant-menu-root .ant-menu-item.ant-menu-item-selected > .ant-menu-title-content {
            background-color: @primary;
            border-radius: 4px;
        }
        .ant-menu-dark.ant-menu-inline .ant-menu-item,
        .ant-menu-dark.ant-menu-inline .ant-menu-submenu-title {
            width: auto;
        }
        .ant-menu-inline > .ant-menu-item,
        .ant-menu-sub.ant-menu-inline > .ant-menu-item {
            height: 36px;
            line-height: 36px;
        }
        .ant-menu-sub {
            .ant-menu-item {
                .ant-menu-title-content {
                    padding-left: 34px;
                }
            }
        }
        &.light {
            .ant-menu.ant-menu-dark,
            .ant-menu-dark .ant-menu-sub,
            .ant-menu.ant-menu-dark .ant-menu-sub {
                background-color: #1d2939;
            }
            .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
                background-color: #1d2939;
            }
        }
    }
}
</style>
