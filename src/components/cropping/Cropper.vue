<template>
    <div class="cropper">
        <div class="cropper-state">
            <img id="image" class="cropper-state-img" ref="imgRef" src="../../assets/images/2.jpg" alt="Picture" />
        </div>
        <div class="cropper-control">
            <div class="cropper-preview">
                <div class="cropper-preview-box">
                    <div class="cropper-preview-img cropper-preview-square"></div>
                </div>
                <div
                    class="cropper-preview-box"
                    :style="{ width: showCircle ? '40%' : '0px', margin: showCircle ? '0 12px' : '0px' }">
                    <div
                        class="cropper-preview-img cropper-preview-circle"
                        :style="{ width: showCircle ? '' : '0px' }"></div>
                </div>
            </div>
            <div class="cropper-tool">
                <div class="tool-btn">
                    <a-radio-group v-model:value="aspectRatio" class="mr12 mb24" @change="setAspectRatio">
                        <a-tooltip title="纵横比为16:9">
                            <a-radio-button :value="16 / 9">16:9</a-radio-button>
                        </a-tooltip>
                        <a-tooltip title="纵横比为4:3">
                            <a-radio-button :value="4 / 3">4:3</a-radio-button>
                        </a-tooltip>
                        <a-tooltip title="纵横比为1:1">
                            <a-radio-button :value="1">1:1</a-radio-button>
                        </a-tooltip>
                        <a-tooltip title="纵横比为2:3">
                            <a-radio-button :value="2 / 3">2:3</a-radio-button>
                        </a-tooltip>
                        <a-tooltip title="纵横比为 Free">
                            <a-radio-button value="NaN">Free</a-radio-button>
                        </a-tooltip>
                    </a-radio-group>
                    <a-button-group class="mr12 mb24">
                        <a-tooltip title="向左旋转">
                            <a-button @click="setRotate(-90)">
                                <RotateLeftOutlined />
                            </a-button>
                        </a-tooltip>
                        <a-tooltip title="向右旋转">
                            <a-button @click="setRotate(90)">
                                <RotateRightOutlined />
                            </a-button>
                        </a-tooltip>
                    </a-button-group>

                    <a-button-group class="mr12 mb24">
                        <a-tooltip title="左右翻转">
                            <a-button @click="setScaleX">
                                <ColumnWidthOutlined />
                            </a-button>
                        </a-tooltip>
                        <a-tooltip title="上下翻转">
                            <a-button @click="setScaleY">
                                <ColumnHeightOutlined />
                            </a-button>
                        </a-tooltip>
                    </a-button-group>

                    <a-button-group>
                        <a-tooltip title="重置裁剪">
                            <a-button @click="reset">
                                <ReloadOutlined />
                            </a-button>
                        </a-tooltip>
                        <a-tooltip title="重选图片">
                            <template #title>重选图片</template>
                            <a-button @click="fileRef.click()" :disabled="fileDisabled">
                                <FolderOutlined />
                            </a-button>
                        </a-tooltip>
                    </a-button-group>
                    <input
                        ref="fileRef"
                        @change="changeImg"
                        class="file-input"
                        type="file"
                        name="file"
                        accept="image/*" />
                </div>

                <div class="text-center">
                    <a-button type="primary" @click="getCroppedCanvas" class="mr12">裁剪</a-button>
                    <a-button type="primary" @click="emitUpload" v-if="onUpload">上传</a-button>
                </div>
            </div>
        </div>
    </div>

    <a-modal v-model:visible="visible" title="裁剪">
        <img class="cropped-canvas" :src="croppedImg" />
        <template #footer>
            <a-button key="back" @click="visible = false">关闭</a-button>
            <a-button key="submit" :href="croppedImg" type="primary" :download="uploadedImageName">下载</a-button>
        </template>
    </a-modal>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { message } from 'ant-design-vue'
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'
import {
    RotateLeftOutlined,
    RotateRightOutlined,
    ColumnWidthOutlined,
    ColumnHeightOutlined,
    ReloadOutlined,
    FolderOutlined
} from '@ant-design/icons-vue'

