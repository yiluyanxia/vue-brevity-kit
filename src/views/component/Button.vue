<template>
    <a-card :bordered="false" class="brevity-stretch-card pt0">
        <a-tabs size="large" class="mb60">
            <a-tab-pane key="1">
                <template #tab>
                    <SignalFilled />
                    默认按钮
                </template>
                <div class="item-list">
                    <a-button type="primary" class="mr12">Primary</a-button>
                    <a-button type="primary" danger class="mr12">Danger</a-button>
                    <a-button type="dashed" class="mr12">Dashed</a-button>
                    <a-button disabled class="mr12">Disabled</a-button>
                </div>
            </a-tab-pane>
        </a-tabs>
        <a-tabs size="large">
            <a-tab-pane key="1">
                <template #tab>
                    <SignalFilled />
                    拓展按钮
                </template>
                <div class="item-list">
                    <br-button type="primary">Primary</br-button>
                    <br-button type="success">Success</br-button>
                    <br-button type="warning">Warning</br-button>
                    <br-button type="danger">Danger</br-button>
                </div>
            </a-tab-pane>
        </a-tabs>
    </a-card>
</template>
<script setup lang="ts">
import { SignalFilled } from '@ant-design/icons-vue'
</script>
<style lang="less" scoped>
.item-list {
    padding-top: 12px;
    display: flex;
    flex-wrap: wrap;
    .ant-btn {
        margin: 0 12px 24px 0;
    }
}
</style>
