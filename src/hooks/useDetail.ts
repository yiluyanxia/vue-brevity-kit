import { ref } from 'vue'
import { http } from '@/api/index.js'
import { useRouter, useRoute } from 'vue-router'

export default function () {
    const router = useRouter()
    const route = useRoute()

    const dataInfo = ref({})

    const goBack = () => {
        router.go(-1)
    }
    const reload = () => {
        router.go(0)
    }
    const id = route.params.id || ''

    const getInfo = async (apiUrl: string) => {
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
        dataInfo.value = res
    }
    return {
        dataInfo,
        getInfo,
        goBack,
        http,
        id,
        reload,
        route,
        router
    }
}
