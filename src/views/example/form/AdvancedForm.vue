<template>
    <PageHeader :back="false" />

    <a-form
        class="brevity-advanced-form-box"
        ref="formRef"
        :model="formState"
        :rules="rules"
        :label-col="{ xs: 4, sm: 6, md: 8 }"
        :wrapper-col="{ xs: 20, sm: 18, md: 16 }"
        autocomplete="off"
        @finish="handleFinish"
        @finishFailed="handleFinishFailed">
        <a-card :bordered="false" title="基础数据" class="mb24">
            <a-row>
                <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" :xxl="6">
                    <a-form-item label="名称" name="name">
                        <a-input v-model:value="formState.name" />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" :xxl="6">
                    <a-form-item label="PID" name="pid">
                        <a-input v-model:value="formState.pid" :disabled="getBoolean(id)" />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" :xxl="6">
                    <a-form-item label="用户名" name="userName">
                        <a-input v-model:value="formState.userName" />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" :xxl="6">
                    <a-form-item label="标签" name="tag">
                        <a-input v-model:value="formState.tag" />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" :xxl="6">
                    <a-form-item label="哈希" name="hash">
                        <a-select v-model:value="formState.hash" :options="hashOptions"></a-select>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" :xxl="6">
                    <a-form-item label="引擎" name="engine">
                        <a-select v-model:value="formState.engine" :options="engineOptions"></a-select>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" :xxl="6">
                    <a-form-item label="最小值" name="min">
                        <a-input-number v-model:value="formState.min" :min="1" style="width: 100%" />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" :xxl="6">
                    <a-form-item label="最大值" name="max">
                        <a-input-number v-model:value="formState.max" :min="1" style="width: 100%" />
                    </a-form-item>
                </a-col>
            </a-row>
        </a-card>
        <a-card :bordered="false" title="安全配置" class="mb24">
            <template v-for="(security, index) in formState.securities" :key="index">
                <a-divider orientation="right" orientation-margin="0px">
                    安全组{{ index + 1 }}
                    <a-button
                        danger
                        type="text"
                        @click="removeSecurity(security)"
                        :disabled="formState.securities.length === 1">
                        <template #icon><MinusCircleOutlined /></template>
                    </a-button>
                </a-divider>
                <a-row>
                    <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" :xxl="6">
                        <a-form-item
                            label="算法"
                            :name="['securities', index, 'algorithm']"
                            :rules="{
                                required: true,
                                message: '请选择算法',
                                trigger: 'change'
                            }">
                            <a-select v-model:value="security.algorithm" :options="algorithmOptions"></a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" :xxl="6">
                        <a-form-item
                            label="模式"
                            :name="['securities', index, 'mode']"
                            :rules="{
                                required: true,
                                message: '请输入模式',
                                trigger: 'change'
                            }">
                            <a-input v-model:value="security.mode" />
                        </a-form-item>
                    </a-col>
                    <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" :xxl="6">
                        <a-form-item label="填充" name="padding">
                            <a-input v-model:value="security.padding" />
                        </a-form-item>
                    </a-col>
                    <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" :xxl="6">
                        <a-form-item label="密钥" name="privateKey">
                            <a-input v-model:value="security.privateKey" />
                        </a-form-item>
                    </a-col>
                </a-row>
            </template>
            <a-divider dashed class="pt24">
                <a-button @click="addSecurity">
                    <template #icon><PlusCircleOutlined /></template>
                    添加安全组
                </a-button>
            </a-divider>
        </a-card>

        <a-card :bordered="false" title="访客名单">
            <a-table
                :columns="columns"
                :data-source="formState.visitorList"
                :scroll="{ x: '100%' }"
                :pagination="false">
                <template #bodyCell="{ column, text, record, index }">
                    <template v-if="column.dataIndex === 'name'">
                        <a-form-item
                            v-if="editableData[record.id]"
                            :name="['visitorList', index, column.dataIndex]"
                            :rules="{
                                required: true,
                                message: '请输入姓名',
                                trigger: 'change'
                            }">
                            <a-input v-model:value="record[column.dataIndex]" />
                        </a-form-item>
                        <template v-else>
                            {{ text }}
                        </template>
                    </template>
                    <template v-if="column.dataIndex === 'account'">
                        <a-form-item
                            v-if="editableData[record.id]"
                            :name="['visitorList', index, column.dataIndex]"
                            :rules="{
                                required: true,
                                message: '请输入账号',
                                trigger: 'change'
                            }">
                            <a-input v-model:value="record[column.dataIndex]" />
                        </a-form-item>
                        <template v-else>
                            {{ text }}
                        </template>
                    </template>
                    <template v-if="column.dataIndex === 'type'">
                        <a-form-item
                            v-if="editableData[record.id]"
                            :name="['visitorList', index, column.dataIndex]"
                            :rules="{
                                required: true,
                                message: '请选择类型',
                                trigger: 'change'
                            }">
                            <a-select
                                v-if="editableData[record.id]"
                                v-model:value="record[column.dataIndex]"
                                :options="formatArray('VISITOR_TYPE')"
                                style="width: 100%"></a-select>
                        </a-form-item>
                        <a-tag :color="getConstant('VISITOR_TYPE', record.type, 'color')" v-else>
                            {{ getConstant('VISITOR_TYPE', record.type) }}
                        </a-tag>
                    </template>
                    <template v-else-if="column.key === 'action'">
                        <template v-if="editableData[record.id]">
                            <a-button type="link" size="small" @click="saveRow(record.id, index)">保存</a-button>
                            <a-button type="link" size="small" @click="cancelRow(record.id, index)">取消</a-button>
                        </template>
                        <a-button v-else type="link" size="small" @click="editRow(record.id)">编辑</a-button>
                    </template>
                </template>
                <template #footer>
                    <a-button block type="dashed" @click="addRow">
                        <template #icon><PlusOutlined /></template>
                        添加
                    </a-button>
                </template>
            </a-table>
        </a-card>
        <div class="brevity-advanced-form-footer" :style="{ width: `calc(100% - ${layoutStore.marginLeft}px)` }">
            <div class="brevity-advanced-form-footer-left"></div>
            <div class="brevity-advanced-form-footer-right">
                <a-popover title="校验提示">
                    <template #content>
                        <a-list size="small" :data-source="errorFieldsInfo" class="brevity-advanced-form-footer-warn">
                            <template #renderItem="{ item }">
                                <a-list-item>
                                    <ExclamationCircleOutlined class="error mr12" />
                                    <div class="brevity-advanced-form-footer-warn-content">
                                        <div v-for="(error, index) in item.errors" :key="index">
                                            {{ error }}
                                        </div>
                                    </div>
                                </a-list-item>
                            </template>
                        </a-list>
                    </template>
                    <ExclamationCircleOutlined class="error mr12" v-if="errorFieldsInfo.length > 0" />
                </a-popover>
                <a-button type="primary" html-type="submit" class="mr12">确定</a-button>
                <a-button>取消</a-button>
            </div>
        </div>
    </a-form>
