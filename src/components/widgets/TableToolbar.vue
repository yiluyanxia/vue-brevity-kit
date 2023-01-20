<template>
    <a-row type="flex" class="table-toolbar">
        <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
            <div class="table-toolbar-title">
                {{ title ? $t(title) : $t($route.meta.title as string) }}
            </div>
        </a-col>
        <a-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16" class="table-toolbar-right">
            <a-button type="primary" @click="emitCreate" v-if="onCreate">
                <template #icon>
                    <PlusOutlined />
                </template>
                新建
            </a-button>
            <slot></slot>
            <a-button @click="emitEnable" v-if="onEnable" :disabled="disabledEnable">
                <template #icon>
                    <CheckCircleOutlined />
                </template>
                启用
            </a-button>
            <a-button @click="emitDisable" v-if="onDisable" danger :disabled="disabledDisable">
                <template #icon>
                    <StopOutlined />
                </template>
                禁用
            </a-button>
            <a-button @click="emitDelete" v-if="onDelete" type="primary" danger :disabled="disabledDelete">
                <template #icon>
                    <DeleteOutlined />
                </template>
                删除
            </a-button>
            <slot name="extra"></slot>
            <a-tooltip>
                <template #title>刷新</template>
                <a-button type="text" @click="emitReload" v-if="onReload" class="reload-btn">
                    <template #icon>
                        <ReloadOutlined />
                    </template>
                </a-button>
            </a-tooltip>
        </a-col>
    </a-row>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { PlusOutlined, DeleteOutlined, CheckCircleOutlined, StopOutlined, ReloadOutlined } from '@ant-design/icons-vue'

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    onCreate: {
        type: Function
    },
    onEnable: {
        type: Function
    },
    enable: {
        type: Boolean,
        default: undefined
    },
    onDisable: {
        type: Function
    },
    disable: {
        type: Boolean,
        default: undefined
    },
    onDelete: {
        type: Function
    },
    delete: {
        type: Boolean,
        default: undefined
    },
    onReload: {
        type: Function
    },
    single: {
        type: Boolean,
        default: false
    },
    multiple: {
        type: Boolean,
        default: false
    }
})

const disabledEnable = computed(() => {
    if (props.enable === undefined) {
        return props.multiple
    } else {
        return props.enable
    }
})

const disabledDisable = computed(() => {
    if (props.disable === undefined) {
        return props.multiple
    } else {
        return props.disable
    }
})

const disabledDelete = computed(() => {
    if (props.delete === undefined) {
        return props.multiple
    } else {
        return props.delete
    }
})
const emit = defineEmits(['create', 'enable', 'disable', 'delete', 'reload'])
const emitCreate = () => {
    emit('create')
}
const emitEnable = () => {
    emit('enable')
}
const emitDisable = () => {
    emit('disable')
}
const emitDelete = () => {
    emit('delete')
}
const emitReload = () => {
    emit('reload')
}
</script>

<style lang="less" scoped>
.table-toolbar {
    padding-top: 16px;
    .table-toolbar-title {
        // color: rgba(0, 0, 0, 0.85);
        font-weight: 500;
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        margin-bottom: 16px;
    }
    .table-toolbar-right {
        text-align: right;
        .reload-btn {
            // color: rgba(0, 0, 0, 0.75);
            margin-left: 10px;
            &:hover {
                color: @primary;
            }
        }
    }
}
</style>
<style lang="less">
.table-toolbar-right {
    .ant-btn + .ant-btn {
        margin-left: 10px;
        margin-bottom: 16px;
    }
}
</style>
