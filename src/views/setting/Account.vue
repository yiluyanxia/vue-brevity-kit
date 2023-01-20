<template>
    <a-card :bordered="false" class="brevity-stretch-card">
        <a-tabs
            v-model:activeKey="activeKey"
            :tab-position="layoutStore.miniScreen ? 'top' : 'left'"
            class="brevity-setting-tabs">
            <a-tab-pane key="1" tab="基本信息">
                <div class="brevity-setting-title" v-if="!layoutStore.miniScreen">基本信息</div>
                <a-form
                    class="setting-form-box"
                    ref="formRef"
                    :model="formState"
                    :rules="rules"
                    layout="vertical"
                    :label-col="{ span: 4 }"
                    :wrapper-col="{ span: 18 }"
                    autocomplete="off"
                    @finish="onFinish(id ? 'updateList' : 'createList')">
                    <a-form-item label="用户名" name="userName">
                        <a-input v-model:value="formState.userName" />
                    </a-form-item>
                    <a-form-item label="邮箱" name="email">
                        <a-input v-model:value="formState.email" :disabled="getBoolean(id)" />
                    </a-form-item>
                    <a-form-item label="姓名" name="name">
                        <a-input v-model:value="formState.name" />
                    </a-form-item>
                    <a-form-item label="简介" name="description">
                        <a-textarea v-model:value="formState.description" :rows="4" />
                    </a-form-item>
                    <a-form-item>
                        <a-button type="primary" html-type="submit" class="mr12">确定</a-button>
                    </a-form-item>
                </a-form>
            </a-tab-pane>
            <a-tab-pane key="2" tab="消息通知">
                <div class="brevity-setting-title" v-if="!layoutStore.miniScreen">消息通知</div>
                <a-list item-layout="horizontal" :data-source="notification">
                    <template #renderItem="{ item }">
                        <a-list-item>
                            <template #actions>
                                <a-select
                                    v-if="item.options"
                                    v-model:value="item.value"
                                    :options="item.options"
                                    style="width: 100px"></a-select>
                                <a-switch v-else v-model:checked="item.value" />
                            </template>

                            <a-list-item-meta :description="item.desc">
                                <template #title>
                                    {{ item.title }}
                                </template>
                            </a-list-item-meta>
                        </a-list-item>
                    </template>
                </a-list>
            </a-tab-pane>
            <a-tab-pane key="3" tab="账号安全">
                <div class="brevity-setting-title" v-if="!layoutStore.miniScreen">账号安全</div>
                <a-list item-layout="horizontal" :data-source="access">
                    <template #renderItem="{ item }">
                        <a-list-item>
                            <template #actions>
                                <a-button type="link">{{ item.btn }}</a-button>
                            </template>

                            <a-list-item-meta :description="item.desc">
                                <template #title>
                                    {{ item.title }}
                                </template>
                            </a-list-item-meta>
                        </a-list-item>
                    </template>
                </a-list>
            </a-tab-pane>
        </a-tabs>
    </a-card>
</template>
<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import useEdit from '@/hooks/useEdit'
import { getBoolean } from '@/utils/tool'
import regexp from '@/utils/regexp'
import { useLayoutStore } from '@/stores/layout'

const layoutStore = useLayoutStore()

const activeKey = ref('1')

const initialState = {
    id: '',
    name: 'Admin',
    email: 'Admin@Admin.com',
    userName: 'admin',
    description: ''
}
const formState = reactive(initialState)

const { id, getQuery, onFinish } = useEdit({ formState, initialState })

const rules = {
    name: [{ required: true, message: '请输入名称' }],
    email: [
        { required: true, message: '请输入邮箱' },
        { pattern: regexp.email, message: '邮箱格式错误', trigger: 'blur' }
    ],
    userName: [{ required: true, message: '请输入用户名' }]
}

const notification = ref([
    {
        title: '项目消息',
        desc: '当被提及时、分配至某个项目时接收相关消息',
        value: true
    },
    {
        title: '系统消息',
        desc: '当系统出现警告时接收相关消息',
        value: true
    },
    {
        title: '接收消息',
        desc: '在非异常情况下，用户可以发送模板消息至当前账号',
        value: '0',
        options: [
            {
                value: '0',
                label: '仅管理员'
            },
            {
                value: '1',
                label: '消息组员'
            },
            {
                value: '2',
                label: '任何用户'
            }
        ]
    },
    {
        title: '接收方式',
        desc: '选择一种方式用于接收系统发送的消息',
        value: '1',
        options: [
            {
                value: '0',
                label: '平台'
            },
            {
                value: '1',
                label: '邮件'
            },
            {
                value: '2',
                label: '短信'
            }
        ]
    }
])
const access = ref([
    {
        title: '绑定邮箱',
        desc: '已绑定邮箱为 admin@admin.com',
        btn: '修改'
    },
    {
        title: '账号密码',
        desc: '密码为8-20位，且包含字母数字及特殊符号',
        btn: '修改'
    },
    {
        title: '网络会话',
        desc: '查看登录您帐户的设备列表。撤销您不认识的任何会话',
        btn: '查看'
    },
    {
        title: 'SSH 密钥',
        desc: '查看与您的帐户关联的 SSH 密钥',
        btn: '查看'
    }
])
onMounted(() => {
    getQuery()
})
</script>
<style lang="less" scoped>
.brevity-setting-title {
    font-size: 18px;
    border-bottom: 1px solid var(--light-color);
    height: 38px;
    line-height: 36px;
    margin-bottom: 24px;
}
.setting-form-box {
    max-width: 800px;
}
</style>
<style lang="less">
.brevity-setting-tabs {
    min-height: 100%;
    &.ant-tabs-left {
        margin-left: -24px;
        .ant-tabs-nav {
            min-width: 184px;
        }
        .ant-tabs-tab-active {
            background-color: var(--ant-primary-color-deprecated-f-12);
        }
    }
}
</style>
