import type { App } from 'vue'
import components from '@/components/index'

export function setupBrevity(app: App<Element>) {
    app.use(components)
}
