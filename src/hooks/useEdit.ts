import { ref } from 'vue'
import { http } from '@/api/index.js'
import { useRouter, useRoute } from 'vue-router'
import { setReactive } from '@/utils/tool'
import type { FormInstance } from 'ant-design-vue'

interface Options {
    formState: any
    initialState?: any
}
export default function (options: Options) {
    const router = useRouter()
    const route = useRoute()

    const formRef = ref<FormInstance>()

    const goBack = () => {
        router.go(-1)
    }
    const id = route.params.id || ''
    const query = route.query.query

    const onFinish = async (apiUrl: string) => {
        await http.post(apiUrl, options.formState, {
            loading: true,
            showSuccess: true,
            showError: true
        })
        goBack()
    }
    const getQuery = (fn?: Function) => {
        if (!id) {
            return
        }
        const target = JSON.parse(decodeURIComponent(query as string))
        setReactive(options.formState, options.initialState, target)
        fn && fn(target)
    }
    const getInfo = async (apiUrl: string, fn?: Function) => {
        if (!id) {
            return
        }
        const res = await http.post(
            apiUrl,
            { id: id },
            {
                loading: true,
                showError: true
            }
        )
        // Object.assign(options.formState, res)
        setReactive(options.formState, options.initialState, res)

        fn && fn(res)
    }
    return {
        formRef,
        getInfo,
        getQuery,
        goBack,
        http,
        onFinish,
        id,
        route,
        router
    }
}
