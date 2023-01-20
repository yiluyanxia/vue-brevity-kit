# 技术栈

本项目主要使用了 vite vue typescript 等技术  
UI 框架使用了 ant-design-vue  
其他的有 vue-router、pinia、axios 等  
详细信息可查看项目 package 文件  

# 使用说明

## axios

为了方便请求，写了个公共的方法。

```js
import { http } from '@/api/index'

http.post(api, params, customOptions, configs)

http.post(api, params).finally(() => {
    loading.value = false
})
```

1. api, 请求的接口名称，需要在 apiUrl.ts 文件中定义。
2. params, 请求的参数，对象类型。
3. customOptions, 自定义参数
    ```ts
    export interface CustomOptions {
        loading?: boolean // 是否显示加载中
        showSuccess?: boolean // 是否提示成功
        showError?: boolean // 是否提示失败
        custom?: boolean // 是否自定义处理
    }
    ```
4. configs, 请求的配置

## vue-router

路由跳转及获取参数等方法，没有做任何多余的封装，直接使用插件提供的方法即可
注意项：

1. 菜单使用了 router（src/router/route.ts）生成，不需要展示时加上 hide: true，如下

    ```js
        {
            path: 'table-list',
            meta: {
                title: 'menu.example.list.table-list',
                hide: true,
                name: 'TableList'
            }
        }
    ```
2. 在 router.beforeEach 中添加了权限判断。

## utils
封装了一些常用的方法。

1. clipboard  
复制方法，返回一个promise

```js
import { clipboard } from '@/utils/clipboard'
const handleCopy = () => {
    clipboard(text.value)
        .then(() => {
            message.success('复制成功')
        })
        .catch(() => {
            message.error('复制失败')
        })
}
```

2. tool  
这里面包含了一些业务层面，经常会用到的用来处理数据的方法。

例如，格式化大小：
```vue
    {{ formatSize(612972) }}
    <!--输出 12.22KB -->
```

3. transcode  
转码和编码，因为在跟后端进行接口联调时，常常要把数据转码成指定的格式，再进行传参，所以写了这几个方法。如果用不到，删除即可，对项目并无影响。