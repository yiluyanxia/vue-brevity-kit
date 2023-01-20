<template>
    <a-config-provider :locale="locale">
        <RouterView />
    </a-config-provider>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterView } from 'vue-router'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import enUS from 'ant-design-vue/es/locale/en_US'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import { useLocaleStore } from '@/stores/locale'

const localeStore = useLocaleStore()
const locale = ref()

watch(
    () => localeStore.locale,
    (val) => {
        val && getLocale(val)
    }
)
function getLocale(val: string) {
    if (val === 'zh-CN') {
        locale.value = zhCN
        dayjs.locale(zhCN.locale)
    } else {
        locale.value = enUS
        dayjs.locale(enUS.locale)
    }
}
localeStore.locale && getLocale(localeStore.locale)
</script>
