<template>
    <a-card :bordered="false" class="brevity-list-card">
        <ListToolbar :options="statusOptions" :searchState="searchState" @onFinish="onFinish"></ListToolbar>

        <a-list
            class="brevity-list-box"
            item-layout="horizontal"
            :data-source="dataSource"
            :pagination="pagination"
            @change="onTableChange">
            <template #renderItem="{ item }">
                <a-list-item>
                    <template #actions>
                        <a-button type="link" size="small" @click="onUpdate('编辑列表项', item)">编辑</a-button>
                        <a-dropdown>
                            <template #overlay>
                                <a-menu @click="(e) => handleAction(e, item)">
                                    <a-menu-item key="reset">重置</a-menu-item>
                                    <a-menu-item key="finish">完成</a-menu-item>
                                    <a-menu-item key="delete">删除</a-menu-item>
                                </a-menu>
                            </template>
                            <a-button type="link" size="small">
                                更多
                                <DownOutlined />
                            </a-button>
                        </a-dropdown>
                    </template>
                    <a-skeleton avatar :title="false" :loading="loading" active>
                        <a-list-item-meta :description="item.description">
                            <template #title>
                                <a href="https://www.antdv.com/">{{ item.title }}</a>
                            </template>
                            <template #avatar>
                                <a-avatar
                                    shape="square"
                                    :size="48"
                                    :src="item.src"
                                    style="background-color: #f0f2f5"></a-avatar>
                            </template>
                        </a-list-item-meta>
                        <div class="list-content-box">
                            <div class="list-content-item">
                                <span>作者</span>
                                <p>{{ item.owner }}</p>
                            </div>
                            <div class="list-content-item">
                                <span>时间</span>
                                <p>{{ formatDateTime(item.createdAt) }}</p>
                            </div>

                            <div class="list-content-item">
                                <a-progress :percent="item.percent" :status="item.status" style="width: 180px" />
                            </div>
                        </div>
                    </a-skeleton>
                </a-list-item>
            </template>
            <template #footer>
                <a-button type="dashed" class="brevity-list-btn" @click="onCreate('新建列表项')">
                    <template #icon>
                        <PlusOutlined />
                    </template>
                    新建
                </a-button>
            </template>
        </a-list>
    </a-card>
    <Edit
        v-model:visible="visible"
        :title="modalTitle"
        @close="closeModal"
        :dataInfo="dataInfo"
        :uniqueKey="dataInfo?.id" />
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { PlusOutlined, DownOutlined } from '@ant-design/icons-vue'
import useList from '@/hooks/useList'
import { formatDateTime } from '@/utils/date'
import ListToolbar from '@/components/widgets/ListToolbar.vue'
import { formatArray } from '@/utils/tool'
import { DATA_TEMP } from '@/constants/data'
import Edit from './components/Edit.vue'
import type { DataListResult, DataListItem, ListToolModel } from '@/model/index'
import { message } from 'ant-design-vue'

const dataSourceTemp = DATA_TEMP
const dataSource = ref<DataListItem[]>([])
const dataInfo = ref<DataListItem>()

const statusOptions = formatArray('BASIC_STATUS')

const searchState = reactive({
    status: '',
    content: ''
})
const {
    closeModal,
    fetchData,
    onCreate,
    onDelete,
    onUpdate,
    onTableChange,
    loading,
    pagination,
    total,
    visible,
    modalTitle
} = useList({
    dataInfo,
    searchState,
    getList
})

function onFinish(val: ListToolModel) {
    searchState.status = val.option as string
    searchState.content = val.query as string
    getList()
}
const handleAction = (e, item: any) => {
    console.log('click', e)
    switch (e.key) {
        case 'delete':
            onDelete('deleteList', { id: item.id })
            break
        case 'finish':
            message.success('操作成功')
            break
        case 'reset':
            message.success('操作成功')
    }
}
loading.value = true
function getListTemp() {
    for (let i = 1; i < dataSourceTemp.length; i++) {
        dataSource.value?.push({
            id: i.toString(),
            title: '',
            src: '',
            description: '',
            owner: '',
            createdAt: '',
            percent: 0,
            status: ''
        })
    }
}
getListTemp()
setTimeout(() => {
    dataSource.value = dataSourceTemp
    // total.value = dataSource.value.length
    total.value = 100

    loading.value = false
}, 1000)

async function getList() {
    const res = await fetchData<DataListResult>('retrieveList')
    dataSource.value = res.content
    total.value = res.totalElements
}
onMounted(async () => {
    getListTemp()
    // getList()
})
</script>
<style lang="less" scoped>
.list-content-box {
    text-align: right;
    .list-content-item {
        color: rgba(0, 0, 0, 0.45);
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;
        margin-left: 40px;
        min-width: 110px;
        span {
            line-height: 20px;
            display: block;
            color: rgba(0, 0, 0, 0.35);
        }
        p {
            margin-top: 4px;
            margin-bottom: 0px;
            line-height: 22px;
        }
    }
}
@media (min-width: 768px) {
    .list-content-box {
        text-align: left;
    }
}
</style>
