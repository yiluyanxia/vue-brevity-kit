<template>
    <a-button :type="type"><slot></slot></a-button>
</template>
<script setup lang="ts">
defineProps({
    type: {
        type: String,
        default: 'default'
    }
})
</script>
<style lang="less" scoped>
.ant-btn-warning {
    color: #fff;
    border-color: var(--ant-warning-color);
    background: var(--ant-warning-color);
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
    &:hover,
    &:focus {
        color: #fff;
        border-color: var(--ant-warning-color-hover);
        background: var(--ant-warning-color-hover);
    }
}
.ant-btn-success {
    color: #fff;
    border-color: var(--ant-success-color);
    background: var(--ant-success-color);
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
    &:hover,
    &:focus {
        color: #fff;
        border-color: var(--ant-success-color-hover);
        background: var(--ant-success-color-hover);
    }
}
</style>
