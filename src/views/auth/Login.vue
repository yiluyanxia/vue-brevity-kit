<template>
    <div class="login-box">
        <div class="login-bg"></div>
        <div class="form-box">
            <h1 class="title">{{ env.VITE_APP_TITLE }}</h1>
            <a-form
                :model="formState"
                layout="vertical"
                :wrapper-col="{ span: 24 }"
                autocomplete="off"
                @finish="onFinish">
                <a-form-item name="username" autocomplete="off" :rules="[{ required: true, message: '请输入用户名' }]">
                    <a-input v-model:value="formState.username">
                        <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
                    </a-input>
                </a-form-item>
                <a-form-item name="password" :rules="[{ required: true, message: '请输入密码' }]">
                    <a-input-password autocomplete="new-password" v-model:value="formState.password">
                        <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
                    </a-input-password>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" html-type="submit" block :loading="loading">登 录</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { http } from '@/api/index.js'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
import CryptoJS from 'crypto-js'
import { SALT } from '@/config/index'
import { TOKEN_NAME, PASSWORD_KEY } from '@/config/key'
import { setCookie } from '@/utils/storage'

const router = useRouter()

const env = import.meta.env
const formState = reactive({
    username: '',
    password: ''
})
const loading = ref(false)
const onFinish = async (values: any) => {
    // await http.post('login', values, { showError: true })
    const hash = CryptoJS.SHA1(values.password + SALT).toString()
    localStorage.setItem(PASSWORD_KEY, hash)
    setCookie(TOKEN_NAME, '12345')
    router.push({ name: 'Dashboard' })
}
</script>
<style lang="less" scoped>
.login-box {
    position: relative;
    z-index: 1;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(16, 23, 39, 1), rgba(29, 41, 57, 1));
    // background-color: rgba(16, 23, 39);
    .login-bg {
        background-image: url('../../assets/images/lg.jpg');
        background-size: cover;
        opacity: 0.1;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 0;
    }
    .form-box {
        position: relative;
        z-index: 1;
        background: rgba(16, 23, 39, 0.8);
        padding: 40px;
        border-radius: 6px;
        // transform: translate(-50%);
        .title {
            font-size: 18px;
            color: #fff;
            text-align: center;
        }
    }
}
</style>
