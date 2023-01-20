<template>
    <a-card :bordered="false" title="保存" class="brevity-stretch-card">
        <a-row>
            <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                <div class="text-block">
                    <div class="text-head">
                        <div class="title">示例</div>
                        <div class="tool">
                            <a-tooltip title="复制">
                                <a-button type="link" @click="handleCopy">
                                    <template #icon><CopyOutlined /></template>
                                </a-button>
                            </a-tooltip>
                            <a-tooltip title="保存">
                                <a-button type="link" @click="handleSave">
                                    <template #icon><SaveOutlined /></template>
                                </a-button>
                            </a-tooltip>
                        </div>
                    </div>
                    <a-textarea v-model:value="text" :auto-size="{ minRows: 10, maxRows: 10 }" />
                </div>
            </a-col>
        </a-row>
    </a-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { CopyOutlined, SaveOutlined } from '@ant-design/icons-vue'
import { saveAs } from 'file-saver'
import { clipboard } from '@/utils/clipboard'
import { message } from 'ant-design-vue'

const text = ref(`{
    "display": "light",
    "theme": "daybreakBlue",
    "lightMenu": false,
    "columnsMenu": true,
    "columnsMenuTitle": false,
    "columnsMenuTooltip": true
}`)
const handleCopy = () => {
    clipboard(text.value)
        .then(() => {
            message.success('复制成功')
        })
        .catch(() => {
            message.error('复制失败')
        })
}
const handleSave = () => {
    const blob = new Blob([text.value], { type: 'text/plain;charset=utf-8' })
    saveAs(blob, 'setting.json')
}
</script>
<style lang="less" scoped>
.text-block {
    .text-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 6px;
        .title {
            font-size: 16px;
            font-weight: bold;
        }
        .tool {
            text-align: right;
        }
    }
}
</style>
