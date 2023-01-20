<template>
    <div class="setting-btn" @click="handleShow">
        <BgColorsOutlined />
    </div>
    <a-drawer width="300" :closable="false" v-model:visible="visible" title="个性化" placement="right">
        <template #extra>
            <a-button class="ant-drawer-close" @click="handleClose">
                <template #icon><CloseOutlined /></template>
            </a-button>
        </template>
        <div class="setting-box">
            <h3 class="setting-title">显示</h3>
            <a-row class="setting-content setting-display" :gutter="[16, 16]">
                <a-col :span="12" class="display-item" v-for="item in SETTING_DISPLAY" :key="item.name">
                    <div
                        @click="handelDisplay(item)"
                        class="item-block"
                        :class="{ active: activeDisplay.name === item.name }"
                        :style="{ background: `${item.color}` }">
                        <a-skeleton size="small" :paragraph="{ rows: 2 }" :title="false" />
                        <CheckOutlined class="check-icon" v-if="activeDisplay.name === item.name" />
                    </div>
                    <span class="item-label">{{ item.name }}</span>
                </a-col>
            </a-row>
        </div>

        <div class="setting-box">
            <h3 class="setting-title">主题</h3>
            <a-row class="setting-content setting-theme" :gutter="[16, 16]">
                <a-col :span="6" class="theme-item" v-for="item in SETTING_THEME" :key="item.name">
                    <div
                        @click="handelTheme(item)"
                        class="item-block"
                        :style="{
                            background: `linear-gradient(135deg, ${item.primary}, transparent 90%),
                            linear-gradient(45deg, ${item.success},  transparent 70.71%),
                            linear-gradient(315deg,${item.warning},  transparent 70.71%),
                            linear-gradient(225deg, ${item.error},  transparent 70.71%)`
                        }">
                        <CheckOutlined class="check-icon" v-if="activeTheme.name === item.name" />
                    </div>
                    <span class="item-label">{{ item.name }}</span>
                </a-col>
            </a-row>

            <div class="setting-content setting-menu">
                <div class="menu-item">
                    <label>自定义</label>
                    <a-switch v-model:checked="activeCustomTheme" @change="changeCustomTheme" />
                </div>
            </div>

            <a-row
                class="setting-content setting-custom-theme"
                :class="{ 'setting-custom-theme-disabled': !activeCustomTheme }"
                :gutter="[16, 16]">
                <a-col :span="6" class="theme-item" v-for="(item, index) in customThemes" :key="index">
                    <div class="item-block">
                        <input
                            v-model="item.value"
                            type="color"
                            class="color-input"
                            @input="handleCustomTheme()"
                            :disabled="!activeCustomTheme" />
                    </div>
                    <span class="item-label">{{ item.key }}</span>
                </a-col>
            </a-row>
        </div>

        <div class="setting-box">
            <h3 class="setting-title">导航</h3>
            <div class="setting-content setting-menu">
                <div class="menu-item" v-if="activeDisplay.key === 'light'">
                    <label>浅色菜单</label>
                    <a-switch v-model:checked="lightMenu" @change="changeLightMenu" />
                </div>
                <div class="menu-item">
                    <label>分割菜单</label>
                    <a-switch v-model:checked="columnsMenu" @change="changeColumnsMenu" />
                </div>
                <div class="menu-item">
                    <label>分割菜单标题</label>
                    <a-switch
                        v-model:checked="columnsMenuTitle"
                        @change="changeColumnsMenuTitle"
                        :disabled="!columnsMenu" />
                </div>
                <div class="menu-item">
                    <label>菜单Tooltip</label>
                    <a-switch
                        v-model:checked="columnsMenuTooltip"
                        @change="changeColumnsMenuTooltip"
                        :disabled="!columnsMenu" />
                </div>
            </div>
        </div>
    </a-drawer>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { BgColorsOutlined, CloseOutlined, CheckOutlined } from '@ant-design/icons-vue'
import { SETTING_DISPLAY, SETTING_THEME } from './theme'
import { LIGHT_THEME_VARIABLES, DEEP_THEME_VARIABLES, DARK_THEME_VARIABLES } from './variablesCSS'
import { ConfigProvider } from 'ant-design-vue'
import antdDeepCss from '@/assets/styles/antd.deep.variable.css?raw'
import { useSettingStore } from '@/stores/setting'
import type { DisplayKey } from '@/model/index'
import type { DisplayItem, ThemeItem } from './model'

const settingStore = useSettingStore()

const visible = ref<boolean>(false)
const handleShow = () => {
    visible.value = true
}
const handleClose = () => {
    visible.value = false
}

// 显示和主题设置
const activeDisplay = ref<DisplayItem>(SETTING_DISPLAY[settingStore.display])
const activeTheme = ref<ThemeItem>(SETTING_THEME[settingStore.theme])

const attrKey = 'variables-theme-key'
const themeKey = `-${Date.now()}-${Math.random()}-variables-theme`

const darkStyleDom = document.createElement('style')
darkStyleDom.textContent = antdDeepCss
document.head.appendChild(darkStyleDom)
darkStyleDom.disabled = true

