<template>
    <a-row :gutter="[24, 24]" class="mb24">
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" :xxl="6">
            <a-card class="overview-info-card" :bordered="false">
                <h3 class="overview-info-card-title">性能总览</h3>
                <div class="overview-info-card-progress">
                    <div class="progress-item" v-for="(item, index) in performance" :key="index">
                        <label class="name">{{ item.name }}</label>
                        <a-progress
                            class="progress"
                            :percent="item.percent"
                            stroke-linecap="square"
                            :stroke-color="{
                                '0%': item.strokeColor,
                                '100%': strokeColorSuccess
                            }"
                            :strokeWidth="30" />
                    </div>
                </div>
            </a-card>
        </a-col>
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" :xxl="6">
            <a-card class="overview-info-card" :bordered="false">
                <h3 class="overview-info-card-title">程序耗能</h3>
                <Chart type="pie" :series="pieSeries" :height="138" :options="pieOptions" />
            </a-card>
        </a-col>
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" :xxl="6">
            <a-card class="overview-info-card" :bordered="false">
                <h3 class="overview-info-card-title">资源占比</h3>
                <Chart type="pie" :series="nightingaleSeries" :height="138" :options="nightingaleOptions" />
            </a-card>
        </a-col>
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" :xxl="6">
            <a-card class="overview-info-card" :bordered="false">
                <h3 class="overview-info-card-title">网络情况</h3>
                <div class="overview-info-card-list">
                    <a-table
                        :columns="columns"
                        :data-source="dataSource"
                        :pagination="false"
                        size="small"
                        :scroll="{ x: '100%' }"
                        :showHeader="false">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.dataIndex === 'name'">
                                <a-tag :color="record.status">
                                    <SyncOutlined :spin="record.spin" />
                                </a-tag>
                                {{ record.name }}
                            </template>
                            <template v-if="column.dataIndex === 'status'">
                                <!-- <a-progress :percent="100" size="small" :status="record.status" :showInfo="false" /> -->
                            </template>
                        </template>
                    </a-table>
                </div>
            </a-card>
        </a-col>
    </a-row>
    <a-row :gutter="[24, 24]" class="mb24">
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" :xxl="4" v-for="(item, index) in smallData" :key="index">
            <a-card class="overview-small-card" :bordered="false">
                <h3 class="overview-small-card-title">{{ item.title }}</h3>
                <a-row type="flex" justify="space-between" align="bottom">
                    <a-col>
                        <a-statistic :title="item.label" :value="item.value" />
                    </a-col>
                    <a-col>
                        <a-tag v-if="item.status === 'up'" color="success">
                            <template #icon>
                                <ArrowUpOutlined />
                            </template>
                            {{ item.dValue }} %
                        </a-tag>
                        <a-tag v-else color="error">
                            <template #icon>
                                <ArrowDownOutlined />
                            </template>
                            {{ item.dValue }} %
                        </a-tag>
                    </a-col>
                </a-row>
            </a-card>
        </a-col>
    </a-row>
    <a-row :gutter="[24, 24]" class="mb24">
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" :xxl="8">
            <a-card class="overview-info-card" :bordered="false">
                <Chart type="line" name="CPU" :xAxis="xAxis" :series="cpuSeries" :height="280" :options="cpuOptions" />
            </a-card>
        </a-col>
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" :xxl="8">
            <a-card class="overview-info-card" :bordered="false">
                <Chart
                    type="line"
                    name="内存"
                    :xAxis="xAxis"
                    :series="memorySeries"
                    :height="280"
                    :color="['#f797c0']"
                    :options="memoryOptions" />
            </a-card>
        </a-col>
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" :xxl="8">
            <a-card class="overview-info-card" :bordered="false">
                <Chart
                    type="line"
                    name="磁盘"
                    :xAxis="xAxis"
                    :series="diskSeries"
                    :height="280"
                    :color="['#f6c022']"
                    :options="diskOptions" />
            </a-card>
        </a-col>
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" :xxl="24">
            <a-card class="overview-info-card" :bordered="false">
                <Chart type="line" name="GPU" :xAxis="xAxis" :series="gpuSeries" :height="280" :options="gpuOptions" />
            </a-card>
        </a-col>
    </a-row>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getRGB } from '@/utils/tool'
