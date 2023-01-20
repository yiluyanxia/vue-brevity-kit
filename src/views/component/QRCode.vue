<template>
    <a-card :bordered="false" title="二维码" class="brevity-stretch-card">
        <div class="brevity-qr-code">
            <div class="brevity-qr-code-input">
                <div class="cont-box">
                    <a-textarea
                        :bordered="false"
                        v-model:value="qrCode"
                        placeholder="请输入内容"
                        :auto-size="{ minRows: 20, maxRows: 20 }" />
                </div>
                <div class="irregular-box">
                    <a-button type="primary" class="mr12" @click="handleQRCode">生成二维码</a-button>
                    <a-button @click="handleReset">再生成一个</a-button>
                </div>
            </div>
            <div class="brevity-qr-code-result">
                <div class="irregular-box">二维码</div>

                <div class="qr-code-box">
                    <canvas class="qr-code" id="canvas" ref="canvasRef"></canvas>
                    <img class="qr-code" src="@/assets/images/qq_group.png" v-if="isShow" />
                </div>
                <p class="tips">
                    {{ isShow ? ' 扫一扫二维码，加入 QQ 群聊' : '已为您生成二维码' }}
                </p>

                <div class="resilt-tool">
                    <a-row :gutter="24" class="mb16">
                        <a-col :span="12">
                            <a-select ref="select" v-model:value="fileType" :options="fileTypeOptions" class="w100" />
                        </a-col>
                        <a-col :span="12">
                            <a-select ref="select" v-model:value="fileType" :options="fileTypeOptions" class="w100" />
                        </a-col>
                    </a-row>
                    <a-button @click="handleDownload" block>保存二维码</a-button>
                </div>
            </div>
        </div>
    </a-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { saveAs } from 'file-saver'
import { formatDateTime } from '@/utils/date'

import QRCode from 'qrcode'
const canvasRef = ref()
const qrCode = ref()
const qrCodeUrl = ref('')
const qrCodeString = ref('')
const isShow = ref(true)
const fileType = ref('png')
const fileTypeOptions = [
    {
        value: 'png',
        label: 'PNG '
    },
    {
        value: 'jpg',
        label: 'JPG'
    },
    {
        value: 'svg',
        label: 'SVG'
    }
]
const handleQRCode = () => {
    if (!qrCode.value) {
        return
    }
    isShow.value = false
    // QRCode.toCanvas(canvasRef.value, qrCode.value, (error) => {
    //     if (error) console.error(error)
    // })
    // const qrRes = QRCode.create('text')
    // console.log('qrRes', qrRes)

    QRCode.toDataURL(canvasRef.value, qrCode.value, (error: any, url: string) => {
        if (error) {
            console.error('error', error)
        } else {
            qrCodeUrl.value = url
        }
    })

    QRCode.toString(qrCode.value, (error: any, string: string) => {
        if (error) {
            console.error('error', error)
        } else {
            qrCodeString.value = string
        }
    })
}
const handleReset = () => {
    qrCode.value = ''
    isShow.value = true
}
const handleDownload = () => {
    const fileName = 'brevity_' + formatDateTime(Date.now(), 'YYYYMMDD') + '.' + fileType.value
    const file = new File([qrCodeString.value], fileName, { type: 'text/plain;charset=utf-8' })
    switch (fileType.value) {
        case 'png':
            saveAs(qrCodeUrl.value, fileName)
            break
        case 'jpg':
            saveAs(qrCodeUrl.value, fileName)
            break
        case 'svg':
            saveAs(file)
            break
    }
}
</script>
<style lang="less" scoped>
.brevity-qr-code {
    display: flex;
    flex-direction: column;
    margin: 24px auto;
    &-input {
        border: 2px solid rgba(147, 152, 155, 0.267);
        border-radius: 8px;
        margin-bottom: 24px;
        display: flex;
        flex-direction: column;
        .irregular-box {
            text-align: center;
            height: 60px;
            line-height: 60px;
            border-top: 2px dashed rgba(147, 152, 155, 0.267);
            position: relative;
            font-size: 14px;
            &::before,
            &::after {
                content: '';
                display: block;
                width: 18px;
                height: 36px;
                border-top: 2px solid rgba(147, 152, 155, 0.267);
                border-bottom: 2px solid rgba(147, 152, 155, 0.267);
                background-color: @bg-color;
                position: absolute;
                top: -20px;
            }
            &::before {
                border-radius: 0 36px 36px 0;
                border-right: 2px solid rgba(147, 152, 155, 0.267);
                left: -2px;
            }
            &::after {
                border-radius: 36px 0px 0 36px;
                border-left: 2px solid rgba(147, 152, 155, 0.267);
                right: -2px;
            }
        }
        .cont-box {
            padding: 24px;
            flex: 1;
        }
    }
    &-result {
        flex: 1;
        border: 2px solid rgba(147, 152, 155, 0.267);
        border-radius: 8px;
        margin-bottom: 24px;
        .irregular-box {
            text-align: center;
            padding: 12px;
            border-bottom: 2px dashed rgba(147, 152, 155, 0.267);
            position: relative;
            font-size: 14px;
            &::before {
                content: '';
                display: block;
                width: 18px;
                height: 36px;
                border-radius: 0 36px 36px 0;
                border-top: 2px solid rgba(147, 152, 155, 0.267);
                border-right: 2px solid rgba(147, 152, 155, 0.267);
                border-bottom: 2px solid rgba(147, 152, 155, 0.267);
                background-color: #fff;
                position: absolute;
                left: -2px;
                bottom: -20px;
            }
            &::after {
                content: '';
                display: block;
                width: 18px;
                height: 36px;
                border-radius: 36px 0px 0 36px;
                border-top: 2px solid rgba(147, 152, 155, 0.267);
                border-left: 2px solid rgba(147, 152, 155, 0.267);
                border-bottom: 2px solid rgba(147, 152, 155, 0.267);
                background-color: #fff;
                position: absolute;
                right: -2px;
                bottom: -20px;
            }
        }
        .qr-code-box {
            width: 100%;
            padding-top: 100%;
            position: relative;
            .qr-code {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 80% !important;
                height: 80% !important;
                margin: auto;
            }
        }
        .tips {
            text-align: center;
            margin-bottom: 24px;
        }
        .resilt-tool {
            padding: 12px 24px;
        }
    }
}
@media (min-width: 768px) {
    .brevity-qr-code {
        flex-direction: row;
        &-input {
            width: 61.8%;
            margin-right: 24px;
        }
        &-result {
            flex: 1;
        }
    }
}
@media (min-width: 1600px) {
    .brevity-qr-code {
        width: 61.8%;
    }
}
</style>
