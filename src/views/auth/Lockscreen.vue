<template>
    <div class="brevity-lockscreen-wrap">
        <!-- :style="{ transform: `scale(${scale})` }" -->
        <div class="brevity-lockscreen">
            <h3 class="lockscreen-title">
                {{ env.VITE_APP_TITLE }}
                <!-- <LockOutlined /> -->
            </h3>
            <div class="brevity-flip-box" :class="{ hover: isHover }">
                <div class="brevity-flip">
                    <div class="lockscreen-time-box flip flip-front">
                        <div class="brevity-clock">
                            <div class="clock-box">
                                <div class="clock-inner">
                                    <div class="clock-center">
                                        <div
                                            class="minute-hand"
                                            :style="{ transform: `rotate(${minutesRotate}deg)` }"></div>
                                        <div
                                            class="hour-hand"
                                            :style="{ transform: `rotate(${hoursRotate}deg)` }"></div>
                                        <div
                                            class="second-hand"
                                            :style="{ transform: `rotate(${secondsRotate}deg)` }"></div>
                                    </div>
                                </div>
                                <!-- <div class="clock-line">
                                    <div class="line-move"></div>
                                    <div class="line line1"></div>
                                    <div class="line line2"></div>
                                    <div class="line line3"></div>
                                    <div class="line line4"></div>
                                </div> -->
                            </div>
                        </div>
                        <div class="lockscreen-time">
                            <div class="time">{{ hours }}:{{ minutes }} 周 {{ week[day] }}</div>
                            <div class="date">{{ year }}/{{ month }}/{{ date }}</div>
                        </div>
                    </div>
                    <div class="lockscreen-form-box flip flip-back">
                        <div class="avatar">
                            <UserOutlined class="icon" />
                        </div>
                        <a-input-group compact size="large">
                            <!-- <a-input-password autocomplete="new-password" v-model:value="formState.password"> -->
                            <!-- <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template> -->
                            <!-- </a-input-password> -->
                            <a-input-password
                                size="large"
                                autocomplete="new-password"
                                v-model:value="password"
                                style="width: calc(100% - 80px); text-align: left"></a-input-password>
                            <a-button type="primary" size="large" @click="onLogin">登录</a-button>
                        </a-input-group>
                        <div class="error" v-if="error">密码错误</div>

                        <a-row :gutter="[24, 24]" class="lockscreen-form-row">
                            <a-col :span="12">
                                <a-button type="primary" ghost block @click="goLogin">重新登录</a-button>
                            </a-col>
                            <a-col :span="12">
                                <a-button type="primary" ghost block @click="cancel">取消</a-button>
                            </a-col>
                        </a-row>
                    </div>
                </div>
            </div>

            <div class="lockscreen-lock">
                <div class="lock-inner" @click="isHover = !isHover">
                    <LockOutlined class="icon" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { LockOutlined, UserOutlined } from '@ant-design/icons-vue'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import CryptoJS from 'crypto-js'
import { SALT } from '@/config/index'
import { PASSWORD_KEY, LOCK_KEY } from '@/config/key'
import { useLockStore } from '@/stores/lock'

const lockStore = useLockStore()

const env = import.meta.env
const router = useRouter()

const isHover = ref<boolean>(false)
const password = ref('')
const error = ref(false)

const onLogin = () => {
    if (!password.value) return
    const hash = CryptoJS.SHA1(password.value + SALT).toString()
    const passwordHash = localStorage.getItem(PASSWORD_KEY)
    if (hash === passwordHash) {
        error.value = false
        lockStore.setLock(false)
        const fullPath = localStorage.getItem('LOCK_FULLPATH')
        if (fullPath) {
            router.push(fullPath)
        } else {
            router.push('/')
        }
    } else {
        error.value = true
    }
}
const goLogin = () => {
    lockStore.setLock(false)
    router.push('/login')
}
const cancel = () => {
    isHover.value = !isHover.value
    password.value = ''
}
const week = ['日', '一', '二', '三', '四', '五', '六']
const year = ref()
const month = ref()
const date = ref()
const hours = ref()
const minutes = ref()
const seconds = ref()
const day = ref()
const minutesRotate = ref()
const hoursRotate = ref()
const secondsRotate = ref()

