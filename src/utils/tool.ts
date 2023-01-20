import * as enums from '@/constants/enums'

// 判断类型
export const getType = (v: any) => Object.prototype.toString.call(v)

export const isObject = (v: any) => getType(v) === '[object Object]'

export const isArray = (v: any) => getType(v) === '[object Array]'

export const isString = (v: any) => getType(v) === '[object String]'

export const getBoolean = (v: any) => {
    if (v && v === 'true') {
        return true
    } else if (v && v === 'false') {
        return false
    } else {
        return v ? true : false
    }
}
// 获取常量
export const getConstant = (type: string, id: string | number | boolean, name = 'name') => {
    const res = enums[type] || {}
    if (id === true) {
        return res
    }
    if (id !== false) {
        return res[id] && res[id][name]
    }
}

// 将 key-value 格式的数据转化为 select 能够使用的格式
export const formatArray = (val: string, filter?: (arg0: any) => any) => {
    const res: any[] = []
    const data = isObject(val) ? val : getConstant(val, true)
    Object.keys(data).forEach((key) => {
        let name = data[key]['name']
        name = name || data[key]['name']
        const temp = { id: key, ...data[key] }
        let numKey: number | string
        if (/^[0-9]$/.test(key)) {
            numKey = Number(key)
        } else {
            numKey = key
        }
        filter && filter(temp) && res.push({ id: key, label: name, value: numKey, name: name })
        !filter && res.push({ id: key, label: name, value: numKey, name: name })
    })
    return res
}

// 获取指定范围内的随机数
export const getRandomInt = (max: number, min: number = 0) => {
    // return Math.floor(Math.random() * max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// 格式化大小
export const formatSize = (size: number) => {
    if (size < 1024) {
        //1KB
        return size + 'B'
    } else if (size < 1 * 1024 * 1024) {
        // 1M
        return (size / 1024).toFixed(2) + 'KB'
    } else if (size < 1024 * 1024 * 1024) {
        // 1G
        return (size / (1024 * 1024)).toFixed(2) + 'M'
    } else if (size < 1024 * 1024 * 1024 * 1024) {
        return (size / (1024 * 1024 * 1024)).toFixed(2) + 'G'
    } else {
        return (size / (1024 * 1024 * 1024 * 1024)).toFixed(2) + 'T'
    }
}

// 清空 reactive 中的内容
export const resetReactive = (formState: any, initialState: any) => {
    // Object.assign(formState, initialState)
    for (const [key, value] of Object.entries(initialState)) {
        formState[key] = value
    }
}

// 赋值 reactive 中的内容
export const setReactive = (formState: any, initialState: any, values: any) => {
    for (const key of Object.keys(initialState)) {
        formState[key] = values[key]
    }
}

// 获取不为空的值，多用于 searchState
// export const getSearchState = (searchState: any) => {
//     const target = {}
//     for (const key of Object.keys(searchState)) {
//         if (searchState[key] && searchState[key].trim()) {
//             target[key] = searchState[key]
//         }
//     }
//     return target
// }

export const getNonEmpty = (val: any) => {
    const target = {}
    for (const key of Object.keys(val)) {
        if (val[key] || val[key] === false) {
            if (isString(val[key])) {
                if (val[key].trim()) {
                    target[key] = val[key]
                }
            } else {
                target[key] = val[key]
            }
        }
    }
    return target
}
// 对象或者数组深拷贝
export const deepClone = (obj: any) => {
    if (!isObject(obj) && !isArray(obj)) {
        return obj
    }
    const ret = isArray(obj) ? [] : {}
    for (const name in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, name)) {
            if (isObject(obj[name]) || isArray(obj[name])) {
                ret[name] = deepClone(obj[name])
            } else {
                ret[name] = obj[name]
            }
        }
    }
    return ret
}

// 获取颜色
export const getRGB = (hexColor: string) => {
    const r16 = hexColor?.substring(1, 3)
    const g16 = hexColor?.substring(3, 5)
    const b16 = hexColor?.substring(5, 7)
    const r = parseInt(`0x${r16}`)
    const g = parseInt(`0x${g16}`)
    const b = parseInt(`0x${b16}`)
    return `${r},${g},${b}`
}
