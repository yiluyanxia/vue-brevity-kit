<template>
    <a-card :bordered="false" class="brevity-stretch-card">
        <a-row type="flex" align="middle" class="result-box">
            <a-col
                :xs="{ order: 2 }"
                :sm="{ span: 24, order: 2 }"
                :md="{ span: 24, order: 2 }"
                :lg="{ span: 12, offset: 2, order: 1 }"
                class="result-info">
                <h3 class="title">审批未通过</h3>
                <p class="desc">您的申请未审批通过，请于3-5个工作日内确认审批结果。</p>
                <a-steps :current="1" status="error" class="result-steps">
                    <template #progressDot="{ status }">
                        <CheckCircleFilled v-if="status === 'finish'" class="step-icon" />
                        <CloseCircleFilled v-else-if="status === 'error'" class="step-icon" />
                        <MinusCircleFilled v-else class="step-icon" />
                    </template>
                    <a-step title="提交申请"></a-step>
                    <a-step title="审批失败"></a-step>
                    <a-step title="申请完成" disabled></a-step>
                </a-steps>
                <a-button type="primary" class="mr12">修改申请</a-button>
                <a-button>返回列表</a-button>
            </a-col>
            <a-col
                :xs="{ order: 1 }"
                :sm="{ span: 24, order: 1 }"
                :md="{ span: 24, order: 1 }"
                :lg="{ span: 10, order: 2 }"
                class="result-img">
                <Confetti type="error"></Confetti>
            </a-col>
        </a-row>
    </a-card>
</template>
<script setup lang="ts">
import { CheckCircleFilled, CloseCircleFilled, MinusCircleFilled } from '@ant-design/icons-vue'
import Confetti from '@/components/ornament/Confetti.vue'
</script>
<style lang="less" scoped>
.result-box {
    height: 90%;
}
.result-info {
    .title {
        font-size: 24px;
    }
    .desc {
        margin-bottom: 36px;
    }
    .result-steps {
        margin-bottom: 36px;
    }
}
.result-img {
    .icon {
        font-size: 80px;
    }
}
@media (max-width: 576px) {
    .result-img {
        display: flex;
        justify-content: center;
    }
}
.step-icon {
    position: absolute;
    top: -7px;
    left: -9px;
    width: 16px;
    height: 16px;
    font-size: 20px;
}
</style>
<style lang="less">
@media (min-width: 576px) {
    .result-steps {
        margin-left: -62px;
        .ant-steps-item-content {
            text-align: right !important;
            .ant-steps-item-title {
                padding-right: 14px;
            }
        }
    }
}
</style>
