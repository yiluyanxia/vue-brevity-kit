<template>
    <a-layout-header
        :style="{
            height: '48px',
            lineHeight: '1',
            padding: 0,
            position: 'fixed',
            zIndex: 2,
            width: `calc(100% - ${layoutStore.marginLeft}px)`,
            right: 0,
            backgroundColor: `${settingStore.display === 'light' ? '#fff' : ''}`
        }">
        <a-row class="head-box" type="flex" align="middle" :wrap="false">
            <a-col class="head-left">
                <div class="logo-box" v-if="layoutStore.miniScreen">
                    <img class="logo" src="@/assets/images/logo.svg" />
                </div>
                <span class="collapsed-btn" @click="onCollapsed" v-show="!layoutStore.noColumn">
                    <menu-unfold-outlined v-if="layoutStore.collapsed" />
                    <menu-fold-outlined v-else />
                </span>
                <div class="breadcrumb-box" v-if="!layoutStore.miniScreen">
                    <a-breadcrumb>
                        <a-breadcrumb-item v-for="(item, index) in crumbs" :key="index">
                            <router-link v-if="item.path" :to="item.path">
                                {{ $t(item.title) }}
                            </router-link>
                            <span v-else>
                                {{ $t(item.title) }}
                            </span>
                        </a-breadcrumb-item>
                    </a-breadcrumb>
                </div>
            </a-col>
            <a-col flex="1"></a-col>
            <a-col class="head-right">
                <a-space size="small">
                    <div class="right-item" @click="handleLock">
                        <LockOutlined />
                    </div>

                    <I18nSwitcher />
                    <Setting />
                    <div class="user-info">
                        <a-dropdown size="large" :overlayStyle="{ minWidth: '130px' }">
                            <span class="user-name" @click.prevent>
                                <UserOutlined style="margin-right: 8px" />
                                {{ username }}
                            </span>
                            <template #overlay>
                                <a-menu @click="onClick">
                                    <a-menu-item key="updatePwd">
                                        <LockOutlined />
                                        <a href="javascript:;" style="padding-left: 6px">修改密码</a>
                                    </a-menu-item>
                                    <a-menu-item key="logout">
                                        <LogoutOutlined />
                                        <a href="javascript:;" style="padding-left: 6px">退出登录</a>
                                    </a-menu-item>
                                </a-menu>
                            </template>
                        </a-dropdown>
                    </div>
                </a-space>
            </a-col>
        </a-row>
    </a-layout-header>
</template>
<script setup lang="ts">
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, LockOutlined, LogoutOutlined } from '@ant-design/icons-vue'
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Setting from '../setting/Index.vue'
import I18nSwitcher from '../i18nSwitcher/Index.vue'
import { useSettingStore } from '@/stores/setting'
import { useLayoutStore } from '@/stores/layout'
import { removeCookie } from '@/utils/storage'
import { TOKEN_NAME } from '@/config/key'

const router = useRouter()
const route = useRoute()

const settingStore = useSettingStore()
const layoutStore = useLayoutStore()

const onCollapsed = () => {
    layoutStore.setCollapsed(!layoutStore.collapsed)
}

const username = ref<string>('Admin')
const visible = ref<boolean>(false)
const onClick = ({ key }) => {
    switch (key) {
        case 'updatePwd':
            visible.value = true
            break
        case 'logout':
            logout()
            break
    }
}
const logout = async () => {
    localStorage.clear()
    removeCookie(TOKEN_NAME)
    router.push('/login')

    // await http.post('logout', null, {
    //     loading: true,
    //     showError: true
    // })

}

const crumbs = ref<CrumbItem[]>([])

watch(route, (route) => {
    getCrumb(route)
})
interface CrumbItem {
    title: string
    path?: string
}
function getCrumb(route: any) {
    crumbs.value = []
    route.matched.map((i) => {
        if (i.meta.title) {
            if (i.path !== '/') {
                crumbs.value.push({
                    title: i.meta.title,
                    path: i.path
                })
            } else {
                crumbs.value.push({
                    title: i.meta.title
                })
            }
        }
    })
}
getCrumb(route)

const handleLock = () => {
    localStorage.setItem('LOCK_FULLPATH', route.fullPath)
    router.push({
        name: 'Lockscreen'
    })
}
</script>
<style lang="less" scoped>
.collapsed-btn {
    height: 48px;
    line-height: 48px;
    vertical-align: top;
    padding: 0 12px;
    margin-left: 12px;
    display: inline-block;
    cursor: pointer;
    transition: all 0.3s, padding 0s;
    font-size: 20px;
    &:hover {
        color: @primary;
    }
}

.head-box {
    min-width: 340px;
    // overflow-x: auto;
    height: 100%;
    box-shadow: 0 1px 4px rgba(147, 152, 155, 0.267);
    .head-right {
        line-height: 48px;
        .user-info {
            padding-left: 8px;
            // margin-right: 16px;
            .user-name {
                display: block;
                cursor: pointer;
                padding: 0 24px 0 0;
                &:hover {
                    color: @primary;
                }
            }
        }
        .right-item {
            padding: 0 8px;
            cursor: pointer;
            &:hover {
                color: @primary;
            }
        }
    }
}
.logo-box {
    display: inline-block;
    padding-top: 8px;
    padding-left: 24px;
    .logo {
        width: 32px;
        height: 32px;
        display: block;
    }
}

@media (min-width: 768px) {
    .breadcrumb-box {
        padding-left: 12px;
    }
    .head-box {
        .head-left {
            display: flex;
            align-items: center;
        }
    }
}
</style>