</template>
<script setup lang="ts">
import PageHeader from '@/components/widgets/PageHeader.vue'
import { onMounted, ref, reactive, type UnwrapRef } from 'vue'
import useEdit from '@/hooks/useEdit'
import { deepClone, formatArray, getBoolean, getConstant } from '@/utils/tool'
import regexp from '@/utils/regexp'
import { MinusCircleOutlined, PlusCircleOutlined, PlusOutlined, ExclamationCircleOutlined } from '@ant-design/icons-vue'
import { useLayoutStore } from '@/stores/layout'

const layoutStore = useLayoutStore()

interface Security {
    algorithm: string
    mode: string
    padding: string
    privateKey: string
}
interface Visitor {
    id: string
    name: string
    account: string
    type: number | null
}
interface SecurityForm {
    id: string
    name: string
    pid: number | null
    userName: string
    hash: string
    tag: string
    engine: string
    min: number | undefined
    max: number | undefined
    securities: Security[]
    visitorList: Visitor[]
}
const initialState = {
    id: '',
    name: '',
    pid: null,
    userName: '',
    hash: '',
    tag: '',
    engine: '',
    min: undefined,
    max: undefined,
    securities: [{ algorithm: '', mode: '', padding: '', privateKey: '' }],
    visitorList: [
        { id: '0', name: 'Alice', account: 'alice', type: 1 },
        { id: '1', name: 'Bob', account: 'bob', type: 1 }
    ]
}

