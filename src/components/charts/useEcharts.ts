import { unref, nextTick } from 'vue'
import echarts from './echarts'
import { useSettingStore } from '@/stores/setting'

export function useEcharts(elRef) {
    const el = unref(elRef)
    const settingStore = useSettingStore()

    if (echarts.getInstanceByDom(el)) {
        echarts.dispose(el)
    }

    const theme = settingStore.display == 'light' ? 'light' : 'dark'

    const echartsInstance = echarts.init(el, theme)

    function setOptions(option: any) {
        nextTick(() => {
            echartsInstance.setOption(unref(option))
        })
    }
    function resize() {
        nextTick(() => {
            echartsInstance.resize()
        })
    }
    window.addEventListener('resize', resize)
    return {
        setOptions,
        resize
    }
}
