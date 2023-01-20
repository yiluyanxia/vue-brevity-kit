import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import zhCN from './lang/zh-CN/index'
import enUS from './lang/en-US/index'
import { LOCALE_KEY } from '@/config/key'

const language = localStorage.getItem(LOCALE_KEY) || 'zh-CN'

i18next.init({
    debug: true,
    fallbackLng: language,
    resources: {
        'zh-CN': {
            translation: {
                ...zhCN
            }
        },
        'en-US': {
            translation: {
                ...enUS
            }
        }
    }
})

export default function (app: any) {
    app.use(I18NextVue, { i18next })
    return app
}