defineProps({
    onUpload: {
        type: Function
    }
})

const URL = window.URL || window.webkitURL
let uploadedImageURL: string
let uploadedImageType = 'image/jpeg'
const uploadedImageName = ref('cropped.jpg')

const fileDisabled = ref<boolean>(false)
const cropper = ref()
const imgRef = ref()
const cropperOptions = ref({
    aspectRatio: 16 / 9,
    preview: '.cropper-preview-img'
})
function init() {
    cropper.value = new Cropper(imgRef.value, cropperOptions.value)
    if (!URL) {
        fileDisabled.value = true
    } else {
        fileDisabled.value = false
    }
}
const showCircle = ref<boolean>(false)
const aspectRatio = ref(16 / 9)
function setAspectRatio() {
    cropperOptions.value['aspectRatio'] = aspectRatio.value
    showCircle.value = aspectRatio.value === 1
    restart()
}

function setRotate(val: any) {
    cropper.value.rotate(val)
}
const scaleX = ref(1)
const scaleY = ref(1)
function setScaleX() {
    scaleX.value = -scaleX.value
    cropper.value.scaleX(scaleX.value)
}
function setScaleY() {
    scaleY.value = -scaleY.value
    cropper.value.scaleY(scaleY.value)
}
function reset() {
    cropper.value.reset()
}
const fileRef = ref()
function changeImg() {
    const file = fileRef.value.files[0]
    if (/^image\/\w+/.test(file.type)) {
        uploadedImageType = file.type
        uploadedImageName.value = file.name
        if (uploadedImageURL) {
            URL.revokeObjectURL(uploadedImageURL)
        }
        imgRef.value.src = uploadedImageURL = URL.createObjectURL(file)
        restart()
    } else {
        message.warning('请选择图片')
    }
}
function restart() {
    cropper.value && cropper.value.destroy()
    cropper.value = new Cropper(imgRef.value, cropperOptions.value)
}
const visible = ref<boolean>(false)
const croppedImg = ref()
function getCroppedCanvas() {
    visible.value = true
    let croppedCanvasOptions = {
        minWidth: 256,
        minHeight: 256,
        maxWidth: 4096,
        maxHeight: 4096,
        imageSmoothingEnabled: false,
        imageSmoothingQuality: 'high'
    }
    if (uploadedImageType === 'image/jpeg') {
        croppedCanvasOptions['fillColor'] = '#fff'
    }

    croppedImg.value = cropper.value.getCroppedCanvas(croppedCanvasOptions).toDataURL(uploadedImageType)
}

const emit = defineEmits(['upload'])
const emitUpload = () => {
    cropper.value.getCroppedCanvas().toBlob((blob: any) => {
        emit('upload', blob)
    })
}
onMounted(() => {
    init()
})
</script>
<style lang="less" scoped>
.cropper {
    &-state {
        height: 497px;
        max-height: 497px;
        min-height: 497px;
        margin-bottom: 24px;
        &-img {
            max-width: 100%;
            height: 100%;
            display: block;
        }
    }
    &-control {
        padding: 0 12px;
        flex: 1;
    }
    &-preview {
        display: flex;
        justify-content: center;
        &-box {
            width: 40%;
            padding-top: 40%;
            position: relative;
            margin: 0 12px;
            box-sizing: border-box;
        }
        &-img {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            overflow: hidden;
            margin: auto;
            background-color: #fff;
            img {
                position: absolute;
                max-width: 100%;
            }
        }
        &-circle {
            border-radius: 100%;
        }
    }
    &-tool {
        padding: 24px 12px;
        text-align: center;
        .tool-btn {
            margin-bottom: 24px;
        }
        .file-input {
            display: none;
        }
    }
}
.cropped-canvas {
    width: 100%;
    height: auto;
    max-height: 500px;
    object-fit: contain;
}

@media (min-width: 992px) {
    .cropper {
        display: flex;
        &-state {
            width: 61.8%;
        }
    }
}
</style>
