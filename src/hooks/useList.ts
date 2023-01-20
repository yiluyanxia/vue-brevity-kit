import { useRoute, useRouter, type LocationQueryRaw } from 'vue-router'
import { ref, computed, createVNode } from 'vue'
import { Modal } from 'ant-design-vue'
import type { TableProps } from 'ant-design-vue'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'
import { http } from '@/api/index'
import { isObject, isString, getNonEmpty } from '@/utils/tool'
import { useTranslation } from 'i18next-vue'
import type { CustomOptions } from '@/model/index'

interface Options {
    dataInfo?: any
    dataSource?: any
    searchState?: any
    getList?: Function
}
export default function (options?: Options) {
    const router = useRouter()

    const { t } = useTranslation()

    const apiUrlCache = ref<string>('')
    const loading = ref<boolean>(false)
    const current = ref<number>(1)
    const pageSize = ref<number>(15)
    const total = ref<number>(0)

    const disabledSingle = ref<boolean>(true)
    const disabledMultiple = ref<boolean>(true)
    const selectedRowKeys = ref<string[]>([])
    const selectedRows = ref<any[]>([])

    const searchFormRef = ref()

    const pagination = computed(() => ({
        total: total.value,
        current: current.value,
        pageSize: pageSize.value,
        // showTotal: (total: number) => `共 ${total} 条`,
        showTotal: (total: number) => t('page.total') + ` ${total} ` + t('page.unit'),
        // pageSizeOptions: ['10', '15', '20', '30', '40', '50'],
        showSizeChanger: true,
        showQuickJumper: true,
        hideOnSinglePage: true,
        onChange: (page: number, size: number) => {
            current.value = page
            pageSize.value = size
            onFetchData()
        }
    }))
    // 表格分页操作
    const onTableChange: TableProps['onChange'] = (pagination) => {
        current.value = pagination.current || current.value
        pageSize.value = pagination.pageSize || pageSize.value
        onFetchData()
    }
    // 表格可选择
    const onSelectChange = (keys: string[], rows: any[]) => {
        if (keys.length === 1) {
            disabledSingle.value = false
        } else {
            disabledSingle.value = true
        }
        if (keys.length >= 1) {
            disabledMultiple.value = false
        } else {
            disabledMultiple.value = true
        }
        selectedRowKeys.value = keys
        selectedRows.value = rows
    }
    const onReload = () => {
        current.value = 1
        onReset()
        onFetchData()
    }
    const onReset = () => {
        searchFormRef.value?.resetForm()
    }
    const onRouter = (name: any, params?: any, query?: LocationQueryRaw | undefined) => {
        let routeParams: any = null

        if (isString(params)) {
            routeParams = {
                id: params
            }
        }
        if (isObject(params)) {
            routeParams = {
                ...params
            }
        }
        router.push({
            name: name,
            params: routeParams,
            query: { ...query }
        })
    }

    const onEnable = (apiUrl: string, params: any) => {
        Modal.confirm({
            title: '提示',
            icon: createVNode(ExclamationCircleOutlined),
            content: '确认启用所选择的数据?',
            onOk() {
                http.post(apiUrl, params, { loading: true, showSuccess: true, showError: true }).then(() => {
                    onFetchData()
                })
            }
        })
    }
    const onDisable = (apiUrl: string, params: any) => {
        Modal.confirm({
            title: '提示',
            icon: createVNode(ExclamationCircleOutlined),
            content: '确认禁用所选择的数据?',
            onOk() {
                http.post(apiUrl, params, { loading: true, showSuccess: true, showError: true }).then(() => {
                    onFetchData()
                })
            }
        })
    }
    // 删除
    async function onDelete(apiUrl: string, params: any, type?: string) {
        let httpParams: object = {}
        if (isString(params)) {
            httpParams = {
                id: params
            }
        }
        if (isObject(params)) {
            httpParams = {
                ...params
            }
        }
        if (type === 'direct') {
            submitDelete(apiUrl, httpParams)
        } else {
            Modal.confirm({
                title: '确定删除所选择的数据?',
                icon: createVNode(ExclamationCircleOutlined),
                onOk() {
                    submitDelete(apiUrl, httpParams)
                }
            })
        }
    }
    async function submitDelete(apiUrl: string, httpParams: object) {
        await http.post(apiUrl, httpParams, { loading: true, showSuccess: true, showError: true })

        if (current.value > 1) {
            current.value = (total.value - 1) / pageSize.value <= current.value - 1 ? current.value - 1 : current.value
        }
        onFetchData()
    }
    // 获取列表
    async function fetchData<T>(apiUrl?: string, customOptions?: CustomOptions) {
        if (apiUrl) {
            apiUrlCache.value = apiUrl
        }
        const currentApiUrl = apiUrl || apiUrlCache.value

        loading.value = true
        let params = {
            pageNo: current.value - 1,
            pageSize: pageSize.value
        }
        if (options && options.searchState) {
            params = {
                ...params,
                ...getNonEmpty(options.searchState)
            }
        }
        const httpCustomOptions = {
            showError: true,
            ...customOptions
        }
        return http.post<T>(currentApiUrl, params, httpCustomOptions).finally(() => {
            loading.value = false
            selectedRowKeys.value = []
            selectedRows.value = []
            disabledMultiple.value = true
            disabledSingle.value = true
        })
    }
    function onFetchData() {
        options?.getList && options.getList()
    }

    // 弹窗
    const visible = ref(false)
    const modalTitle = ref('')

    const onCreate = (title: string) => {
        modalTitle.value = title
        visible.value = true
    }
    const onUpdate = (title: string, record: any) => {
        options && (options.dataInfo.value = record)
        modalTitle.value = title
        visible.value = true
    }
    const closeModal = () => {
        visible.value = false
        options && (options.dataInfo.value = undefined)
        onFetchData()
    }
    return {
        closeModal,
        disabledMultiple,
        disabledSingle,
        fetchData,
        onEnable,
        onDisable,
        onCreate,
        onDelete,
        onUpdate,
        onReload,
        onReset,
        onRouter,
        onTableChange,
        loading,
        modalTitle,
        onSelectChange,
        pagination,
        pageSize,
        searchFormRef,
        selectedRowKeys,
        total,
        visible
    }
}
