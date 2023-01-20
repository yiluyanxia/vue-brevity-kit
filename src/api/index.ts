import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'
import router from '@/router/index'
import { message } from 'ant-design-vue'
import apiUrl from '@/api/apiUrl'
import { isArray, isObject } from '@/utils/tool'
import { getCookie, removeCookie } from '@/utils/storage'
import Spinning from '@/components/spinning'
import { TOKEN_NAME, CSRF } from '@/config/key'
import type { CustomOptions } from '@/model/index'

interface CustomAxiosRequestConfig extends AxiosRequestConfig, CustomOptions {}

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_REST_HOST,
    timeout: 1000 * 60
})
instance.interceptors.request.use(
    (config: CustomAxiosRequestConfig) => {
        const token = getCookie(TOKEN_NAME)
        if (config.headers) {
            config.headers['x-authorization'] = token
            if (CSRF.enable) {
                const cookie = getCookie(CSRF.cookieName)
                config.headers[CSRF.headerName] = cookie
            }
        }

        if (config.loading) {
            Spinning.service()
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (response) => {
        const config: CustomAxiosRequestConfig = response.config
        const data = response.data
        if (config?.loading) {
            Spinning.close()
        }
        if (data.error === 0) {
            if (config.showSuccess) {
                message.success(data.msg)
            }
            return data.result ? Promise.resolve(data.result) : Promise.resolve(data)
        } else if (data.error === 2) {
            removeCookie(TOKEN_NAME)
            router.push('/login')
            return Promise.reject(data)
        } else {
            if (config.showError) {
                message.error(data.msg)
            }
            return Promise.reject(data)
        }
    },
    (error) => {
        Spinning.close()
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    error.message = '错误请求'
                    break
                case 401:
                    error.message = '未授权，请重新登录'
                    break
                case 403:
                    error.message = '拒绝访问'
                    break
                case 404:
                    error.message = '请求错误,未找到该资源'
                    break
                case 405:
                    error.message = '请求方法未允许'
                    break
                case 408:
                    error.message = '请求超时'
                    break
                case 500:
                    error.message = '服务器端出错'
                    break
                case 501:
                    error.message = '网络未实现'
                    break
                case 502:
                    error.message = '网络错误'
                    break
                case 503:
                    error.message = '服务不可用'
                    break
                case 504:
                    error.message = '网络超时'
                    break
                case 505:
                    error.message = 'HTTP版本不支持该请求'
                    break
                default:
                    error.message = `连接错误： CODE：${error.response.status}`
            }
        } else {
            error = JSON.parse(JSON.stringify(error))
            error.message = '连接服务器失败：' + error.message
        }
        message.destroy()
        message.error(error.message)

        return Promise.reject(error)
    }
)

export const http = {
    get<T = any>(url: string, params: any, options: CustomOptions): Promise<T> {
        const config = {
            headers: { 'Content-type': 'application/json' },
            ...options,
            params: params
        }
        return instance.get(apiUrl[url], config)
    },

    // post<T = any>(url: string, params: any, options: CustomOptions): Promise<AxiosResponse<CustomResponse<T>>> {
    post<T = any>(url: string, params: any, options: CustomOptions, configs?: any): Promise<T> {
        const config = {
            headers: { 'Content-type': 'application/json' },
            ...options,
            ...configs
        }
        return instance.post(apiUrl[url], params, config)
    },

    formPost<T = any>(url: string, params: any, options: CustomOptions): Promise<T> {
        const config = {
            headers: { 'Content-type': 'multipart/form-data' },
            ...options
        }

        const form = new FormData()

        Object.keys(params).forEach((key) => {
            if (isArray(params[key])) {
                params[key].forEach((item) => {
                    form.append(key + '[]', isObject(item) ? JSON.stringify(item) : item)
                })
            } else if (isObject(params[key])) {
                form.append(key, JSON.stringify(params[key]))
            } else {
                form.append(key, params[key])
            }
        })
        return instance.post(apiUrl[url], form, config)
    },

    delete<T = any>(url: string, params: any, options: CustomOptions): Promise<T> {
        const config = {
            headers: { 'Content-type': 'multipart/form-data' },
            ...options,
            params: params
        }
        return instance.delete(apiUrl[url], config)
    }
}