import { useSettingStore } from '@/stores/setting'
import Chart from '@/components/charts/index'
import { SyncOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons-vue'
const settingStore = useSettingStore()

const strokeColorPrimary = ref('')
const strokeColorSuccess = ref('')
const strokeColorWarning = ref('')
const strokeColorError = ref('')

const primary = getRGB(settingStore?.customTheme?.primary as string)
const success = getRGB(settingStore?.customTheme?.success as string)
const warning = getRGB(settingStore?.customTheme?.warning as string)
const error = getRGB(settingStore?.customTheme?.error as string)
strokeColorPrimary.value = `rgba(${primary}, .4)`
strokeColorSuccess.value = `rgba(${success}, .4)`
strokeColorWarning.value = `rgba(${warning}, .4)`
strokeColorError.value = `rgba(${error}, .4)`

const performance = [
    {
        name: 'CPU',
        percent: 23,
        strokeColor: strokeColorPrimary.value
    },
    {
        name: '内存',
        percent: 45,
        strokeColor: strokeColorError.value
    },
    {
        name: '磁盘',
        percent: 13,
        strokeColor: strokeColorWarning.value
    }
]

const cpuSeries = ref()
const memorySeries = ref()
const diskSeries = ref()
const gpuSeries = ref()

const xAxis = ref<string[]>([])
const cpuOptions = {
    max: 100,
    areaStyle: {
        // color: 'rgba(99, 149, 249, 0.2)'
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
                {
                    offset: 0,
                    color: 'rgba(99, 149, 249, 0.9)'
                },
                {
                    offset: 1,
                    color: 'rgba(99, 149, 249, 0.1)'
                }
            ]
        }
    },
    boundaryGap: false
}
const memoryOptions = {
    max: 100,
    areaStyle: {
        // color: 'rgba(99, 149, 249, 0.2)'
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
                {
                    offset: 0,
                    color: 'rgba(247, 151, 192, 0.9)'
                },
                {
                    offset: 1,
                    color: 'rgba(247, 151, 192, 0.1)'
                }
            ]
        }
    },
    boundaryGap: false
}
const diskOptions = {
    max: 100,
    areaStyle: {
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
                {
                    offset: 0,
                    color: 'rgba(246, 192, 34, 0.9)'
                },
                {
                    offset: 1,
                    color: 'rgba(246, 192, 34, 0.1)'
                }
            ]
        }
    },
    boundaryGap: false
}

const gpuOptions = {
    max: 100,
    showSymbol: false
    // boundaryGap: false
}
const pieSeries = ref()

const pieOptions = {
    radius: ['50%', '90%'],
    label: {
        alignTo: 'edge',
        formatter: '{name|{b}}\n{time|{c} %}',
        minMargin: 5,
        edgeDistance: 10,
        lineHeight: 15,
        rich: {
            time: {
                fontSize: 10,
                color: '#999'
            }
        }
    }
}
const nightingaleSeries = ref()
const nightingaleOptions = {
    radius: ['30%', '100%'],
    roseType: 'area',
    itemStyle: {
        borderRadius: 8
    }
    // label: {
    //     alignTo: 'edge',
    //     formatter: '{name|{b}}\n{time|{c} %}',
    //     minMargin: 5,
    //     edgeDistance: 10,
    //     lineHeight: 15,
    //     rich: {
    //         time: {
    //             fontSize: 10,
    //             color: '#999'
    //         }
    //     }
    // }
}

