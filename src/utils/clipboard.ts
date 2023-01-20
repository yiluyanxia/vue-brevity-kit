export const clipboard = (text: string) => {
    if (navigator.clipboard) {
        return navigator.clipboard.writeText(text)
    } else {
        const textarea = document.createElement('textarea')
        document.body.appendChild(textarea)

        textarea.style.position = 'fixed'
        textarea.style.top = '10px'
        textarea.value = text
        textarea.select()
        const bool = document.execCommand('copy', true)
        document.body.removeChild(textarea)
        const copyPromise = new Promise((resolve, reject) => {
            if (bool) {
                resolve(bool)
            } else {
                reject(bool)
            }
        })
        return copyPromise
    }
}
