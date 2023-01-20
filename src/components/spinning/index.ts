import { createApp, type App } from 'vue'
import spinning from './Spinning.vue'

let instance: App<Element>
let mountNode: HTMLDivElement
let isSpinning: boolean = false
let count = 0

interface Options {
    size?: string
    tip?: string
    background?: string
}
export default {
    service(options: Options = {}) {
        if (count === 0) {
            mountNode = document.createElement('div')
            instance = createApp(spinning, {
                spinning: true,
                tip: options.tip,
                size: options.size,
                background: options.background
            })

            document.body.appendChild(mountNode)
            instance.mount(mountNode)
            isSpinning = true
        }
        count++
    },
    close() {
        setTimeout(() => {
            if (isSpinning) {
                count--
                if (count <= 0) {
                    count = 0
                    isSpinning = false
                    instance.unmount()
                    mountNode && document.body.removeChild(mountNode)
                }
            }
        }, 400)
    }
}