function getInfo() {
    xAxis.value = ['60', '50', '40', '30', '20', '10', '0']

    cpuSeries.value = [
        {
            name: 'CPU 活动',
            data: [22, 18, 19, 23, 29, 33, 26]
        }
    ]
    memorySeries.value = [
        {
            name: '内存使用量',
            data: [45.5, 45, 45.5, 45.6, 45, 45.8, 45.6]
        }
    ]
    diskSeries.value = [
        {
            name: '活动时间',
            data: [0.5, 4.5, 5.5, 5.6, 0, 0.8, 1]
        }
    ]
    gpuSeries.value = [
        {
            name: '3D',
            data: [25, 45, 35, 26, 16, 18, 13]
        },
        {
            name: 'Copy',
            data: [2, 4, 5, 6, 1, 8, 3]
        },
        {
            name: 'Video Decode',
            data: [20, 14, 25, 16, 31, 36, 28]
        }
        // {
        //     name: 'Video Processing',
        //     data: [30, 16, 15, 26, 13, 10, 20]
        // }
    ]
    pieSeries.value = [
        {
            name: '程序耗能',
            data: [
                { name: '服务主机', value: 30 },
                { name: '索引器', value: 20 },
                { name: '反向适配器', value: 18 },
                { name: '运行时监视器', value: 10 },
                { name: '其他', value: 6 }
            ]
        }
    ]
    nightingaleSeries.value = [
        {
            name: '资源占比',
            data: [
                { value: 40, name: '命令处理' },
                { value: 36, name: '加载程序' },
                { value: 32, name: '定位器' },
                { value: 28, name: '服务组件' },
                { value: 24, name: '控制器' },
                { value: 20, name: '会话' },
                { value: 16, name: '虚拟机' }
            ]
        }
    ]
}
getInfo()

const columns = [
    {
        name: '网络名称',
        dataIndex: 'name',
        width: 100
    },
    // {
    //     name: '状态',
    //     dataIndex: 'status',
    //     width: 120
    // },
    {
        title: '平均吞吐量',
        dataIndex: 'throughput',
        width: 100,
        align: 'right'
    }
]

const dataSource = [
    {
        key: '1',
        name: '以太网1',
        throughput: '48.0 Kpbs',
        status: 'processing',
        spin: true
    },
    {
        key: '2',
        name: '以太网2',
        throughput: '0 Kpbs',
        status: 'processing'
    },
    {
        key: '3',
        name: '以太网3',
        throughput: '未连接',
        status: 'default'
    }
]
const smallData = [
    {
        title: '资源管理',
        label: '综合跑分',
        value: 83,
        status: 'up',
        dValue: 0.4
    },
    {
        title: '索引器',
        label: '综合跑分',
        value: 86,
        status: 'up',
        dValue: 12
    },
    {
        title: '任务管理',
        label: '综合跑分',
        value: 77,
        status: 'down',
        dValue: 0.8
    },
    {
        title: '加载程序',
        label: '加载量',
        value: 34372,
        status: 'up',
        dValue: 26
    },
    {
        title: '服务主机',
        label: '数量',
        value: 87235,
        status: 'up',
        dValue: 36
    },
    {
        title: '远程调用',
        label: '调用次数',
        value: 5926,
        status: 'down',
        dValue: 1.6
    }
]
</script>
<style lang="less" scoped>
.overview-info-card {
    &-title {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 24px;
    }
    &-progress {
        .progress-item {
            display: flex;
            & + .progress-item {
                margin-top: 24px;
            }
            .name {
                font-size: 14px;
                font-weight: bold;
                width: 40px;
                line-height: 30px;
            }
            .progress {
                flex: 1;
            }
        }
    }
    &-list {
        height: 138px;
    }
}
.overview-small-card {
    &-title {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 12px;
    }
}
.chart-box {
    width: 100%;
    // min-width: 246px;
    margin: 0 auto;
    height: 400px;
}
.default-chart {
    width: 100%;
    height: 100%;
}
</style>
<style lang="less">
.overview-info-card {
    &-progress {
        .ant-progress-success-bg,
        .ant-progress-bg {
            background-color: #fff !important;
        }
    }
}
</style>
