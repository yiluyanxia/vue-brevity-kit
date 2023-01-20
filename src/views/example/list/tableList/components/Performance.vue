<template>
    <a-card title="概览" :bordered="false" class="mb24">
        <a-row :gutter="[24, 24]">
            <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" v-for="(item, index) in statisticList" :key="index">
                <a-statistic :title="item.title" :value="item.value"></a-statistic>
            </a-col>
        </a-row>
    </a-card>
    <a-card title="设备" :bordered="false" class="mb24">
        <a-tabs v-model:activeKey="activeKey" tab-position="left">
            <a-tab-pane key="1" tab="CPU">
                <a-row :gutter="[48, 48]">
                    <a-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
                        <a-descriptions
                            title="运行信息"
                            layout="vertical"
                            bordered
                            :column="{ xs: 1, sm: 1, md: 2, lg: 3, xl: 3 }">
                            <a-descriptions-item label="利用率">23%</a-descriptions-item>
                            <a-descriptions-item label="速度" :span="2">4.39 GHz</a-descriptions-item>
                            <a-descriptions-item label="进程">314</a-descriptions-item>
                            <a-descriptions-item label="线程">4183</a-descriptions-item>
                            <a-descriptions-item label="句柄">140953</a-descriptions-item>
                            <a-descriptions-item label="正常运行时间">1:09:32:54</a-descriptions-item>
                        </a-descriptions>
                    </a-col>
                    <a-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                        <a-descriptions title="基本信息" :column="1">
                            <a-descriptions-item label="基准速度">3.00 GHz</a-descriptions-item>
                            <a-descriptions-item label="插槽">1</a-descriptions-item>
                            <a-descriptions-item label="内核">10</a-descriptions-item>
                            <a-descriptions-item label="逻辑处理器">10</a-descriptions-item>
                            <a-descriptions-item label="L1 缓存">512 KB</a-descriptions-item>
                            <a-descriptions-item label="L2 缓存">2.0 Mb</a-descriptions-item>
                            <a-descriptions-item label="L3 缓存">12.0 MB</a-descriptions-item>
                        </a-descriptions>
                    </a-col>
                </a-row>
            </a-tab-pane>
            <a-tab-pane key="2" tab="内存" force-render>
                <a-row :gutter="[48, 48]">
                    <a-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
                        <a-descriptions
                            title="运行信息"
                            layout="vertical"
                            bordered
                            :column="{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }">
                            <a-descriptions-item label="使用中">14.8 GB</a-descriptions-item>
                            <a-descriptions-item label="可用">18 GB</a-descriptions-item>
                            <a-descriptions-item label="已提交">22.6/36.8 GB</a-descriptions-item>
                            <a-descriptions-item label="已缓存">16.0 GB</a-descriptions-item>
                            <a-descriptions-item label="分页缓冲池">1.6 GB</a-descriptions-item>
                            <a-descriptions-item label="非分页缓冲池">866 MB</a-descriptions-item>
                        </a-descriptions>
                    </a-col>
                    <a-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                        <a-descriptions title="基本信息" :column="1">
                            <a-descriptions-item label="速度">2666 MHz</a-descriptions-item>
                            <a-descriptions-item label="已使用的插槽">1/4</a-descriptions-item>
                            <a-descriptions-item label="外形规格">ADFB</a-descriptions-item>
                            <a-descriptions-item label="为硬件保留的内存">128 MB</a-descriptions-item>
                        </a-descriptions>
                    </a-col>
                </a-row>
            </a-tab-pane>
            <a-tab-pane key="3" tab="磁盘">
                <a-row :gutter="[48, 48]">
                    <a-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
                        <a-descriptions
                            title="运行信息"
                            layout="vertical"
                            bordered
                            :column="{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }">
                            <a-descriptions-item label="活动时间">0%</a-descriptions-item>
                            <a-descriptions-item label="平均响应时间">0.1毫秒</a-descriptions-item>
                            <a-descriptions-item label="读取速度">61.2 KB/秒</a-descriptions-item>
                            <a-descriptions-item label="写入速度">16.3 KB/秒</a-descriptions-item>
                        </a-descriptions>
                    </a-col>
                    <a-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                        <a-descriptions title="基本信息" :column="1">
                            <a-descriptions-item label="容量">254 GB</a-descriptions-item>
                            <a-descriptions-item label="已格式化">254 GB</a-descriptions-item>
                            <a-descriptions-item label="系统磁盘">是</a-descriptions-item>
                            <a-descriptions-item label="页面文件">是</a-descriptions-item>
                        </a-descriptions>
                    </a-col>
                </a-row>
            </a-tab-pane>
        </a-tabs>
    </a-card>
    <a-card title="网络" :bordered="false" class="mb24">
        <a-tabs v-model:activeKey="activeNetwork" tab-position="left">
            <a-tab-pane key="1" tab="以太网" disabled></a-tab-pane>
            <a-tab-pane key="2" tab="以太网" disabled></a-tab-pane>
            <a-tab-pane key="3" tab="以太网">
                <a-row :gutter="[48, 48]">
                    <a-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
                        <a-descriptions
                            title="运行信息"
                            layout="vertical"
                            bordered
                            :column="{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }">
                            <a-descriptions-item label="发送">16.0 Kbps</a-descriptions-item>
                            <a-descriptions-item label="接收">72.0 Kbps</a-descriptions-item>
                        </a-descriptions>
                    </a-col>
                    <a-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                        <a-descriptions title="基本信息" :column="1">
                            <a-descriptions-item label="适配器名称">默认交换机</a-descriptions-item>
                            <a-descriptions-item label="连接类型">以太网</a-descriptions-item>
                            <a-descriptions-item label="IPv4 地址">192.168.3.66</a-descriptions-item>
                            <a-descriptions-item label="IPv6 地址">2001:db8::ff00:42:8329</a-descriptions-item>
                        </a-descriptions>
                    </a-col>
                </a-row>
            </a-tab-pane>
        </a-tabs>
    </a-card>
    <a-card title="进程" :bordered="false">
        <a-table
            :row-selection="{
                selectedRowKeys: selectedRowKeys,
                onChange: onSelectChange
            }"
            rowKey="id"
            class="brevity-table-box"
            sticky
            :columns="columns"
            :data-source="dataSource"
            :scroll="{ x: '100%' }"
            :pagination="pagination"
            :loading="loading">
            <template #headerCell="{ column }">
                <template v-if="column.dataIndex === 'pid'">
                    <span>
                        PID
                        <a-tooltip>
                            <template #title>进程标识</template>
                            <info-circle-outlined />
                        </a-tooltip>
                    </span>
                </template>
            </template>

            <template #bodyCell="{ column, record }">
                <template v-if="column.dataIndex === 'cpu'">{{ record.cpu + '%' }}</template>
                <template v-if="column.dataIndex === 'memory'">
                    {{ formatSize(record.memory) }}
                </template>

                <template v-if="column.dataIndex === 'status'">
                    <a-badge
                        :status="getConstant('SERVER_STATUS', record.status, 'color')"
                        :text="getConstant('SERVER_STATUS', record.status)" />
                </template>
                <template v-if="column.key === 'action'">
                    <a-button type="link" size="small" @click="onRouter('TableListDetail', record.id)">
                        详情
                    </a-button>
                    <a-button type="link" size="small" @click="onRouter('TableListUpdate', record.id)">
                        编辑
                    </a-button>
                </template>
            </template>
        </a-table>
    </a-card>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getConstant, formatSize, getRandomInt } from '@/utils/tool'

