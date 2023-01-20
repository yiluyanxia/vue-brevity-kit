<template>
    <a-card class="brevity-search-box mb16" :bordered="false">
        <a-form ref="formRef" :model="model" autocomplete="off" v-bind="formItemLayout" @finish="emitOnFinish">
            <a-row type="flex" :gutter="24">
                <template v-for="(schema, index) in schemas" :key="schema.key">
                    <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" :xxl="6" v-if="index < 3 || !collapse">
                        <a-form-item :name="schema.key">
                            <template #label v-if="type !== 'simple'">
                                {{ type === 'simple' ? '' : schema.label }}
                                <a-tooltip>
                                    <template #title>{{ schema.tip }}</template>
                                    <InfoCircleOutlined style="margin-left: 4px" v-if="schema.tip" />
                                </a-tooltip>
                            </template>
                            <a-select
                                v-if="schema.options && schema.options.length > 0"
                                v-model:value="model[schema.key]"
                                allowClear
                                placeholder="请选择">
                                <a-select-option v-for="item in schema.options" :key="item.id" :value="item.value">
                                    {{ item.name }}
                                </a-select-option>
                            </a-select>
                            <a-date-picker
                                v-else-if="schema.date"
                                show-time
                                placeholder="请选择"
                                @change="(date: Dayjs | string, dateString: string) => changeDate(date, dateString, schema)"
                                style="width: 100%" />
                            <a-range-picker
                                show-time
                                v-else-if="schema.range"
                                @change="(dates: [Dayjs, Dayjs], dateStrings: [string, string]) => changeRange(dates, dateStrings, schema)"
                                style="width: 100%" />
                            <a-input v-else v-model:value="model[schema.key]" allowClear placeholder="请输入" />
                        </a-form-item>
                    </a-col>
                </template>
                <a-col
                    :xs="24"
                    :sm="24"
                    :md="12"
                    :lg="12"
                    :xl="8"
                    :xxl="6"
                    class="layout-search-btn"
                    v-if="schemas.length > 3">
                    <a-form-item :wrapper-col="{ span: 24 }">
                        <a-button type="primary" html-type="submit">查询</a-button>
                        <a-button type="link" @click="collapse = !collapse">
                            {{ collapse ? '展开' : '收起' }}
                            <down-outlined v-if="collapse" />
                            <up-outlined v-else />
                        </a-button>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="1" :lg="1" :xl="1" v-else>
                    <a-form-item style="text-align: right" :wrapper-col="{ span: 24 }">
                        <a-button type="primary" html-type="submit">查询</a-button>
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
    </a-card>
</template>
<script setup lang="ts">
import { ref, reactive, type PropType, computed, watchEffect } from 'vue'
import { DownOutlined, UpOutlined, InfoCircleOutlined } from '@ant-design/icons-vue'
import type { FormInstance } from 'ant-design-vue'
import dayjs, { Dayjs } from 'dayjs'
import type { SearchFormSchema } from '@/model/index'

const props = defineProps({
    searchState: { type: Object, required: true },
    schemas: { type: Array as PropType<SearchFormSchema[]>, required: true },
    type: String
})

const formRef = ref<FormInstance>()
const schemas = ref(props.schemas)
const model = reactive(props.searchState)
const collapse = ref(true)

const formItemLayout = computed(() => {
    return props.type === 'simple'
        ? {}
        : {
              labelCol: { xs: 4, sm: 6, md: 8 },
              wrapperCol: { xs: 20, sm: 18, md: 16 }
          }
})
watchEffect(() => {
    schemas.value = props.schemas
    getSchemas()
})

const changeDate = (date: Dayjs | string, _dateString: string, schema: SearchFormSchema) => {
    console.log('date')
    console.log(date)
    if (date) {
        model[schema.key] = dayjs(date).format()
    } else {
        model[schema.key] = ''
    }
}
const changeRange = (dates: [Dayjs, Dayjs], _dateStrings: [string, string], schema: SearchFormSchema) => {
    if (dates) {
        model[schema.key] = dayjs(dates[0]).format()
        schema.key1 && (model[schema.key1] = dayjs(dates[1]).format())
    } else {
        model[schema.key] = ''
        schema.key1 && (model[schema.key1] = '')
    }
}

const resetForm = () => {
    formRef.value?.resetFields()
}

function getSchemas() {
    schemas.value.map((i) => {
        if (i.options && i.options.length > 0 && (i.optionName || i.optionValue)) {
            i.options.map((o) => {
                o.value = i.optionValue && o[i.optionValue]
                o.name = i.optionName && o[i.optionName]
            })
        }
    })
}

const emit = defineEmits(['onFinish'])
const emitOnFinish = () => {
    emit('onFinish')
}
defineExpose({
    resetForm
})
</script>
<style lang="less" scoped>
.layout-search-btn {
    margin-left: auto;
    text-align: right;
}
</style>
<style lang="less">
.brevity-search-box {
    .ant-card-body {
        padding-bottom: 0;
    }
}
</style>
