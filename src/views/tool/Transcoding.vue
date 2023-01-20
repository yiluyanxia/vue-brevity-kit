<template>
    <a-card :bordered="false" title="转码" class="brevity-stretch-card">
        <template #extra>
            <a-button type="link" @click="handleClearAll">全部清空</a-button>
        </template>
        <a-row :gutter="[24, 24]">
            <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" :xxl="6" v-for="item in transcodeList" :key="item.key">
                <div class="chunk-box">
                    <div class="chunk-cont">
                        <a-textarea
                            :bordered="false"
                            v-model:value="transcodeState[item.key]"
                            placeholder="请输入"
                            :auto-size="{ minRows: 5, maxRows: 5 }" />
                    </div>
                    <div class="chunk-foot">
                        <div class="title">{{ item.title }}</div>
                        <a-button
                            type="primary"
                            @click="handleTranscode(item.key)"
                            :disabled="!transcodeState[item.key]">
                            转码
                        </a-button>
                        <div class="tool">
                            <a-tooltip title="复制">
                                <a-button
                                    type="link"
                                    @click="handleCopy(transcodeState[item.key])"
                                    :disabled="!transcodeState[item.key]">
                                    <template #icon><CopyOutlined /></template>
                                </a-button>
                            </a-tooltip>
                            <a-tooltip title="保存">
                                <a-button
                                    type="link"
                                    @click="handleSave(transcodeState[item.key], item.key)"
                                    :disabled="!transcodeState[item.key]">
                                    <template #icon><SaveOutlined /></template>
                                </a-button>
                            </a-tooltip>
                            <a-tooltip title="清空">
                                <a-button
                                    type="link"
                                    @click="handleClear(item.key)"
                                    :disabled="!transcodeState[item.key]">
                                    <template #icon><ClearOutlined /></template>
                                </a-button>
                            </a-tooltip>
                        </div>
                    </div>
                </div>
            </a-col>
        </a-row>
    </a-card>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { CopyOutlined, SaveOutlined, ClearOutlined } from '@ant-design/icons-vue'
import { saveAs } from 'file-saver'
import { clipboard } from '@/utils/clipboard'
import { message } from 'ant-design-vue'
import { Hex, Base64, Binary } from '@/utils/transcode'

const transcodeList = [
    {
        title: '原始数据',
        key: 'raw'
    },
    {
        title: 'Hex',
        key: 'hex'
    },
    {
        title: 'Base64',
        key: 'base64'
    },
    {
        title: 'Binary',
        key: 'binary'
    }
]

const transcodeState = reactive({
    raw: '',
    hex: '',
    base64: '',
    binary: ''
})

const handleTranscode = (type: string) => {
    if (type === 'raw') {
        const utfRow = Hex.utf8Encode(transcodeState.raw)
        transcodeState.hex = Hex.stringtoHex(utfRow)
        transcodeState.base64 = Base64.encode(utfRow)
        transcodeState.binary = Binary.decode(transcodeState.hex)
    }
    if (type === 'hex') {
        const strHex = Hex.hextoString(transcodeState.hex)
        transcodeState.raw = Hex.utf8Decode(strHex)
        transcodeState.base64 = Base64.encode(strHex)
        transcodeState.binary = Binary.decode(Hex.stringtoHex(strHex))
    }
    if (type === 'base64') {
        const deBase64 = Base64.decode(transcodeState.base64)
        transcodeState.raw = Hex.utf8Decode(deBase64)
        transcodeState.hex = Hex.stringtoHex(deBase64)
        transcodeState.binary = Binary.decode(Hex.stringtoHex(deBase64))
    }
    if (type === 'binary') {
        const enBinary = Binary.encode(transcodeState.binary)
        const hexBinary = Hex.hextoString(enBinary)
        transcodeState.raw = Hex.utf8Decode(hexBinary)
        transcodeState.hex = enBinary
        transcodeState.base64 = Base64.encode(hexBinary)
    }
}

const handleCopy = (val: string) => {
    clipboard(val)
        .then(() => {
            message.success('复制成功')
        })
        .catch(() => {
            message.error('复制失败')
        })
}

const handleSave = (val: string, type: string) => {
    const blob = new Blob([val], { type: 'text/plain;charset=utf-8' })
    const fileName = `${type}.txt`
    saveAs(blob, fileName)
}

const handleClear = (type: string) => {
    transcodeState[type] = ''
}

const handleClearAll = () => {
    transcodeState.raw = ''
    transcodeState.hex = ''
    transcodeState.base64 = ''
    transcodeState.binary = ''
}
</script>
<style lang="less" scoped>
.chunk-box {
    border: 1px solid var(--light-color);
    border-radius: 4px;
    .chunk-cont {
        padding: 24px;
    }
    .chunk-foot {
        border-top: 1px solid var(--light-color);
        padding: 12px 0px;
        margin: 0 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
            font-size: 14px;
            font-weight: bold;
        }
    }
}
</style>
