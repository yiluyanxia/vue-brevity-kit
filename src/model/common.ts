export interface CustomOptions {
    loading?: boolean
    showSuccess?: boolean
    showError?: boolean
    custom?: boolean
}

export interface CommonListParams {
    pageNo: number
    pageSize: number
}

export interface CommonListResult<T> {
    content: T[]
    totalElements: number
}

export interface SearchFormOption {
    id: string
    value: string | number
    name: string
}

export interface SearchFormSchema {
    key: string
    key1?: string
    label: string
    date?: boolean
    range?: boolean
    options?: SearchFormOption[]
    optionName?: string
    optionValue?: string
    tip?: string
}

export interface ListToolModel {
    option?: string | number | undefined
    query?: string | number | undefined
}

export interface ListToolOptions {
    value: string | number
    label: string | number
}
