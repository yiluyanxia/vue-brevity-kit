import { ref, reactive, watch, getCurrentInstance } from 'vue'
import { resetReactive, setReactive } from '@/utils/tool.js'
import { http } from '@/api/index.js'
import type { FormInstance } from 'ant-design-vue'

interface Options {
    props?: any
    initialState?: any
    watchFn?: Function
}

export default function (options: Options) {
    const visible = ref(false)
    const formRef = ref<FormInstance>()
    const formState = reactive({ ...options.initialState })

    watch(
        () => options.props.visible,
        (val) => {
            visible.value = val
            if (val && options.props.uniqueKey) {
                setReactive(formState, options.initialState, options.props.dataInfo)
                options.watchFn && options.watchFn()
            }
        }
    )

    const onOk = (apiUrl) => {
        formRef.value
            ?.validate()
            .then(async () => {
                await http.post(apiUrl, formState, {
                    loading: true,
                    showSuccess: true,
                    showError: true
                })

                emitClose()
            })
            .catch((error: any) => {
                console.log('error', error)
            })
    }

    const instance = getCurrentInstance()
    const emit = instance?.emit
    const emitClose = () => {
        formRef.value?.resetFields()
        resetReactive(formState, options.initialState)
        emit && emit('close')
    }

    return {
        emitClose,
        formRef,
        formState,
        onOk,
        visible
    }
}
