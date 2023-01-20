<template>
    <SearchForm ref="searchFormRef" :searchState="searchState" :schemas="schemas" @onFinish="getList" />
    <a-card :bordered="false" class="brevity-table-card">
        <TableToolbar
            @create="onRouter('TableListCreate')"
            @reload="onReload"
            @delete="onDelete('deleteList', { ids: selectedRowKeys })"
            @enable="onEnable('updateToEnabled', { ids: selectedRowKeys[0] })"
            @disable="onDisable('updateToDisable', { IDBObjectStore: selectedRowKeys[0] })"
            :enable="disabledSingle"
            :multiple="disabledMultiple"></TableToolbar>
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
                <template v-if="column.dataIndex === 'updatedAt'">
                    {{ formatDateTime(record.updatedAt) }}
                </template>
                <template v-if="column.dataIndex === 'status'">
                    <a-badge
                        :status="getConstant('SERVER_STATUS', record.status, 'color')"
                        :text="getConstant('SERVER_STATUS', record.status)" />
                </template>
                <template v-if="column.key === 'action'">
                    <a-button type="link" size="small" @click="onRouter('TableListDetail', record.id)">详情</a-button>
                    <!-- <a-button type="link" size="small" @click="onRouter('TableListUpdate', record.id)"> -->
                    <a-button
                        type="link"
                        size="small"
                        @click="
                            onRouter('TableListUpdate', record.id, {
                                query: encodeURIComponent(JSON.stringify(record))
                            })
                        ">
                        编辑
                    </a-button>
                </template>
            </template>
        </a-table>
    </a-card>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { InfoCircleOutlined } from '@ant-design/icons-vue'
import type { TableColumnType } from 'ant-design-vue'
import { formatDateTime } from '@/utils/date'
import { getConstant, formatArray, formatSize, getRandomInt } from '@/utils/tool'
import SearchForm from '@/components/widgets/SearchForm.vue'
import TableToolbar from '@/components/widgets/TableToolbar.vue'
import useList from '@/hooks/useList'
import type { TableListResult, TableListItem, SearchFormSchema } from '@/model/index'

// const dataInfo = ref<TableListItem>()
const dataSource = ref<TableListItem[]>([])

const searchState = reactive({
    name: '',
    pid: '',
    userName: '',
    status: null,
    updatedAt: null,
    startTime: null,
    endTime: null
})

const {
    disabledMultiple,
    disabledSingle,
    fetchData,
    onEnable,
    onDisable,
    onDelete,
    onReload,
    onRouter,
    loading,
    onSelectChange,
    pagination,
    searchFormRef,
    selectedRowKeys,
    total
} = useList({
    searchState,
    dataSource,
    getList
})

const statusOptions = formatArray('SERVER_STATUS')

const schemas: SearchFormSchema[] = [
    {
        key: 'name',
        label: '名称'
    },
    {
        key: 'pid',
        label: 'PID',
        tip: '进程标识'
    },
    {
        key: 'userName',
        label: '用户名'
    },
    {
        key: 'status',
        label: '状态',
        options: statusOptions
    },
    {
        key: 'updatedAt',
        label: '更新时间',
        date: true
    },
    {
        key: 'startTime',
        key1: 'endTime',
        label: '时间范围',
        range: true
    }
]

const columns: TableColumnType<TableListItem>[] = [
    {
        title: '名称',
        dataIndex: 'name',
        width: 160
    },
    {
        title: 'PID',
        dataIndex: 'pid',
        width: 100
    },
    {
        title: '用户名',
        dataIndex: 'userName',
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
        title: '更新时间',
        dataIndex: 'updatedAt',
        width: 160
    },
    {
        title: '状态',
        dataIndex: 'status',
        width: 100
    },
    {
        title: '描述',
        dataIndex: 'description',
        width: 160
    },
    {
        title: '操作',
        key: 'action',
        width: 120
    }
]

function getListTemp() {
    for (let i = 1; i <= 10; i++) {
        dataSource.value.push({
            id: i.toString(),
            name: 'Task ' + i,
            pid: getRandomInt(99999),
            cpu: getRandomInt(100),
            memory: getRandomInt(100000),
            userName: 'User ' + getRandomInt(10),
            description: 'Description ' + getRandomInt(999999),
            status: getRandomInt(5),
            updatedAt: new Date(),
            // updatedAt: Date.now(),
            editable: false
        })
    }
    total.value = 50
}
async function getList() {
    const res = await fetchData<TableListResult>('retrieveList')
    dataSource.value = res.content
    total.value = res.totalElements
}
onMounted(async () => {
    getListTemp()
    // getList()
})
</script>
