import { h, onMounted, ref, toRefs, defineComponent, type PropType, watch } from 'vue'
import { useEcharts } from './useEcharts'
import { COLOR, SETTING } from './options'
import { isString, getNonEmpty } from '@/utils/tool'
import { useSettingStore } from '@/stores/setting'
import { LIGHT_THEME_VARIABLES, DEEP_THEME_VARIABLES, DARK_THEME_VARIABLES } from '@/layouts/setting/variablesCSS'

interface Series {
    name: string
    data: number[]
}
interface Options {
    max?: number
    legend?: boolean
    dataZoom?: boolean
    radius?: string[] | number[]
    label?: any
    emphasis?: any
    roseType?: any
    itemStyle?: any
    areaStyle?: any
    boundaryGap?: boolean
    showSymbol?: boolean
}
const settingStore = useSettingStore()

export default defineComponent({
    props: {
        color: {
            type: Array,
            default: null
        },
        xAxis: {
            type: Array as PropType<string[]>,
            default: null
        },
        series: {
            type: Array as PropType<Series[]>,
            default: null
        },
        options: {
            type: Object as PropType<Options>,
            default: null
        },
        type: {
            type: String
        },
        name: {
            type: String
        },
        custom: {
            type: Boolean
        },
        height: {
            type: [Number, String]
        },
        width: {
            type: [Number, String]
        }
    },
    setup(props) {
        // const store = useStore()
        const echartsRef = ref()

        const { color, xAxis, series, options, type, name, custom, height, width } = toRefs(props)

        function colorHandler() {
            return color.value ? color.value : COLOR
        }
        function xAxisHandler() {
            const option = {
                boundaryGap: options.value.boundaryGap
            }
            const targetOption = getNonEmpty(option)
            if (type.value && SETTING[type.value].xAxis) {
                return [
                    {
                        type: 'category',
                        data: xAxis.value,
                        ...targetOption
                    }
                ]
            } else {
                return null
            }
        }
        function yAxisHandler() {
            if (type.value && SETTING[type.value].yAxis) {
                return {
                    type: 'value',
                    max: (value) => {
                        if (options.value && options.value.max) {
                            return options.value.max
                        } else {
                            return Math.ceil(value.max * 1.25)
                        }
                    }
                }
            } else {
                return null
            }
        }
        function seriesHandler() {
            const option = {
                radius: options.value.radius,
                label: options.value.label,
                emphasis: options.value.emphasis,
                roseType: options.value.roseType,
                itemStyle: options.value.itemStyle,
                areaStyle: options.value.areaStyle,
                showSymbol: options.value.showSymbol
            }
            const targetOption = getNonEmpty(option)
            return (
                series.value &&
                series.value.map((i) => {
                    return {
                        name: i.name,
                        type: type.value,
                        barGap: 0,
                        barMaxWidth: 14,
                        data: i.data,
                        ...targetOption
                    }
                })
            )
        }
        function tooltipHandler() {
            return {
                trigger: type.value && SETTING[type.value].trigger
            }
        }
        function titleHandler() {
            return {
                text: name.value,
                left: 'left',
                subtextStyle: {
                    fontSize: 14
                }
            }
        }
        function legendHandler() {
            if (options.value && options.value.legend) {
                if (type.value === 'pie') {
                    return {
                        orient: 'vertical',
                        left: 'right'
                    }
                } else {
                    return {
                        data: series.value.map((i) => i.name),
                        textStyle: {
                            fontSize: 12
                        },
                        itemHeight: 14,
                        itemGap: 30,
                        x: 'right',
                        type: 'scroll'
                    }
                }
            }
        }
        function dataZoomHandler() {
            return options.value && options.value.dataZoom
                ? [
                      {
                          type: 'inside'
                      },
                      {
                          type: 'slider',
                          textStyle: {
                              color: '#999999'
                          }
                      }
                  ]
                : ''
        }
        function gridHandler() {
            return {
                x: 30,
                y: 50,
                x2: 30,
                y2: options.value && options.value.dataZoom ? 50 : 30,
                containLabel: true,
                borderColor: 'transparent'
            }
        }

        let bgColor = ''
        function geBgColor() {
            switch (settingStore.display) {
                case 'light':
                    bgColor = LIGHT_THEME_VARIABLES.match(/--bg-color: (\S*);/)![1]
                    break
                case 'deep':
                    bgColor = DEEP_THEME_VARIABLES.match(/--bg-color: (\S*);/)![1]
                    break
                case 'dark':
                    bgColor = DARK_THEME_VARIABLES.match(/--bg-color: (\S*);/)![1]
                    break
            }
        }

        const option = ref({
            color: colorHandler(),
            xAxis: xAxisHandler(),
            yAxis: yAxisHandler(),
            series: seriesHandler(),
            tooltip: tooltipHandler(),
            legend: legendHandler(),
            title: titleHandler(),
            dataZoom: dataZoomHandler(),
            grid: gridHandler(),
            backgroundColor: bgColor
        })
        const targetOption = ref()
        targetOption.value = custom.value ? options.value : option.value
        onMounted(() => {
            const { setOptions } = useEcharts(echartsRef)

            setOptions(targetOption)
        })

        watch(
            () => settingStore.display,
            () => {
                geBgColor()
                const { setOptions } = useEcharts(echartsRef)
                console.log('targetOption', targetOption.value)

                setOptions(targetOption.value)
            }
        )
        // watch(
        // () => store.state.collapsed,
        // () => {
        //     const { resize } = useEcharts(echartsRef)
        //     setTimeout(() => {
        //         resize({
        //             animation: {
        //                 duration: 250,
        //                 easing: 'quadraticIn'
        //             }
        //         })
        //     }, 250)
        // }
        // )
        const chartHeight = isString(height) ? height.value : height.value + 'px'
        const chartWidth = isString(width) ? width.value : width.value + 'px'
        return () =>
            h('div', {
                ref: echartsRef,
                class: ['default-chart'],
                style: `height: ${chartHeight}; width: ${chartWidth}`
            })
    }
})
