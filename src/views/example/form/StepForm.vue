<template>
    <PageHeader :back="false" />
    <a-card :bordered="false" class="layout-edit-card">
        <div class="step-form-steps-box">
            <a-steps :current="currentStep" class="step-form-steps">
                <a-step title="新建用户" disabled />
                <a-step title="配置权限" disabled />
                <a-step title="完成" disabled />
            </a-steps>
        </div>

        <a-form
            v-if="currentStep != 2"
            class="brevity-form-box"
            ref="formRef"
            :model="formState"
            :rules="rules"
            :label-col="{ span: 4 }"
            :wrapper-col="{ span: 18 }"
            autocomplete="off"
            @finish="onFinish(id ? 'updateList' : 'createList')">
            <template v-if="currentStep === 0">
                <a-form-item label="姓名" name="name">
                    <a-input v-model:value="formState.name" />
                </a-form-item>
                <a-form-item label="用户编码" name="pid">
                    <a-input v-model:value="formState.pid" :disabled="getBoolean(id)" />
                </a-form-item>
                <a-form-item label="用户名" name="userName">
                    <a-input v-model:value="formState.userName" />
                </a-form-item>
                <a-form-item label="描述" name="description">
                    <a-textarea v-model:value="formState.description" :rows="4" />
                </a-form-item>
            </template>
            <template v-if="currentStep === 1">
                <a-form-item label="角色" name="role">
                    <a-select ref="select" v-model:value="formState.role" @change="changeRole">
                        <a-select-option v-for="item in roleList" :key="item.id" :value="item.value">
                            {{ item.label }}
                        </a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="权限" name="authority" v-if="formState.role">
                    <a-form-item-rest>
                        <div v-for="item in operatorAuthority" :key="item.name">
                            <div class="check-all">
                                <a-checkbox
                                    v-model:checked="item.check"
                                    :indeterminate="item.indeterminate"
                                    @change="(e: any) => changeCheckAll(e, item)">
                                    {{ item.name }}
                                </a-checkbox>
                            </div>

                            <a-checkbox-group
                                v-model:value="item.checkedList"
                                :options="item.list"
                                @change="(e: any) => changeCheckGroup(e, item)" />
                            <a-divider />
                        </div>
                    </a-form-item-rest>
                </a-form-item>
            </template>

            <a-form-item :wrapper-col="{ offset: 4 }">
                <a-button class="mr12" @click="handleStep('prev')" v-if="currentStep > 0">上一步</a-button>
                <a-button type="primary" @click="handleStep('next')">下一步</a-button>
            </a-form-item>
        </a-form>
        <a-result
            v-if="currentStep === 2"
            status="success"
            title="操作成功"
            sub-title="用户添加后需进行激活，方可正常使用">
            <template #extra>
                <a-button key="console" type="primary" @click="handleContinue">继续</a-button>
                <a-button key="buy">返回</a-button>
            </template>
        </a-result>
    </a-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import PageHeader from '@/components/widgets/PageHeader.vue'
import { onMounted, reactive } from 'vue'
import type { TableListItem } from '@/model/index'
import useEdit from '@/hooks/useEdit'
import { getBoolean, deepClone, formatArray, resetReactive } from '@/utils/tool'
import regexp from '@/utils/regexp'
import { OWNER_AUTHORITY, SECURITY_AUTHORITY, ACCESS_AUTHORITY } from '@/constants/data'

const initialState = {
    id: '',
    name: '',
    pid: null,
    userName: '',
    description: '',
    role: '',
    authority: ''
}
const formState = reactive<TableListItem>(initialState)

const { id, formRef, getInfo, getQuery, goBack, onFinish } = useEdit({ formState, initialState })

const rules = {
    name: [{ required: true, message: '请输入姓名' }],
    pid: [
        { required: true, message: '请输入用户编码' },
        { pattern: regexp.number, message: '用户编码仅支持数字', trigger: 'blur' }
    ],
    userName: [{ required: true, message: '请输入用户名' }],
    role: [{ required: true, message: '请选择角色' }],
    authority: [{ required: true, message: '请选择权限' }]
}

const currentStep = ref(0)
const handleStep = (step: string) => {
    if (step === 'prev') {
        currentStep.value--
    } else {
        formRef.value?.validate().then(async () => {
            if (currentStep.value == 0) {
                formRef.value?.resetFields()
            }
            currentStep.value++
        })
    }
}
const handleContinue = () => {
    resetReactive(formState, initialState)
    currentStep.value = 0
}

const roleList = formatArray('ROLE_TYPE')
const operatorAuthority = ref()
const changeRole = (value: string) => {
    formState.authority = ''
    if (value === 'owner') {
        operatorAuthority.value = deepClone(OWNER_AUTHORITY)
    } else if (value === 'securityadmin') {
        operatorAuthority.value = deepClone(SECURITY_AUTHORITY)
    } else if (value === 'accessadmin') {
        operatorAuthority.value = deepClone(ACCESS_AUTHORITY)
    }
}
const changeCheckAll = (e: any, item: any) => {
    let authority = {}
    operatorAuthority.value.map((i: any) => {
        if (i.name === item.name) {
            item.checkedList = e.target.checked ? item.list : []
        }
        if (i.checkedList.length > 0) {
            authority[i.name] = i.checkedList
        }
    })
    if (Object.keys(authority).length > 0) {
        formState.authority = JSON.stringify(authority)
    } else {
        formState.authority = ''
    }
}
const changeCheckGroup = (checkedValue: any, item: any) => {
    let authority = {}
    operatorAuthority.value.map((i: any) => {
        if (i.name === item.name) {
            i.check = checkedValue.length === item.list.length
            i.indeterminate = getBoolean(checkedValue.length && checkedValue.length < item.list.length)
        }
        if (i.checkedList.length > 0) {
            authority[i.name] = i.checkedList
        }
    })
    if (Object.keys(authority).length > 0) {
        formState.authority = JSON.stringify(authority)
    } else {
        formState.authority = ''
    }
}
onMounted(() => {
    // getInfo('retrieveListItem')
    getQuery()
})
</script>
