<template>
    <PageHeader />
    <a-card :bordered="false" class="layout-edit-card">
        <a-form
            class="brevity-form-box"
            ref="formRef"
            :model="formState"
            :rules="rules"
            :label-col="{ span: 4 }"
            :wrapper-col="{ span: 18 }"
            autocomplete="off"
            @finish="onFinish(id ? 'updateList' : 'createList')">
            <a-form-item label="名称" name="name">
                <a-input v-model:value="formState.name" />
            </a-form-item>
            <a-form-item label="PID" name="pid">
                <a-input v-model:value="formState.pid" :disabled="getBoolean(id)" />
            </a-form-item>
            <a-form-item label="用户名" name="userName">
                <a-input v-model:value="formState.userName" />
            </a-form-item>
            <a-form-item label="描述" name="description">
                <a-textarea v-model:value="formState.description" :rows="4" />
            </a-form-item>
            <a-form-item :wrapper-col="{ offset: 4 }">
                <a-button type="primary" html-type="submit" class="mr12">确定</a-button>
                <a-button @click="goBack">取消</a-button>
            </a-form-item>
        </a-form>
    </a-card>
</template>
<script setup lang="ts">
import PageHeader from '@/components/widgets/PageHeader.vue'
import { onMounted, reactive } from 'vue'
import type { TableListItem } from '@/model/index'
import useEdit from '@/hooks/useEdit'
import { getBoolean } from '@/utils/tool'
import regexp from '@/utils/regexp'

const initialState = {
    id: '',
    name: '',
    pid: null,
    userName: '',
    description: ''
}
const formState = reactive<TableListItem>(initialState)

const { id, getInfo, getQuery, goBack, onFinish } = useEdit({ formState, initialState })

const rules = {
    name: [{ required: true, message: '请输入名称' }],
    pid: [
        { required: true, message: '请输入 PID' },
        { pattern: regexp.number, message: 'PID 仅支持数字', trigger: 'blur' }
    ],
    userName: [{ required: true, message: '请输入用户名' }]
}

onMounted(() => {
    // getInfo('retrieveListItem')
    getQuery()
})
</script>
