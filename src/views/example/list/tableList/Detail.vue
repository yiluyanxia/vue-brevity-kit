<template>
    <PageHeader @reload="reload" />
    <div class="brevity-detail-header">
        <a-descriptions :column="{ xxl: 3, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }">
            <a-descriptions-item label="名称">
                {{ dataInfo?.name }}
            </a-descriptions-item>
            <a-descriptions-item label="PID">
                {{ dataInfo?.pid }}
            </a-descriptions-item>
            <a-descriptions-item label="用户名">
                {{ dataInfo?.userName }}
            </a-descriptions-item>
            <a-descriptions-item label="CPU">
                {{ dataInfo?.cpu + '%' }}
            </a-descriptions-item>
            <a-descriptions-item label="内存">
                {{ formatSize(dataInfo?.memory as number) }}
            </a-descriptions-item>
            <a-descriptions-item label="状态">
                <a-badge
                    v-if="dataInfo?.status"
                    :status="getConstant('SERVER_STATUS', dataInfo.status, 'color')"
                    :text="getConstant('SERVER_STATUS', dataInfo.status)" />
            </a-descriptions-item>
        </a-descriptions>
        <a-tabs size="large" v-model:activeKey="activeKey">
            <a-tab-pane key="0" tab="性能"></a-tab-pane>
            <a-tab-pane key="1" tab="服务"></a-tab-pane>
        </a-tabs>
    </div>
    <Performance />
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import useDetail from '@/hooks/useDetail'
import PageHeader from '@/components/widgets/PageHeader.vue'
import Performance from './components/Performance.vue'
import type { TableListItem } from '@/model/index'
import { getConstant, formatSize } from '@/utils/tool'

const activeKey = ref('0')

const { reload } = useDetail()

const dataInfo = ref<TableListItem>()

onMounted(() => {
    // getInfo('findById')
    dataInfo.value = {
        cpu: 62,
        description: 'Description 503353',
        editable: false,
        id: '1',
        memory: 87265,
        name: 'Task 1',
        pid: 49945,
        status: 1,
        updatedAt: 'Tue Nov 15 2022 19:24:41 GMT+0800 (中国标准时间)',
        userName: 'User 8'
    }
})
</script>
