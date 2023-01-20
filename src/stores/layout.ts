import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { useSettingStore } from './setting'
import useBreakpoint from '@/hooks/useBreakpoint'

const { miniScreen, screenSize } = useBreakpoint()

export const useLayoutStore = defineStore('layout', () => {
    const settingStore = useSettingStore()
    const collapsed = ref<boolean>(miniScreen.value)
    const noColumn = ref<boolean>(false)

    watch(miniScreen, () => {
        collapsed.value = miniScreen.value
    })
    const column = computed(() => {
        return settingStore.columnsMenu && screenSize.value && ['xl', 'xxl'].includes(screenSize.value)
    })

    const siderWidth = computed(() => {
        if (screenSize.value && ['xs', 'sm', 'md', 'lg'].includes(screenSize.value)) {
            // 小于 992
            return 200
        } else {
            if (settingStore.columnsMenuTitle) {
                return noColumn.value ? 72 : 244
            } else {
                return noColumn.value ? 60 : 244
            }
        }
    })

    const marginLeft = computed(() => {
        if (miniScreen.value) {
            return 0
        } else if (screenSize.value && ['lg'].includes(screenSize.value)) {
            return collapsed.value ? 48 : 200
        } else {
            if (settingStore.columnsMenuTitle) {
                return collapsed.value || noColumn.value ? 72 : 244
            } else {
                return collapsed.value || noColumn.value ? 60 : 244
            }
        }
    })

    const collapsedWidth = computed(() => {
        if (screenSize.value && ['xs', 'sm', 'md', 'lg'].includes(screenSize.value)) {
            return 48
        } else {
            return settingStore.columnsMenuTitle ? 72 : 60
        }
    })

    function setCollapsed(value: boolean) {
        collapsed.value = value
    }

    function setNoColumn(value: boolean) {
        noColumn.value = value
    }
    return {
        collapsed,
        noColumn,
        column,
        siderWidth,
        collapsedWidth,
        marginLeft,
        setCollapsed,
        setNoColumn,
        miniScreen,
        screenSize
    }
})

export const useBrokenStore = defineStore('broken', () => {
    const broken = ref<boolean>(false)
    function onBroken(value: boolean) {
        broken.value = value
    }
    return { broken, onBroken }
})
