<template>
    <a-row :gutter="[24, 24]" class="brevity-setting-system-title mb24" type="flex" align="middle">
        <a-col :xs="24" :sm="24" :md="12">
            <h3 class="title">系统配置</h3>
            <p class="desc">系统已初始化，配置后立即生效</p>
        </a-col>
        <a-col :xs="24" :sm="24" :md="12" class="text-right">
            <a-button size="large" type="primary" class="mr12">确定</a-button>
            <a-button size="large">取消</a-button>
        </a-col>
    </a-row>
    <a-card :bordered="false" title="防火墙" class="mb24">
        <template #extra><a-button type="link" size="small">重置</a-button></template>
        <a-row :gutter="[24, 24]">
            <a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6" :xxl="6" v-for="(item, index) in firewall" :key="index">
                <a-card class="switch-card">
                    <h3 class="title">{{ item.title }}</h3>
                    <p class="desc">{{ item.desc }}</p>
                    <a-switch v-model:checked="item.checked" class="switch" />
                </a-card>
            </a-col>
        </a-row>
    </a-card>
    <a-card :bordered="false" title="密文配置" class="mb24">
        <a-list item-layout="horizontal" :data-source="ciphertext">
            <template #renderItem="{ item }">
                <a-list-item>
                    <template #actions>
                        <a-select v-model:value="item.value" :options="item.options" style="width: 100px"></a-select>
                    </template>

                    <a-list-item-meta :description="item.desc">
                        <template #title>
                            {{ item.title }}
                        </template>
                    </a-list-item-meta>
                </a-list-item>
            </template>
        </a-list>
    </a-card>
    <a-card :bordered="false" title="日志配置" class="mb24">
        <a-list item-layout="horizontal" :data-source="log">
            <template #renderItem="{ item }">
                <a-list-item>
                    <template #actions>
                        <a-switch v-model:checked="item.checked" />
                    </template>

                    <a-list-item-meta :description="item.desc">
                        <template #title>
                            {{ item.title }}
                        </template>
                    </a-list-item-meta>
                </a-list-item>
            </template>
        </a-list>
    </a-card>

    <a-card :bordered="false" title="权限配置" class="mb24">
        <a-list item-layout="horizontal" :data-source="permission">
            <template #renderItem="{ item }">
                <a-list-item>
                    <template #actions>
                        <a-select v-model:value="item.value" :options="item.options" style="width: 100px"></a-select>
                    </template>

                    <a-list-item-meta :description="item.desc">
                        <template #title>
                            {{ item.title }}
                        </template>
                    </a-list-item-meta>
                </a-list-item>
            </template>
        </a-list>
    </a-card>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'

const firewall = ref([
    {
        title: '专用网络',
        desc: '允许指定网络内进行互联操作',
        checked: true
    },
    {
        title: '白名单',
        desc: '允许白名单内用户进行有效连接',
        checked: false
    },
    {
        title: '入站规则',
        desc: '启用全局入站规则提高安全',
        checked: false
    },
    {
        title: '出站规则',
        desc: '启用全局出站规则提高安全',
        checked: false
    }
])
const ciphertext = ref([
    {
        title: '密文结构',
        desc: '用于非对称加密 SM2、RSA 的加解密，按标准生成指定结构的密文',
        value: '',
        options: [
            {
                value: 'C1C3C2',
                label: 'C1C3C2'
            },
            {
                value: 'C1C2C3',
                label: 'C1C2C3'
            }
        ]
    },
    {
        title: '默认模式',
        desc: '用于对称加密 SM4 分组加密迭代的方法，目前支持ECB、CBC等模式',
        value: '',
        options: [
            {
                value: 'ECB',
                label: 'ECB'
            },
            {
                value: 'CBC',
                label: 'CBC'
            }
        ]
    }
])
const log = ref([
    {
        title: '日志存档',
        desc: '每日2点自动存档，无需二次确认，配置后当日生效',
        checked: false
    },
    {
        title: '日志解析',
        desc: '每日3点自动生成解析报告，发送至管理员及指定用户',
        checked: false
    }
])
const permission = ref([
    {
        title: '访问终端',
        desc: '配置从客户端访问终端的权限，默认为仅管理员可访问',
        value: '0',
        options: [
            {
                value: '0',
                label: '仅管理员'
            },
            {
                value: '1',
                label: '指定用户'
            },
            {
                value: '2',
                label: '任意用户'
            }
        ]
    }
])
</script>
<style lang="less" scoped>
.brevity-setting-system-title {
    .title {
        font-size: 16px;
        margin-bottom: 4px;
        font-weight: bold;
    }
    .desc {
        font-size: 12px;
        color: #666;
        margin-bottom: 0;
    }
}
.switch-card {
    position: relative;
    .title {
        font-size: 14px;
        margin-bottom: 12px;
        font-weight: bold;
        color: #555;
        line-height: 22px;
    }
    .desc {
        font-size: 12px;
        color: #666;
        margin-bottom: 0;
    }
    .switch {
        position: absolute;
        top: 24px;
        right: 24px;
    }
}
</style>