import useList from '@/hooks/useList'

const { onRouter, loading, onSelectChange, pagination, selectedRowKeys, total } = useList({})

const activeKey = ref('1')
const activeNetwork = ref('3')

const statisticList = [
    {
        title: 'CPU',
        value: '23%'
    },
    {
        title: '内存',
        value: '0硬中断/秒'
    },
    {
        title: '磁盘',
        value: '12千字节'
    },
    {
        title: '网络',
        value: '26Kbps'
    }
]

const dataSource = ref<any>([])

const columns = [
    {
        title: '名称',
        dataIndex: 'name',
        width: 160
    },
    {
        title: '状态',
        dataIndex: 'status',
        width: 160
    },
    {
        title: 'CPU',
        dataIndex: 'cpu',
        width: 160
    },
    {
        title: '内存',
        dataIndex: 'memory',
        width: 160
    },
    {
        title: '磁盘',
        dataIndex: 'disk',
        width: 160
    },
    {
        title: '网络',
        dataIndex: 'network',
        width: 160
    }
]

function getListTemp() {
    for (let i = 1; i <= 10; i++) {
        dataSource.value.push({
            id: i.toString(),
            name: 'Process ' + i,
            pid: getRandomInt(99999),
            cpu: getRandomInt(100),
            memory: getRandomInt(100000),
            disk: `0.${getRandomInt(10)} MB/秒`,
            network: `0.${getRandomInt(10)} Mbps`,
            status: getRandomInt(5)
        })
    }
    total.value = 50
}

onMounted(async () => {
    getListTemp()
    // const res = await getList<TableListResult>('retrieveApiTest')
    // dataSource.value = res.content
    // total.value = res.totalElements
})
</script>
