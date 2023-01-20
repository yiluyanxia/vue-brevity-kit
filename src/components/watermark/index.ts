import { createApp, type App } from 'vue'

let instance: App<Element>
let mountNode: HTMLDivElement
let showWaterMark: boolean = false

interface Options {
    width?: string
    height?: string
    textAlign?: string
    textBaseline?: string
    font?: string
    fillStyle?: string
    rotate?: number
    text?: string
}

const defaultOptions = {
    width: '240px',
    height: '120px',
    textAlign: 'center',
    textBaseline: 'middle',
    font: '16px serif',
    fillStyle: 'rgba(0, 0, 0, .2)',
    rotate: -15,
    text: 'brevity水印'
}

export default {
    service(options?: Options) {
        options = {
            ...defaultOptions,
            ...options
        }
        if (showWaterMark) {
            return
        }
        const canvas = document.createElement('canvas')
        canvas.setAttribute('width', options.width as string)
        canvas.setAttribute('height', options.height as string)

        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

        ctx.textAlign = options.textAlign as CanvasTextAlign
        ctx.textBaseline = options.textBaseline as CanvasTextBaseline
        ctx.font = options.font as string
        ctx.fillStyle = options.fillStyle as string

        ctx.rotate(((options.rotate as number) * Math.PI) / 180)
        ctx.fillText(
            options.text as string,
            parseFloat(options.width as string) / 2,
            parseFloat(options.height as string) / 2
        )
        const base64Url = canvas.toDataURL()
        const divStyle = `
        position:fixed;
        top:0;
        right:0;
        bottom:0;
        left:0;
        width:100%;
        height:100%;
        z-index: 99999;
        pointer-events:none;
        background-repeat:repeat;
        background-image:url('${base64Url}')`

        mountNode = document.createElement('div')
        mountNode.setAttribute('style', divStyle)
        instance = createApp({})

        document.body.appendChild(mountNode)
        instance.mount(mountNode)
        showWaterMark = true
    },
    close() {
        if (showWaterMark) {
            showWaterMark = false
            instance.unmount()
            mountNode && document.body.removeChild(mountNode)
        }
    }
}
