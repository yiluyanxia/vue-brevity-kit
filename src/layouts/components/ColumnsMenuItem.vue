<template>
    <div
        class="brevity-menu-item"
        :class="[
            display,
            {
                active: menuItem.name === currentMenu?.name,
                'dark-menu': !lightMenu,
                'show-title': showTitle
            }
        ]"
        @click="emitActive">
        <Icon v-if="menuItem.meta.icon" :icon="menuItem.meta.icon" class="icon" />
        <span v-if="showTitle" class="title">{{ $t(menuItem.meta.title) }}</span>
    </div>
</template>
<script setup lang="ts">
import Icon from '@/components/icon/index'

const props = defineProps({
    menuItem: {
        type: Object,
        default: null
    },
    currentMenu: {
        type: Object,
        default: null
    },
    showTitle: {
        type: Boolean,
        default: false
    },
    display: {
        type: String,
        default: ''
    },
    lightMenu: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits(['active'])
const emitActive = () => {
    emit('active', props.menuItem)
}
</script>
<style lang="less" scoped>
.brevity-menu-item {
    width: 36px;
    color: @color;
    text-align: center;
    padding: 8px 6px;
    border-radius: 4px;
    margin: 0 auto 12px;
    cursor: pointer;
    &:hover {
        background-color: @primary-outline;
    }
    &.light {
        &.active {
            color: #fff;
        }
        &.dark-menu {
            color: #fff;
        }
    }
    &.active {
        background-color: @primary-active;
        // color: #fff;
    }
    &.light.active-light {
        background-color: #334154;
    }
    &.show-title {
        width: 60px;
    }
    .icon {
        display: block;
        font-size: 20px;
    }
    .title {
        font-size: 12px;
        padding-top: 6px;
        display: block;
        line-height: 18px;
    }
}
</style>
