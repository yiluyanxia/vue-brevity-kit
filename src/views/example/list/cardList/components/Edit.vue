<template>
    <a-modal v-model:visible="visible" :title="title" @ok="onOk('updateList')" @cancel="emitClose">
        <a-form
            class="brevity-form-box"
            ref="formRef"
            :model="formState"
            :rules="rules"
            :label-col="{ span: 4 }"
            :wrapper-col="{ span: 18 }">
            <a-form-item label="标题" name="title">
                <a-input v-model:value="formState.title" />
            </a-form-item>
            <a-form-item label="封面" name="src">
                <a-input v-model:value="formState.src" />
            </a-form-item>
            <a-form-item label="作者" name="owner">
                <a-input v-model:value="formState.owner" />
            </a-form-item>
            <a-form-item label="时间" name="createdAt">
                <a-date-picker show-time v-model:value="formState.createdAt" style="width: 100%" />
                <!-- <a-input v-model:value="formState.createdAt" /> -->
            </a-form-item>
            <a-form-item label="进度" name="percent">
                <a-input-number v-model:value="formState.percent" :min="1" :max="100" style="width: 100%" />
            </a-form-item>
            <a-form-item label="状态" name="status">
                <a-radio-group v-model:value="formState.status">
                    <a-radio value="active">normal</a-radio>
                    <a-radio value="normal">normal</a-radio>
                    <a-radio value="exception">exception</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item label="描述" name="description">
                <a-textarea v-model:value="formState.description" :auto-size="{ minRows: 2, maxRows: 5 }" />
            </a-form-item>
        </a-form>
    </a-modal>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import useModal from '@/hooks/useModal'
import dayjs from 'dayjs'

const props = defineProps({
    visible: {
        type: Boolean,
        default: true
    },
    title: {
        type: String,
        default: ''
    },
    dataInfo: {
        type: Object,
        default: null
    },
    uniqueKey: {
        type: String,
        default: ''
    }
})

const initialState = {
    id: '',
    title: '',
    src: '',
    description: '',
    owner: '',
    createdAt: '',
    percent: undefined,
    status: ''
}
const { emitClose, formRef, formState, onOk, visible } = useModal({
    props,
    initialState,
    watchFn
})

function watchFn() {
    formState.createdAt = dayjs(props.dataInfo.createdAt)
}
const rules = {
    title: [{ required: true, message: '请输入标题' }]
}

onMounted(() => {})
</script>
