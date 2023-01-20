<template>
    <a-card :bordered="false" title="操作工具条" class="mb24">
        <TableToolbar
            title="工具条标题"
            @create="handleClick"
            @reload="handleClick"
            @delete="handleClick"
            @enable="handleClick"
            @disable="handleClick"></TableToolbar>
    </a-card>
    <a-card :bordered="false" title="查询工具条" class="mb24">
        <ListToolbar title="工具条标题" :options="statusOptions"></ListToolbar>
    </a-card>
    <a-card :bordered="false" title="搜索框组" class="mb24">
        <SearchForm ref="searchFormRef" :searchState="searchState" :schemas="schemas" />
    </a-card>
    <a-card :bordered="false" title="可选页头">
        <PageHeader title="页头标题" @reload="handleClick" style="margin-top: 0">
            <template #button>
                <a-button @click="handleClick">审核</a-button>
                <a-button @click="handleClick">同步</a-button>
                <a-dropdown>
                    <template #overlay>
                        <a-menu @click="handleClick">
                            <a-menu-item key="1">签名</a-menu-item>
                            <a-menu-item key="2">验签</a-menu-item>
                            <a-menu-item key="3">编码</a-menu-item>
                        </a-menu>
                    </template>
                    <a-button>
                        <EllipsisOutlined />
                    </a-button>
                </a-dropdown>
                <a-button type="primary" @click="handleClick">确定</a-button>
            </template>
            次要标题，或更多描述。详情页面的首选。
        </PageHeader>
    </a-card>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import TableToolbar from '@/components/widgets/TableToolbar.vue'
import ListToolbar from '@/components/widgets/ListToolbar.vue'
import SearchForm from '@/components/widgets/SearchForm.vue'
import PageHeader from '@/components/widgets/PageHeader.vue'
import { EllipsisOutlined } from '@ant-design/icons-vue'
import { formatArray } from '@/utils/tool'
import { message } from 'ant-design-vue'
import type { SearchFormSchema } from '@/model/index'

const statusOptions = formatArray('BASIC_STATUS')
const searchState = reactive({
    name: '',
    pid: '',
    userName: '',
    status: null,
    updatedAt: null,
    startTime: null,
    endTime: null
})

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
const handleClick = () => {
    message.success('操作成功')
}
</script>
<style lang="less" scoped>
.item-list {
    padding-top: 12px;
    display: flex;
    flex-wrap: wrap;
    .ant-btn {
        margin: 0 12px 24px 0;
    }
}
</style>
