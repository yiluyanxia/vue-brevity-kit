<template>
    <a-card :bordered="false" class="brevity-stretch-card pt0">
        <a-tabs size="large" class="mb60">
            <a-tab-pane key="1">
                <template #tab>
                    <SignalFilled />
                    默认图标
                </template>
                <a-space :size="24" direction="vertical">
                    <a-radio-group v-model:value="radio">
                        <a-radio-button value="1">
                            <BorderOutlined />
                            线框风格
                        </a-radio-button>
                        <a-radio-button value="2">
                            <MinusSquareFilled />
                            实底风格
                        </a-radio-button>
                        <a-radio-button value="3">
                            <BgColorsOutlined />
                            双色风格
                        </a-radio-button>
                    </a-radio-group>
                    <div class="icon-list" v-if="radio === '1'">
                        <PieChartOutlined />
                        <BoxPlotOutlined />
                        <FundOutlined />
                        <SlidersOutlined />
                    </div>
                    <div class="icon-list" v-if="radio === '2'">
                        <PieChartFilled />
                        <BoxPlotFilled />
                        <FundFilled />
                        <SlidersFilled />
                    </div>
                    <div class="icon-list" v-if="radio === '3'">
                        <PieChartTwoTone />
                        <BoxPlotTwoTone />
                        <FundTwoTone />
                        <SlidersTwoTone />
                    </div>
                </a-space>
            </a-tab-pane>
        </a-tabs>

        <a-tabs size="large" class="mb60">
            <a-tab-pane key="1">
                <template #tab>
                    <SignalFilled />
                    iconfont 图标
                </template>
                <div class="icon-list">
                    <i class="iconfont br-icon-rocket"></i>
                    <i class="iconfont br-icon-car"></i>
                    <i class="iconfont br-icon-crown"></i>
                    <i class="iconfont br-icon-gift"></i>
                </div>
            </a-tab-pane>
        </a-tabs>

        <a-tabs size="large">
            <a-tab-pane key="1">
                <template #tab>
                    <SignalFilled />
                    自定义图标
                </template>
                <a-input v-model:value="icon" style="max-width: 316px">
                    <template #suffix>
                        <a-tooltip title="支持 antd 图标库，大驼峰字符串">
                            <InfoCircleOutlined style="color: rgba(0, 0, 0, 0.45)" />
                        </a-tooltip>
                    </template>
                </a-input>
                <div class="icon-list mb24">
                    <Icon :icon="icon" />
                </div>
                <div class="icon-list">
                    <Icon icon="ClearOutlined" />
                    <Icon icon="CoffeeOutlined" />
                    <Icon icon="LaptopOutlined" />
                    <Icon icon="SkinOutlined" />
                </div>
            </a-tab-pane>
        </a-tabs>
    </a-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Icon from '@/components/icon/index'
import {
    SignalFilled,
    BorderOutlined,
    PieChartOutlined,
    BoxPlotOutlined,
    FundOutlined,
    SlidersOutlined,
    MinusSquareFilled,
    PieChartFilled,
    BoxPlotFilled,
    FundFilled,
    SlidersFilled,
    BgColorsOutlined,
    PieChartTwoTone,
    BoxPlotTwoTone,
    FundTwoTone,
    SlidersTwoTone,
    InfoCircleOutlined
} from '@ant-design/icons-vue'

const radio = ref('1')
const icon = ref('TrophyOutlined')
</script>
<style lang="less" scoped>
.icon-list {
    padding-top: 12px;
    display: flex;
    justify-content: space-between;
    max-width: 316px;
    .anticon,
    .iconfont {
        font-size: 28px;
        color: #555555;
    }
}
</style>