const setClock = () => {
    const now = new Date()
    year.value = now.getFullYear()
    month.value = now.getMonth()
    date.value = now.getDate()
    hours.value = now.getHours()
    minutes.value = now.getMinutes()
    seconds.value = now.getSeconds()
    day.value = now.getDay()
    minutesRotate.value = minutes.value * 6
    hoursRotate.value = hours.value * 30 + (30 / 60) * 36
    secondsRotate.value = seconds.value * 6
    // hoursRotate.value = 2 * 30
}
let timer: any

onMounted(() => {
    lockStore.setLock(true)
    localStorage.setItem(LOCK_KEY, '1')
    timer = setInterval(setClock, 1000)
    setClock()
})
onUnmounted(() => {
    timer && clearInterval(timer)
})
</script>
<style lang="less" scoped>
.brevity-lockscreen-wrap {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgb(16, 23, 39);
    z-index: 99999;
    color: #fff;
    overflow: auto;
    .brevity-lockscreen {
        height: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
    }
    .lockscreen-title {
        color: #fff;
        font-size: 36px;
        text-align: center;
        padding-top: 50px;
    }
    .lockscreen-time-box {
        flex: 1;
        .lockscreen-time {
            color: #fff;
            font-size: 24px;
            text-align: center;
            margin: -24px auto 0;
        }
    }

    .lockscreen-form-box {
        max-width: 300px;

        .avatar {
            background: rgba(24, 144, 255, 0.15);
            width: 80px;
            height: 80px;
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 24px auto;
            .icon {
                font-size: 36px;
            }
        }
        .error {
            font-size: 14px;
            text-align: left;
            color: @error;
            padding: 0 6px;
            position: absolute;
        }
        .lockscreen-form-row {
            padding: 24px 6px;
        }
    }
    .brevity-flip-box {
        flex: 1;
        flex-shrink: 0;
        margin: 0 auto;
        width: 100%;
        height: 515px;
        min-height: 350px;
        &:hover,
        &.hover {
            .brevity-flip {
                transform: rotateY(180deg);
            }
        }
        .brevity-flip {
            transition: 0.6s;
            transform-style: preserve-3d;
            position: relative;
            .flip {
                backface-visibility: hidden;
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                margin: 0 auto;
                width: 100%;
                height: 515px;
                background-color: rgb(16, 23, 39);
                &.flip-front {
                    z-index: 2;
                }
                &.flip-back {
                    transform: rotateY(180deg);
                }
            }
        }
    }
}
.brevity-clock {
    transform: scale(0.65);
}
.clock-box {
    margin: 0 auto;
    width: 360px;
    height: 360px;
    border-radius: 100%;
    background: rgba(24, 144, 255, 0.15);
    border: 2px solid rgba(24, 144, 255, 0.45);
    box-shadow: 0 0 10px rgba(24, 144, 255, 0.45);
    position: relative;
    &::before,
    &::after {
        content: '';
        display: block;
        width: 3px;
        height: 24px;
        border-radius: 3px;
        background-color: rgba(255, 255, 255, 0.85);
        position: absolute;
        transform: translate(-50%);
    }
    &::before {
        left: 50%;
        top: 18px;
    }
    &::after {
        left: 50%;
        bottom: 18px;
    }
    .clock-inner {
        margin: 60px auto;
        width: 240px;
        height: 240px;
        border-radius: 100%;
        background: rgba(24, 144, 255, 0.15);
        box-shadow: 0 0 6px rgba(24, 144, 255, 0.15);
        padding-top: 60px;
        &::before,
        &::after {
            content: '';
            display: block;
            width: 24px;
            height: 3px;
            border-radius: 3px;
            background-color: rgba(255, 255, 255, 0.85);
            position: absolute;
            transform: translate(0, -50%);
        }
        &::before {
            left: 18px;
            top: 50%;
        }
        &::after {
            right: 18px;
            top: 50%;
        }
        .clock-center {
            margin: 0px auto;
            width: 120px;
            height: 120px;
            border-radius: 100%;
            background: rgba(24, 144, 255, 0.05);
            box-shadow: 0 0 6px rgba(24, 144, 255, 0.15);
            .minute-hand {
                width: 0;
                height: 0;
                border: 6px solid transparent;
                border-bottom: 96px solid rgba(255, 255, 255, 0.85);
                border-radius: 0 0 6px 6px;
                position: absolute;
                bottom: 50%;
                left: 173px;
                // transform: rotate(216deg);
                transform-origin: bottom;
            }
            .hour-hand {
                width: 0;
                height: 0;
                border: 6px solid transparent;
                border-bottom: 60px solid rgba(24, 144, 255, 0.65);
                border-radius: 0 0 6px 6px;
                position: absolute;
                bottom: 50%;
                left: 173px;
                // transform: rotate(45deg);
                transform-origin: bottom;
            }
            .second-hand {
                width: 0;
                height: 0;
                border: 2px solid transparent;
                border-bottom: 120px solid rgba(24, 144, 255, 1);
                border-radius: 0 0 6px 6px;
                position: absolute;
                bottom: 50%;
                left: 173px;
                // transform: rotate(45deg);
                transform-origin: bottom;
            }
        }
    }
    .clock-line {
        animation: lines 2s linear infinite;
        // .line-move {
        //     width: 2px;
        //     height: 24px;
        //     border-radius: 2px;
        //     background-color: rgba(255, 255, 255, 0.65);
        //     position: absolute;
        //     bottom: 50%;
        //     left: 50%;
        //     transform-origin: bottom;
        //     animation: seconds-rotate 1s linear infinite;
        // }
        .line {
            &::before,
            &::after {
                content: '';
                display: block;
                width: 2px;
                height: 24px;
                border-radius: 2px;
                background-color: rgba(255, 255, 255, 0.65);
                position: absolute;
                bottom: 50%;
                left: 50%;
                transform-origin: bottom;
            }
        }

        .line1 {
            &::before {
                transform: rotate(30deg) translate(0, -140px);
            }
            &::after {
                transform: rotate(60deg) translate(0, -140px);
            }
        }
        .line2 {
            &::before {
                transform: rotate(120deg) translate(0, -140px);
            }
            &::after {
                transform: rotate(150deg) translate(0, -140px);
            }
        }
        .line3 {
            &::before {
                transform: rotate(210deg) translate(0, -140px);
            }
            &::after {
                transform: rotate(240deg) translate(0, -140px);
            }
        }
        .line4 {
            &::before {
                transform: rotate(300deg) translate(0, -140px);
            }
            &::after {
                transform: rotate(330deg) translate(0, -140px);
            }
        }
    }
}
.lockscreen-lock {
    transform: scale(0.65);
    transform-origin: bottom;
    margin: 10px auto;
    width: 180px;
    height: 180px;
    border-radius: 100%;
    background: rgba(24, 144, 255, 0.15);
    box-shadow: 0 0 6px rgba(24, 144, 255, 0.15);
    padding-top: 45px;
    position: relative;
    flex-shrink: 0;
    &::before {
        content: '';
        display: block;
        width: 90px;
        height: 90px;
        border-radius: 100%;
        background: rgba(24, 144, 255, 0.15);
        box-shadow: 0 0 6px rgba(24, 144, 255, 0.15);
        animation: ripple 2s linear infinite;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
    }
    .lock-inner {
        margin: 0px auto;
        width: 90px;
        height: 90px;
        border-radius: 100%;
        background: rgba(24, 144, 255, 0.15);
        box-shadow: 0 0 6px rgba(24, 144, 255, 0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: relative;
        &:hover {
            background: rgba(24, 144, 255, 0.45);
        }
        .icon {
            font-size: 60px;
            color: rgba(255, 255, 255, 0.85);
        }
    }
}

@keyframes ripple {
    0% {
        transform: scale(1);
        opacity: 0;
    }
    25% {
        transform: scale(1.25);
        opacity: 0.1;
    }
    50% {
        transform: scale(1.5);
        opacity: 0.3;
    }
    75% {
        transform: scale(1.75);
        opacity: 0.5;
    }
    100% {
        transform: scale(2);
        opacity: 0;
    }
}
@keyframes lines {
    0% {
        opacity: 0;
    }
    25% {
        opacity: 0.1;
    }
    50% {
        opacity: 0.3;
    }
    75% {
        opacity: 0.5;
    }
    100% {
        opacity: 0;
    }
}

@media (min-height: 668px) {
    .brevity-lockscreen-wrap {
        .lockscreen-title {
            margin-bottom: 50px;
        }
    }
}
@media (min-width: 576px) {
    .brevity-clock {
        transform: scale(1);
    }
    .lockscreen-lock {
        transform: scale(1);
    }
    .brevity-lockscreen-wrap {
        .brevity-flip-box {
            max-width: 360px;
            min-height: 515px;
        }
        .lockscreen-form-box {
            max-width: 360px;
        }
        .lockscreen-time-box {
            .lockscreen-time {
                font-size: 36px;
                margin: 40px auto;
            }
        }
    }
}
</style>
