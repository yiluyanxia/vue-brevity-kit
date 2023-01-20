<template>
    <a-row :gutter="[16, 16]">
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" :xxl="6">
            <a-button type="dashed" class="brevity-card-btn" @click="onCreate('新建卡片项')">
                <template #icon>
                    <PlusOutlined />
                </template>
                新建
            </a-button>
        </a-col>
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" :xxl="6" v-for="(item, index) in dataSource" :key="index">
            <a-card hoverable>
                <a-card-meta :title="item.title">
                    <template #avatar>
                        <a-avatar :size="48" :src="item.src" style="background-color: #f0f2f5"></a-avatar>
                    </template>
                    <template #description>
                        <div class="desc-box">
                            <a-typography-paragraph :ellipsis="{ rows: 3 }" :content="item.description" />
                        </div>
                    </template>
                </a-card-meta>
                <template #actions>
                    <EditOutlined key="update" @click="onUpdate('编辑卡片项', item)" />
                    <DeleteOutlined key="delete" @click="onDelete('deleteList', { id: item.id })" />
                </template>
            </a-card>
        </a-col>
    </a-row>
    <a-row type="flex" justify="center" class="pt24">
        <a-pagination v-bind="pagination" />
    </a-row>
    <Edit
        v-model:visible="visible"
        :title="modalTitle"
        @close="closeModal"
        :dataInfo="dataInfo"
        :uniqueKey="dataInfo?.id" />
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons-vue'
import { DATA_TEMP } from '@/constants/data'
import useList from '@/hooks/useList'
import Edit from './components/Edit.vue'
import type { DataListResult, DataListItem } from '@/model/index'

const dataInfo = ref<DataListItem>()
const dataSource = ref<DataListItem[]>([])
dataSource.value = DATA_TEMP
const { closeModal, fetchData, onCreate, onUpdate, onDelete, pagination, total, visible, modalTitle } =
    useList({
        dataInfo,
        getList
    })
total.value = 100
async function getList() {
    const res = await fetchData<DataListResult>('retrieveList', { loading: true })
    dataSource.value = res.content
    total.value = res.totalElements
}
onMounted(async () => {
    // getList()
})
</script>
<style lang="less" scoped>
.desc-box {
    height: 66px;
    overflow: hidden;
}
</style>
