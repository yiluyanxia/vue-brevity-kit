<template>
    <div class="i18n-switcher-btn" @click="handleTranslation">
        <TranslationOutlined />
    </div>
</template>
<script setup lang="ts">
import { TranslationOutlined } from '@ant-design/icons-vue'
import { useTranslation } from 'i18next-vue'
import { useLocaleStore } from '@/stores/locale'

const { i18next } = useTranslation()

const localeStore = useLocaleStore()

const handleTranslation = () => {
    const language = i18next.language === 'zh-CN' ? 'en-US' : 'zh-CN'
    i18next.changeLanguage(language)
    localeStore.setLocale(language)
}
</script>
<style lang="less" scoped>
.i18n-switcher-btn {
    padding: 0 8px;
    cursor: pointer;
    &:hover {
        color: @primary;
    }
}
</style>
