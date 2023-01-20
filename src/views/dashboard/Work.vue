<template>
    <a-row :gutter="[24, 24]">
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="7" :xxl="7">
            <a-row :gutter="[24, 24]">
                <a-col :span="24">
                    <a-card :bordered="false">
                        <div class="author-info mb24">
                            <a-avatar
                                class="avatar"
                                :size="40"
                                src="https://avatars.githubusercontent.com/u/26448970?v=4" />
                            <div class="info">
                                <h3 class="title">Admin</h3>
                                <p class="desc ellipsis">上一次登录时间：{{ lastLoginTime }}</p>
                            </div>
                        </div>
                        <a-row :gutter="[24, 24]">
                            <a-col :xs="24" :sm="8" :md="8" :lg="8" :xl="24" :xxl="24">
                                <a-card size="small">
                                    <a-row :gutter="[24, 24]">
                                        <a-col :xs="12" :sm="24" :md="12" :lg="12" :xl="12" :xxl="12">
                                            <a-progress
                                                type="circle"
                                                :percent="32.5"
                                                :width="80"
                                                :format="(percent: number) => `13 / 40`"
                                                :stroke-color="{
                                                    '0%': 'rgba(255, 77, 79, 0.3)',
                                                    '100%': 'rgba(255, 77, 79, 1)'
                                                }" />
                                        </a-col>
                                        <a-col :xs="12" :sm="24" :md="12" :lg="12" :xl="12" :xxl="12">
                                            <a-statistic title="工作时间" value="13H" />
                                        </a-col>
                                    </a-row>
                                </a-card>
                            </a-col>
                            <a-col :xs="24" :sm="8" :md="8" :lg="8" :xl="24" :xxl="24">
                                <a-card size="small">
                                    <a-row :gutter="[24, 24]">
                                        <a-col :xs="12" :sm="24" :md="12" :lg="12" :xl="12" :xxl="12">
                                            <a-progress
                                                type="circle"
                                                :percent="80"
                                                :width="80"
                                                :stroke-color="{
                                                    '0%': 'rgba(82, 196, 26, 0.3)',
                                                    '100%': 'rgba(82, 196, 26, 1)'
                                                }" />
                                        </a-col>
                                        <a-col :xs="12" :sm="24" :md="12" :lg="12" :xl="12" :xxl="12">
                                            <a-statistic title="工作进度" value="80%" />
                                        </a-col>
                                    </a-row>
                                </a-card>
                            </a-col>
                            <a-col :xs="24" :sm="8" :md="8" :lg="8" :xl="24" :xxl="24">
                                <a-card size="small">
                                    <a-row :gutter="[24, 24]">
                                        <a-col :xs="12" :sm="24" :md="12" :lg="12" :xl="12" :xxl="12">
                                            <a-progress
                                                type="circle"
                                                :percent="86"
                                                :width="80"
                                                :stroke-color="{
                                                    '0%': 'rgba(250, 173, 20, 0.3)',
                                                    '100%': 'rgba(250, 173, 20, 1)'
                                                }" />
                                        </a-col>
                                        <a-col :xs="12" :sm="24" :md="12" :lg="12" :xl="12" :xxl="12">
                                            <a-statistic title="工作效率" value="86%" />
                                        </a-col>
                                    </a-row>
                                </a-card>
                            </a-col>
                        </a-row>
                    </a-card>
                </a-col>
                <a-col :span="24">
                    <a-row :gutter="[24, 24]">
                        <a-col
                            :xs="24"
                            :sm="12"
                            :md="12"
                            :lg="12"
                            :xl="24"
                            :xxl="24"
                            v-for="(item, index) in upcoming"
                            :key="index">
                            <a-card :bordered="false" class="upcoming-card">
                                <p class="time">
                                    <a-badge :status="index === 0 ? 'processing' : 'success'" />
                                    {{ item.time }}
                                </p>
                                <h3 class="title">{{ item.title }}</h3>
                                <p class="desc">{{ item.desc }}</p>
                                <a-tag class="tag" :color="item.tag">
                                    {{ item.tag === 'error' ? '紧急' : item.tag === 'warning' ? '重要' : '一般' }}
                                </a-tag>
                            </a-card>
                        </a-col>
                    </a-row>
                </a-col>
            </a-row>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="17" :xxl="17">
            <a-card :bordered="false" class="mb24">
                <a-calendar
                    class="brevity-calendar"
                    v-model:value="value"
                    :fullscreen="!layoutStore.miniScreen"
                    @select="selectCalendar">
                    <template #dateCellRender="{ current }" v-if="!layoutStore.miniScreen">
                        <ul class="events">
                            <li v-for="item in getListData(current.date())" :key="item.time">
                                <a-badge :status="item.type" :text="`${item.time} ${item.title}`" />
                            </li>
                        </ul>
                    </template>
                    <template #monthCellRender="{ current }" v-if="!layoutStore.miniScreen">
                        <div v-if="getMonthData(current)" class="notes-month">
                            <section>{{ getMonthData(current) }}</section>
                            <span>日程数量</span>
                        </div>
                    </template>
                </a-calendar>

                <a-list
                    v-if="layoutStore.miniScreen"
                    class="schedule-list"
                    item-layout="horizontal"
                    :data-source="getListData(currentSelect.date())">
                    <template #renderItem="{ item }">
                        <a-list-item>
                            <a-list-item-meta :description="item.desc" class="schedule-item-meta">
                                <template #title>
                                    {{ item.title }}
                                </template>
                                <template #avatar>
                                    <a-badge :status="item.type" :text="item.time" />
                                </template>
                            </a-list-item-meta>
                        </a-list-item>
                    </template>
                </a-list>
            </a-card>

            <a-card :bordered="false">
                <a-row type="flex" align="middle" class="summary-box" :gutter="[24, 24]">
                    <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="0" :xxl="8">
                        <h3 class="info-title">一周小结</h3>
                        <p class="info-desc">本周一切顺利，奖励小红花。</p>
                    </a-col>
                    <a-col
                        :xs="24"
                        :sm="12"
                        :md="6"
                        :lg="6"
                        :xl="6"
                        :xxl="4"
                        v-for="(item, index) in summary"
                        :key="index">
                        <div class="item-box">
                            <div
                                class="icon"
                                :style="{
                                    backgroundColor:
                                        item.status === 'up' ? 'rgba(82, 196, 26, .6)' : 'rgba(255, 77, 79, .6)'
                                }">
                                <Icon :icon="item.icon" />
                            </div>
                            <div class="title">{{ item.title }}</div>
                            <div class="desc">{{ item.desc }}</div>
                            <div class="num">
                                {{ item.status === 'up' ? '+' : '-' }}{{ item.value }}
                                <small>%</small>
                            </div>
                        </div>
                    </a-col>
                </a-row>
            </a-card>
        </a-col>
    </a-row>
