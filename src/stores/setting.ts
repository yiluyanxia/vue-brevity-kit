import { ref } from 'vue'
import { defineStore } from 'pinia'
import setting from '@/config/setting'
import {
    DISPLAY_KEY,
    THEME_KEY,
    LIGHT_MENU_KEY,
    CUSTON_THEME_KEY,
    COLUMNS_MENU_KEY,
    COLUMNS_MENU_TITLE_KEY,
    COLUMNS_MENU_TOOLTIP_KEY
} from '@/config/key'
import { getBoolean } from '@/utils/tool'
import type { ThemeItem } from '@/layouts/setting/model'

type DisplayKey = 'light' | 'deep' | 'dark'

export const useSettingStore = defineStore('setting', () => {
    const display = ref<DisplayKey>(setting.display as DisplayKey)
    localStorage.getItem(DISPLAY_KEY) && (display.value = localStorage.getItem(DISPLAY_KEY) as DisplayKey)

    const theme = ref<string>(setting.theme)
    localStorage.getItem(THEME_KEY) && (theme.value = localStorage.getItem(THEME_KEY) as string)

    const customTheme = ref<ThemeItem>(setting.customtheme)
    if (localStorage.getItem(CUSTON_THEME_KEY)) {
        customTheme.value = JSON.parse(localStorage.getItem(CUSTON_THEME_KEY) as string)
    }

    const lightMenu = ref<boolean>(setting.lightMenu)
    localStorage.getItem(LIGHT_MENU_KEY) && (lightMenu.value = getBoolean(localStorage.getItem(LIGHT_MENU_KEY)))

    const columnsMenu = ref<boolean>(setting.columnsMenu)
    localStorage.getItem(COLUMNS_MENU_KEY) && (columnsMenu.value = getBoolean(localStorage.getItem(COLUMNS_MENU_KEY)))

    const columnsMenuTitle = ref<boolean>(setting.columnsMenuTitle)
    localStorage.getItem(COLUMNS_MENU_TITLE_KEY) &&
        (columnsMenuTitle.value = getBoolean(localStorage.getItem(COLUMNS_MENU_TITLE_KEY)))

    const columnsMenuTooltip = ref<boolean>(setting.columnsMenuTooltip)
    localStorage.getItem(COLUMNS_MENU_TOOLTIP_KEY) &&
        (columnsMenuTooltip.value = getBoolean(localStorage.getItem(COLUMNS_MENU_TOOLTIP_KEY)))

    function setDisplay(value: DisplayKey) {
        display.value = value
        localStorage.setItem(DISPLAY_KEY, value)
    }
    function setTheme(value: string) {
        theme.value = value
        localStorage.setItem(THEME_KEY, value)
    }
    function setCustomTheme(value: ThemeItem) {
        customTheme.value = value
        localStorage.setItem(CUSTON_THEME_KEY, JSON.stringify(value))
    }
    function setLightMenu(value: boolean) {
        lightMenu.value = value
        localStorage.setItem(LIGHT_MENU_KEY, value ? 'true' : 'false')
    }
    function setColumnsMenu(value: boolean) {
        columnsMenu.value = value
        localStorage.setItem(COLUMNS_MENU_KEY, value ? 'true' : 'false')
    }
    function setColumnsMenuTitle(value: boolean) {
        columnsMenuTitle.value = value
        localStorage.setItem(COLUMNS_MENU_TITLE_KEY, value ? 'true' : 'false')
    }
    function setColumnsMenuTooltip(value: boolean) {
        columnsMenuTooltip.value = value
        localStorage.setItem(COLUMNS_MENU_TOOLTIP_KEY, value ? 'true' : 'false')
    }

    return {
        display,
        setDisplay,
        theme,
        setTheme,
        customTheme,
        setCustomTheme,
        columnsMenu,
        lightMenu,
        setLightMenu,
        setColumnsMenu,
        columnsMenuTitle,
        setColumnsMenuTitle,
        columnsMenuTooltip,
        setColumnsMenuTooltip
    }
})
