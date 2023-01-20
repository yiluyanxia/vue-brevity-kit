import { http } from './index'
import type { TableListResult } from '@/model/index'

export const getList = (apiUrl: string) => {
    return http.post<TableListResult>(apiUrl, null, { showError: true })
}
