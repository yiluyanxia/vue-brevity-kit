import { SCREEN_SIZE } from '@/constants/layout'
import { ref } from 'vue'

export default function () {
    const screenSize = ref<string>()
    const miniScreen = ref<boolean>(false)

    const getWindowWidth = () => {
        // const width = document.body.clientWidth
        const width = document.documentElement.clientWidth

        if (width < SCREEN_SIZE['xs']) {
            screenSize.value = 'xs'
            miniScreen.value = true
        } else if (width < SCREEN_SIZE['sm']) {
            screenSize.value = 'sm'
            miniScreen.value = true
        } else if (width < SCREEN_SIZE['md']) {
            screenSize.value = 'md'
            miniScreen.value = true
        } else if (width < SCREEN_SIZE['lg']) {
            screenSize.value = 'lg'
            miniScreen.value = false
        } else if (width < SCREEN_SIZE['xl']) {
            screenSize.value = 'xl'
            miniScreen.value = false
        } else {
            screenSize.value = 'xxl'
            miniScreen.value = false
        }
    }
    getWindowWidth()
    window.addEventListener('resize', getWindowWidth)
    return {
        getWindowWidth,
        miniScreen,
        screenSize
    }
}
