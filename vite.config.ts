import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        // host: '0.0.0.0',
        port: 5173,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:7001/',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    // hack: `true; true; @import (reference) "${fileURLToPath('src/assets/style/theme.less')}";`,
                    // hack: `true; true; @import (reference) "${fileURLToPath(
                    // new URL('./src', '/assets/style/theme.less')
                    // )}";`,
                    hack: `true; @import (reference) "${path.resolve('src/assets/styles/theme.less')}";`
                    // dark: true,
                    // 'primary-color': '#25b864',
                    // 'btn-border-radius-base': '4px',
                    // 'layout-header-background': '#101727',
                    // 'menu-dark-inline-submenu-bg': '#1d2939'
                },
                javascriptEnabled: true
            }
        }
    }
})
