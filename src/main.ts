import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import i18next from 'i18next'
// import I18NextVue from 'i18next-vue'

import App from './App.vue'
import router from './router'

import '@/assets/styles/reset.css'
import '@/assets/styles/styles.less'
import '@/assets/iconfont/iconfont.css'
// import '@/assets/styles/theme.less'

import 'ant-design-vue/dist/antd.less'

import { setupAntd } from '@/core/antd'
import { setupBrevity } from '@/core/brevity'
import i18n from '@/locales/i18n'

const app = createApp(App)
// createApp(App).use(I18NextVue, { i18next }).mount('#app');

// app.use(I18NextVue, { i18next })
setupAntd(app)
setupBrevity(app)
i18n(app)

app.use(createPinia())
app.use(router)
app.mount('#app')