</template>
<script setup lang="ts">
import dayjs, { Dayjs } from 'dayjs'
import { ref } from 'vue'
import Icon from '@/components/icon/index'
import { useLayoutStore } from '@/stores/layout'

const layoutStore = useLayoutStore()

// const fullscreen = ref(!layoutStore.miniScreen)

const lastLoginTime = dayjs().subtract(28, 'h').format('YYYY-MM-DD HH:mm:ss')

const value = ref<Dayjs>()
const getListData = (value: number) => {
    let listData
    const today = dayjs().date()
    if (value === 8) {
        listData = [
            {
                type: 'warning',
                title: '小组例会',
                desc: '大湾区零号东塔楼888室',
                time: '17:00'
            },
            {
                type: 'success',
                title: '甲方来访',
                desc: '大湾区零号东塔楼888室',
                time: '18:00'
            }
        ]
    } else if (value === 10) {
        listData = [
            {
                type: 'warning',
                title: '客户会议',
                desc: '大湾区零号东塔楼888室',
                time: '11:00'
            },
            {
                type: 'success',
                title: '岗位培训',
                desc: '大湾区零号东塔楼888室',
                time: '14:00'
            },
            {
                type: 'success',
                title: '客户会议',
                desc: '大湾区零号东塔楼888室',
                time: '17:00'
            }
        ]
    } else if (value === today) {
        listData = [
            {
                type: 'warning',
                title: '客户会议',
                desc: '大湾区零号东塔楼888室',
                time: '17:00'
            },
            {
                type: 'success',
                title: '甲方来访',
                desc: '大湾区零号东塔楼888室',
                time: '18:00'
            }
        ]
    }
    return listData || []
}

