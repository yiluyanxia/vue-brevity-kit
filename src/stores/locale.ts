import { ref } from 'vue'
import { defineStore } from 'pinia'
import { LOCALE_KEY } from '@/config/key'

type LocaleKey = 'zh-CN' | 'en-US'

export const useLocaleStore = defineStore('locale', () => {
    const locale = ref<LocaleKey>()

    locale.value = (localStorage.getItem(LOCALE_KEY) as LocaleKey) || 'zh-CN'

    function setLocale(value: LocaleKey) {
        locale.value = value
        localStorage.setItem(LOCALE_KEY, value)
    }

    return { locale, setLocale }
})
