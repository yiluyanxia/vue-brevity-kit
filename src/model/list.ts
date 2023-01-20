import type { CommonListResult } from './index'

export interface TableListItem {
    id: string
    name: string
    pid: number | null
    userName: string
    cpu?: number
    memory?: number
    description: string
    status?: number
    updatedAt?: Date | string | number
    editable?: boolean
    [propName: string]: any
}
export type TableListResult = CommonListResult<TableListItem>

export interface DataListItem {
    id: string
    title: string
    src: string
    description: string
    owner: string
    createdAt: Date | string | number
    percent: number
    status: string
}
export type DataListResult = CommonListResult<DataListItem>