const getMonthData = (value: Dayjs) => {
    if (value.month() === 8) {
        return 188
    }
}
const onPanelChange = (value: Dayjs, mode: string) => {
    console.log(value, mode)
}

const upcoming = [
    {
        title: '大客户会议',
        time: '09:00 - 10:00',
        desc: '大湾区零号东塔楼808室',
        tag: 'error'
    },
    {
        title: '面试',
        time: '11:00 - 12:00',
        desc: '大湾区零号东塔楼868室',
        tag: 'warning'
    },
    {
        title: '小组例会',
        time: '17:00 - 18:00',
        desc: '大湾区零号东塔楼888室',
        tag: 'default'
    },
    {
        title: '小组例会',
        time: '17:00 - 18:00',
        desc: '大湾区零号东塔楼888室',
        tag: 'default'
    }
]
const summary = [
    {
        title: '工单',
        desc: '用户的',
        value: 6,
        status: 'up',
        icon: 'ProfileOutlined'
    },
    {
        title: '任务',
        desc: '常规组',
        value: 5,
        status: 'down',
        icon: 'CarryOutOutlined'
    },
    {
        title: '协助',
        desc: '实习组',
        value: 5,
        status: 'up',
        icon: 'OneToOneOutlined'
    },
    {
        title: '代码',
        desc: '提交量',
        value: 3,
        status: 'down',
        icon: 'CodeOutlined'
    }
]
const currentSelect = ref()
currentSelect.value = dayjs()
const selectCalendar = (date: Dayjs) => {
    currentSelect.value = date
}
</script>
<style lang="less" scoped>
.author-info {
    display: flex;
    align-items: center;
    // padding: 12px 0;
    .avatar {
        flex-shrink: 0;
    }
    .info {
        padding-left: 12px;
        width: calc(100% - 40px);
    }
    .title {
        font-size: 16px;
        margin-bottom: 0px;
        font-weight: bold;
    }
    .desc {
        font-size: 14px;
        margin-bottom: 0px;
    }
}
.upcoming-card {
    position: relative;
    .time {
        color: @secondary-color;
        margin-bottom: 6px;
    }
    .title {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 6px;
    }
    .desc {
        color: @secondary-color;
        margin-bottom: 0;
    }
    .tag {
        position: absolute;
        top: 24px;
        right: 24px;
    }
}
.summary-box {
    .info-title {
        font-size: 16px;
        font-weight: bold;
    }
    .item-box {
        border: 1px solid @light-color;
        text-align: center;
        border-radius: 6px;
        margin-top: 6px;
        .icon {
            width: 36px;
            height: 36px;
            border-radius: 36px;
            line-height: 36px;
            text-align: center;
            font-weight: bold;
            color: #fff;
            margin: -18px auto 0;
            font-size: 18px;
        }
        .title {
            font-size: 14px;
            font-weight: bold;
            padding: 8px 0 6px;
        }
        .desc {
            font-size: 12px;
        }
        .num {
            font-size: 28px;
            font-weight: bold;
            padding: 12px 0 18px;
            line-height: 1;
            small {
                font-size: 12px;
            }
        }
    }
}
.events .ant-badge-status {
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    text-overflow: ellipsis;
    font-size: 12px;
}
.notes-month {
    text-align: center;
    font-size: 28px;
}
.notes-month section {
    font-size: 28px;
}
.schedule-list {
    border-top: 1px solid @light-color;
    border-bottom: 1px solid @light-color;
    .schedule-item-meta {
        display: flex;
        align-items: center;
    }
}
</style>
<style lang="less">
.brevity-calendar {
    &.ant-picker-calendar-full .ant-picker-panel .ant-picker-calendar-date {
        margin: 4px;
        border: 1px solid @light-color;
        border-radius: 6px;
        z-index: 1;
    }
    &.ant-picker-calendar-full .ant-picker-panel .ant-picker-month-panel .ant-picker-calendar-date-content {
        height: 154px;
    }
}
.schedule-list {
    .ant-list-item {
        padding: 0;
    }
    .ant-list-item-meta-content {
        border-left: 1px solid @light-color;
        padding: 6px 12px;
    }
}
</style>
