export interface DisplayItem {
    key: string
    name: string
    color: string
}
export interface ThemeItem {
    key: string
    name: string
    primary: string
    success: string
    warning: string
    error: string
    isCustom?: boolean
}