const formState = reactive<SecurityForm>(initialState)

const { id, formRef, getInfo, getQuery, goBack, onFinish } = useEdit({ formState, initialState })
const hashOptions = [
    {
        value: 'SM3',
        label: 'SM3'
    },
    {
        value: 'MD5',
        label: 'MD5'
    },
    {
        value: 'SHA1',
        label: 'SHA1'
    },
    {
        value: 'SHA256',
        label: 'SHA256'
    }
]
const engineOptions = [
    {
        value: '2D',
        label: '2D'
    },
    {
        value: '3D',
        label: '3D'
    }
]
const algorithmOptions = [
    {
        value: 'SM4',
        label: 'SM4'
    },
    {
        value: 'AES',
        label: 'AES'
    },
    {
        value: 'DES',
        label: 'DES'
    }
]
const rules = {
    name: [{ required: true, message: '请输入名称' }],
    pid: [
        { required: true, message: '请输入 PID' },
        { pattern: regexp.number, message: 'PID 仅支持数字' },
        { min: 3, max: 10, message: 'PID 长度为3-10位字符' }
    ],
    userName: [{ required: true, message: '请输入用户名' }]
}

const addSecurity = () => {
    formState.securities.push({ algorithm: '', mode: '', padding: '', privateKey: '' })
}
const removeSecurity = (item: Security) => {
    let index = formState.securities.indexOf(item)
    if (index !== -1) {
        formState.securities.splice(index, 1)
    }
}

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        width: 120
    },
    {
        title: '账号',
        dataIndex: 'account',
        width: 120
    },
    {
        title: '类型',
        dataIndex: 'type',
        width: 120
    },
    {
        title: '操作',
        key: 'action',
        width: 100
    }
]
const editableData: UnwrapRef<Record<string, Visitor>> = reactive({})
const addRow = () => {
    const id = (formState.visitorList.length + 1).toString()
    formState.visitorList.push({
        id: id,
        name: '',
        account: '',
        type: null
    })
    editableData[id] = {
        id: id,
        name: '',
        account: '',
        type: null
    }
}
const editRow = (id: string) => {
    editableData[id] = deepClone(formState.visitorList.filter((item) => id === item.id)[0])
}
const saveRow = (id: string, index: number) => {
    formRef.value
        ?.validateFields([
            ['visitorList', index, 'name'],
            ['visitorList', index, 'account'],
            ['visitorList', index, 'type']
        ])
        .then(() => {
            delete editableData[id]
        })
        .catch((error) => {
            console.log('error', error)
        })
}
const cancelRow = (id: string, index: number) => {
    if (editableData[id].type) {
        Object.assign(formState.visitorList.filter((item) => id === item.id)[0], editableData[id])
    } else {
        delete formState.visitorList[index]
    }
    delete editableData[id]
}
const errorFieldsInfo = ref([])

const handleFinishFailed = ({ errorFields }) => {
    console.log('errorFields', errorFields)

    errorFieldsInfo.value = errorFields
}
const handleFinish = () => {
    errorFieldsInfo.value = []
    onFinish(id ? 'updateList' : 'createList')
}
onMounted(() => {
    // getInfo('retrieveListItem')
    getQuery()
})
</script>
