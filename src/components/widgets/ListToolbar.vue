<template>
    <a-row type="flex" class="list-toolbar">
        <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
            <div class="list-toolbar-title">
                {{ title ? title : $t($route.meta.title as string) }}
            </div>
        </a-col>
        <a-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16" class="list-toolbar-right">
            <a-radio-group
                class="list-toolbar-radio"
                v-if="options"
                v-model:value="model.option"
                option-type="button"
                :options="options"
                @change="emitOnFinish" />
            <a-input-search
                class="list-toolbar-search"
                v-model:value="model.query"
                placeholder="请输入"
                enter-button
                @search="emitOnFinish" />
        </a-col>
    </a-row>
</template>
<script setup lang="ts">
import { reactive, type PropType } from 'vue'
import type { ListToolOptions, ListToolModel } from '@/model/index'

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    options: {
        type: Array as PropType<ListToolOptions[]>,
        default: null
    }
})

const model: ListToolModel = reactive({
    option: props.options[0].value,
    query: ''
})

const emit = defineEmits(['onFinish'])
const emitOnFinish = () => {
    emit('onFinish', model)
}
</script>

<style lang="less" scoped>
.list-toolbar {
    padding-top: 16px;
    .list-toolbar-title {
        // color: rgba(0, 0, 0, 0.85);
        font-weight: 500;
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        margin-bottom: 16px;
    }
    .list-toolbar-right {
        text-align: right;
        .list-toolbar-radio {
            margin-bottom: 16px;
        }
        .list-toolbar-search {
            width: 100%;
            margin-bottom: 16px;
        }
    }
}
@media (min-width: 768px) {
    .list-toolbar {
        .list-toolbar-right {
            .list-toolbar-search {
                width: 240px;
                margin-left: 16px;
            }
        }
    }
}
</style>
