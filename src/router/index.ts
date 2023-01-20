import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { routes } from './route'
import { getCookie } from '@/utils/storage'
import { TOKEN_NAME } from '@/config/key'
import i18next from 'i18next'
import Layout from '@/layouts/Layout.vue'
import { useLockStore } from '@/stores/lock'

const router = createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHashHistory(),
    routes: [
        {
            path: '/login',
            alias: '/login',
            name: 'Login',
            meta: {
                title: '登录'
            },
            component: () => import('@/views/auth/Login.vue')
        },
        {
            path: '/',
            name: 'Layout',
            component: Layout,
            children: routes,
            redirect: '/dashboard',
            meta: {
                auth: true
            }
        },
        {
            path: '/lockscreen',
            name: 'Lockscreen',
            meta: {
                title: 'menu.lockscreen',
                auth: true
            },
            component: () => import('@/views/auth/Lockscreen.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    const lockStore = useLockStore()
    // document.title = `${to.meta.title} | ${import.meta.env.VITE_APP_TITLE}`
    document.title = i18next.t(to.meta.title as string) + ` | ${import.meta.env.VITE_APP_TITLE}`
    // if (to.name !== 'Lockscreen' && lockStore.lock) {
    //     next({
    //         name: 'Lockscreen'
    //     })
    // } else {
    //     next()
    // }

    if (to.meta.auth) {
        if (getCookie(TOKEN_NAME)) {
            if (to.name !== 'Lockscreen' && lockStore.lock) {
                next({
                    name: 'Lockscreen'
                })
            } else {
                next()
            }
        } else {
            next({
                path: '/login'
            })
        }
    } else {
        next()
    }
})
export default router