const handelDisplay = (item: DisplayItem) => {
    activeDisplay.value = item
    settingStore.setDisplay(item.key as DisplayKey)
    formatDisplay()
}
function formatDisplay() {
    if (activeDisplay.value.key === 'dark') {
        darkStyleDom.disabled = false
        formatCss(DARK_THEME_VARIABLES)
    } else if (activeDisplay.value.key === 'deep') {
        darkStyleDom.disabled = false
        formatCss(DEEP_THEME_VARIABLES)
    } else {
        darkStyleDom.disabled = true
        formatCss(LIGHT_THEME_VARIABLES)
    }
}

const handelTheme = (item: ThemeItem) => {
    activeTheme.value = item
    settingStore.setTheme(item.key)
    handleCustomThemes()
    handelConfigProvider(activeTheme.value)
}

const handelConfigProvider = (active: ThemeItem) => {
    ConfigProvider.config({
        theme: {
            primaryColor: active.primary,
            successColor: active.success,
            warningColor: active.warning,
            errorColor: active.error
        }
    })
}

function formatCss(variablesCSS: string) {
    const element = document.querySelector('head') || document.body
    const target = Array.prototype.find.call(
        element.children,
        (eLe) => eLe.tagName === 'STYLE' && eLe.getAttribute(attrKey) === themeKey
    ) as HTMLStyleElement

    if (target) {
        if (target.innerHTML !== variablesCSS) {
            target.innerHTML = variablesCSS
        }
        return
    }

    const styleElement = document.createElement('style')
    styleElement.innerHTML = variablesCSS
    element.appendChild(styleElement)
    styleElement.setAttribute(attrKey, themeKey)
}

// 主题 自定义
const customThemes = ref()

const handleCustomThemes = () => {
    customThemes.value = {
        primary: {
            key: 'Primary',
            value: activeTheme.value.primary
        },
        success: {
            key: 'Success',
            value: activeTheme.value.success
        },
        warning: {
            key: 'Warning',
            value: activeTheme.value.warning
        },
        error: {
            key: 'Error',
            value: activeTheme.value.error
        }
    }
}
handleCustomThemes()

const activeCustomTheme = ref<boolean>(false)

const changeCustomTheme = (val: boolean) => {
    settingStore.setCustomTheme
    if (!val) {
        handelConfigProvider(activeTheme.value)
    } else {
        handleCustomTheme()
    }
}
const handleCustomTheme = () => {
    if (!activeCustomTheme.value) {
        return
    }
    let active = {
        key: 'custom',
        name: '自定义',
        primary: customThemes.value['primary'].value,
        success: customThemes.value['success'].value,
        warning: customThemes.value['warning'].value,
        error: customThemes.value['error'].value
    }
    settingStore.setCustomTheme(active)
    handelConfigProvider(active)
}

// 初始化 渲染样式
formatDisplay()
handelConfigProvider(activeTheme.value)

// 导航设置
const lightMenu = ref<boolean>(settingStore.lightMenu)
const columnsMenu = ref<boolean>(settingStore.columnsMenu)
const columnsMenuTitle = ref<boolean>(settingStore.columnsMenuTitle)
const columnsMenuTooltip = ref<boolean>(settingStore.columnsMenuTooltip)

const changeLightMenu = (checked: boolean) => {
    settingStore.setLightMenu(checked)
}
const changeColumnsMenu = (checked: boolean) => {
    settingStore.setColumnsMenu(checked)
}
const changeColumnsMenuTitle = (checked: boolean) => {
    settingStore.setColumnsMenuTitle(checked)
}
const changeColumnsMenuTooltip = (checked: boolean) => {
    settingStore.setColumnsMenuTooltip(checked)
}
</script>
<style lang="less" scoped>
.setting-btn {
    padding: 0 8px;
    cursor: pointer;
    &:hover {
        color: @primary;
    }
}
.setting-box {
    margin-bottom: 36px;
    .setting-title {
        font-size: 18px;
        margin-bottom: 24px;
    }
}

.setting-display {
    .display-item {
        .item-block {
            border: 2px solid rgba(0, 0, 0, 0.3);
            padding: 10px;
            border-radius: 8px;
            margin-bottom: 8px;
            cursor: pointer;
            position: relative;
            &:hover {
                box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
            }
            &.item-dark {
                background-color: #1d2939;
            }
            &.active {
                border-color: @primary;
            }
            .check-icon {
                position: absolute;
                bottom: 4px;
                left: 0;
                right: 0;
                color: #848586;
            }
        }
        .item-label {
            text-align: center;
            display: block;
        }
    }
}

.setting-theme {
    margin-bottom: 24px;
    .theme-item {
        .item-block {
            padding-top: 100%;
            border-radius: 8px;
            margin-bottom: 8px;
            position: relative;
            cursor: pointer;
            &:hover {
                box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
            }
            .check-icon {
                position: absolute;
                bottom: 8px;
                left: 0;
                right: 0;
                color: #fff;
                font-size: 16px;
            }
        }
        .item-label {
            text-align: center;
            display: block;
            font-size: 12px;
        }
    }
}
.setting-custom-theme {
    &.setting-custom-theme-disabled {
        .theme-item {
            opacity: 0.5;
        }
    }
    .theme-item {
        .item-block {
            position: relative;
            cursor: pointer;
            overflow: hidden;
            width: 44px;
            height: 16px;
            margin: 0 auto 8px;
            .color-input {
                padding: 0;
                margin: -5px -3px;
                outline: none;
                appearance: none;
                border: none;
                cursor: pointer;
            }
        }
        .item-label {
            text-align: center;
            display: block;
            font-size: 12px;
        }
    }
}
.setting-menu {
    .menu-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
    }
}
</style>
