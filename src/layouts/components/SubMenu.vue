<template>
    <a-sub-menu :key="subMenus.name">
        <template #icon>
            <Icon v-if="subMenus.meta.icon" :icon="subMenus.meta.icon" />
        </template>
        <template #title>
            {{ $t(subMenus.meta.title) }}
        </template>
        <template v-for="(item, index) in subMenus.children">
            <template v-if="!item.meta.hide && item.children && item.children.length > 0">
                <SubMenu :subMenus="item" :key="index" />
            </template>
            <template v-else>
                <a-menu-item :key="item.name" v-if="!item.meta.hide">
                    <template #icon>
                        <Icon v-if="item.meta.icon" :icon="item.meta.icon" />
                    </template>
                    <router-link :to="{ name: item.name }">{{ $t(item.meta.title) }}</router-link>
                </a-menu-item>
            </template>
        </template>
    </a-sub-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '@/components/icon/index'

export default defineComponent({
    name: 'SubMenu',
    props: {
        subMenus: {
            type: Object,
            default: null
        }
    },
    components: {
        Icon
    }
})
</script>
