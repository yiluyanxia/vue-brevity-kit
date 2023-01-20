import { ref } from 'vue'
import { defineStore } from 'pinia'
import { LOCK_KEY } from '@/config/key'

export const useLockStore = defineStore('lock', () => {
    const lock = ref<boolean>(false)
    lock.value = localStorage.getItem(LOCK_KEY) === '1'

    function setLock(value: boolean) {
        if (!value) {
            localStorage.removeItem(LOCK_KEY)
        }
        lock.value = value
    }

    return { lock, setLock }
})
