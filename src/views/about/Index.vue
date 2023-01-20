<template>
    <a-card :bordered="false" class="brevity-stretch-card">
        <a-typography-title>{{ env.VITE_APP_TITLE }}</a-typography-title>

        <div class="tag-box mb36">
            <span class="item">
                <LayoutOutlined class="icon" />
                页面简洁
            </span>
            <span class="item">
                <CodeOutlined class="icon" />
                代码简练
            </span>
            <span class="item">
                <ApartmentOutlined class="icon" />
                结构简单
            </span>
        </div>
        <a-row class="author-box mb36" type="flex" align="middle" justify="space-between">
            <a-col class="author-info">
                <a-avatar :size="40" src="https://avatars.githubusercontent.com/u/26448970?v=4" @click="goUrl" />
                <div class="info">
                    <h3 class="title" @click="goUrl">yiluyanxia</h3>
                    <p class="desc">卖芒果的小女孩，深圳湾第二废豺</p>
                </div>
            </a-col>
            <a-col>
                <a-button type="text" href="https://github.com/yiluyanxia/vue-brevity-kit" target="_blank">
                    <template #icon>
                        <GithubOutlined />
                    </template>
                    vue-brevity-kit
                </a-button>
            </a-col>
        </a-row>
        <!-- <a-row class="repository-box mb36" type="flex" align="middle" :gutter="[12, 24]">
            <a-col :xs="24" :sm="24" class="label">
                <StarOutlined class="icon" />
                109 star
            </a-col>
        </a-row> -->

        <a-row class="repository-box mb36" type="flex" align="middle" :gutter="[12, 24]">
            <a-col :xs="24" :sm="24" :md="4" :lg="3" class="label">
                <StarOutlined class="icon" />
                Star
            </a-col>
            <a-col :xs="24" :sm="24" :md="20" :lg="21">
                <a-tag>1</a-tag>
            </a-col>
            <a-col :xs="24" :sm="24" :md="4" :lg="3" class="label">
                <EyeOutlined class="icon" />
                Watch
            </a-col>
            <a-col :xs="24" :sm="24" :md="20" :lg="21">
                <a-tag>0</a-tag>
            </a-col>
            <a-col :xs="24" :sm="24" :md="4" :lg="3" class="label">
                <ForkOutlined class="icon" />
                Fork
            </a-col>
            <a-col :xs="24" :sm="24" :md="20" :lg="21">
                <a-tag>0</a-tag>
            </a-col>
        </a-row>

        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1" tab="项目介绍">
                <div class="article-content" v-html="profile"></div>
            </a-tab-pane>
            <a-tab-pane key="2" tab="技术栈">
                <div class="article-content" v-html="stack"></div>
            </a-tab-pane>
        </a-tabs>
    </a-card>
</template>
<script setup lang="ts">
import {
    CodeOutlined,
    LayoutOutlined,
    ApartmentOutlined,
    GithubOutlined,
    StarOutlined,
    EyeOutlined,
    ForkOutlined
} from '@ant-design/icons-vue'
import { ref, onMounted } from 'vue'
import markdownIt from 'markdown-it'
// import hljs from 'highlight.js/lib/core'
import hljs from 'highlight.js'
// import 'highlight.js/styles/github.css'
// import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/styles/atom-one-light.css'

import axios from 'axios'
import '@/assets/styles/markdowm.css'

const md = markdownIt({
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return (
                    '<pre class="hljs"><code>' +
                    hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                    '</code></pre>'
                )
            } catch (__) {
                console.log(__)
            }
        }

        // return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
        return ''
    }
})

const env = import.meta.env

const profile = ref()
const stack = ref()
// const mdstr = md.render('# hh')

const activeKey = ref('1')
const getProfile = () => {
    axios
        .get('docs/profile.md')
        .then((response) => {
            profile.value = md.render(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
}
const getStack = () => {
    axios
        .get('docs/stack.md')
        .then((response) => {
            stack.value = md.render(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
}

const goUrl = () => {
    window.open('https://github.com/yiluyanxia', '_blank')
}
onMounted(() => {
    getProfile()
    getStack()
})
</script>
<style lang="less" scoped>
.tag-box {
    .item {
        font-size: 16px;
        color: #666;
        padding-right: 24px;
        .icon {
            padding-right: 2px;
            // font-size: 16px;
        }
    }
}
.author-box {
    border-top: 1px solid var(--light-color);
    border-bottom: 1px solid var(--light-color);
    .author-info {
        display: flex;
        align-items: center;
        padding: 12px 0;
        .info {
            padding-left: 12px;
        }
        .title {
            font-size: 16px;
            margin-bottom: 0px;
            cursor: pointer;
        }
        .desc {
            font-size: 14px;
            margin-bottom: 0px;
        }
    }
}
.repository-box {
    .label {
        color: #999;
        .icon {
            padding-right: 2px;
        }
    }
    .ant-tag {
        padding-left: 24px;
        padding-right: 24px;
    }
}
</style>
