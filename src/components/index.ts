import type { App } from 'vue'
import Icon from './icon/index'
import Button from './button/Button.vue'

export default function install(app: App<Element>) {
    app.component('BrIcon', Icon)
    app.component('BrButton', Button)
}
