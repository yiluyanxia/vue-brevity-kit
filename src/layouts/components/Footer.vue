<template>
    <!-- <div class="layout-foot">
        <div class="foot-info">
            <span>{{ env.VITE_APP_TITLE }} {{ env.VITE_APP_ALIAS }}</span>
            <img class="logo" src="@/assets/images/logo.svg" />
            <span>{{ env.VITE_APP_VERSION }} {{ env.VITE_APP_INTERNAL_VERSION }}</span>
        </div>
        <div class="foot-copyright">{{ env.VITE_APP_COPYRIGHT }} {{ env.VITE_APP_COMPANY }}</div>
    </div> -->
    <div class="brevity-footer">
        <div class="brevity-footer-content">
            <div class="brevity-footer-content-info">
                <img class="brevity-footer-content-info-logo" src="@/assets/images/logo.svg" />
                <span>{{ env.VITE_APP_TITLE }}</span>
            </div>
            <div class="brevity-footer-content-copyright">{{ env.VITE_APP_COPYRIGHT }} {{ env.VITE_APP_COMPANY }}</div>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps({
    theme: String
})

const env = import.meta.env
</script>
<style lang="less" scoped>
.layout-foot {
    text-align: center;
    padding: 0 16px;
    color: @secondary-color;
    .foot-info {
        margin-bottom: 8px;

        span:first-child {
            margin-right: 40px;
        }

        .logo {
            width: 14px;
            height: 14px;
            margin-right: 40px;
        }
    }
}
.brevity-footer {
    display: flex;
    justify-content: center;
    &-content {
        color: @secondary-color;
        &-info {
            font-size: 13px;
            font-weight: bold;
            margin-bottom: 6px;
            &-logo {
                width: 22px;
                height: 22px;
                margin-right: 10px;
            }
        }
        &-copyright {
            font-size: 12px;
        }
    }
}
</style>
