import * as echarts from 'echarts/core'

import { BarChart, LineChart, PieChart } from 'echarts/charts'

import { DataZoomComponent, LegendComponent, TitleComponent, TooltipComponent, GridComponent } from 'echarts/components'

import { LabelLayout, UniversalTransition } from 'echarts/features'

import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
    DataZoomComponent,
    LegendComponent,
    TitleComponent,
    TooltipComponent,
    GridComponent,
    BarChart,
    LineChart,
    PieChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer
])

export default echarts
