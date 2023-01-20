const CACHE_DAY = 365

export const getCookie = (cname: string) => {
    const name = cname + '='
    const ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) == ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ''
}
// 设置 cookie
export const setCookie = (cname: string, cvalue: any, expire: number = CACHE_DAY) => {
    const d = new Date()
    d.setTime(d.getTime() + expire * 24 * 60 * 60 * 1000)
    const expireUTC = d.toUTCString()
    document.cookie = `${cname}=${cvalue};expires=${expireUTC};path=/`
}

export const removeCookie = (cname: string) => {
    setCookie(cname, '', 0)
}
