export const routes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        meta: {
            title: 'menu.dashboard',
            icon: 'DashboardOutlined',
            auth: true
        },
        redirect: '/dashboard/overview',
        children: [
            {
                path: 'overview',
                name: 'Overview',
                meta: {
                    title: 'menu.dashboard.overview',
                    icon: 'LineChartOutlined'
                },
                component: () => import('@/views/dashboard/Index.vue')
            },
            {
                path: 'workplace',
                name: 'Workplace',
                meta: {
                    title: 'menu.dashboard.workplace',
                    icon: 'HomeOutlined'
                },
                component: () => import('@/views/dashboard/Work.vue')
            }
        ]
    },
    {
        path: '/component',
        name: 'Component',
        meta: {
            title: 'menu.component',
            icon: 'BlockOutlined',
            auth: true
        },
        redirect: '/component/icon',
        children: [
            {
                path: 'icon',
                name: 'Icon',
                meta: {
                    title: 'menu.component.icon',
                    icon: 'SmileOutlined'
                },
                component: () => import('@/views/component/Icon.vue')
            },
            {
                path: 'button',
                name: 'Button',
                meta: {
                    title: 'menu.component.button',
                    icon: 'RightSquareOutlined'
                },
                component: () => import('@/views/component/Button.vue')
            },
            {
                path: 'widget',
                name: 'Widget',
                meta: {
                    title: 'menu.component.widget',
                    icon: 'BuildOutlined'
                },
                component: () => import('@/views/component/Widget.vue')
            },
            {
                path: 'qr-code',
                name: 'QRCode',
                meta: {
                    title: 'menu.component.QRCode',
                    icon: 'QrcodeOutlined'
                },
                component: () => import('@/views/component/QRCode.vue')
            },
            {
                path: 'cropping',
                name: 'Cropping',
                meta: {
                    title: 'menu.component.Cropping',
                    icon: 'ScissorOutlined'
                },
                component: () => import('@/views/component/Cropping.vue')
            },
            {
                path: 'video',
                name: 'Video',
                meta: {
                    title: 'menu.component.Video',
                    icon: 'PlaySquareOutlined'
                },
                component: () => import('@/views/component/Video.vue')
            }
        ]
    },
    {
        path: '/function',
        name: 'Function',
        meta: {
            title: 'menu.function',
            icon: 'MacCommandOutlined',
            auth: true
        },
        redirect: '/function/watermark',
        children: [
            {
                path: 'watermark',
                name: 'Watermark',
                meta: {
                    title: 'menu.function.watermark',
                    icon: 'AuditOutlined'
                },
                component: () => import('@/views/function/Watermark.vue')
            },
            {
                path: 'save',
                name: 'Save',
                meta: {
                    title: 'menu.function.save',
                    icon: 'SaveOutlined'
                },
                component: () => import('@/views/function/Save.vue')
            }
        ]
    },
    {
        path: '/tool',
        name: 'Tool',
        meta: {
            title: 'menu.tool',
            icon: 'ToolOutlined',
            auth: true
        },
        redirect: '/tool/transcoding',
        children: [
            {
                path: 'transcoding',
                name: 'Transcoding',
                meta: {
                    title: 'menu.tool.transcoding',
                    icon: 'SwapOutlined'
                },
                component: () => import('@/views/tool/Transcoding.vue')
            }
        ]
    },
    {
        path: '/feedback',
        name: 'Feedback',
        meta: {
            title: 'menu.feedback',
            icon: 'IssuesCloseOutlined',
            auth: true
        },
        redirect: '/feedback/result/success',
        children: [
            {
                path: 'result',
                name: 'Result',
                meta: {
                    title: 'menu.feedback.result',
                    icon: 'InfoCircleOutlined'
                },
                children: [
                    {
                        path: 'success',
                        name: 'Success',
                        meta: {
                            title: 'menu.feedback.result.success'
                        },
                        component: () => import('@/views/feedback/Success.vue')
                    },
                    {
                        path: 'fail',
                        name: 'Fail',
                        meta: {
                            title: 'menu.feedback.result.fail'
                        },
                        component: () => import('@/views/feedback/Fail.vue')
                    }
                ]
            },
            {
                path: 'error',
                name: 'Error',
                meta: {
                    title: 'menu.feedback.error',
                    icon: 'WarningOutlined'
                },
                children: [
                    {
                        path: '403',
                        name: 'Forbidden',
                        meta: {
                            title: 'menu.feedback.error.forbidden'
                        },
                        component: () => import('@/views/feedback/403.vue')
                    },
                    {
                        path: '404',
                        name: 'NotFound',
                        meta: {
                            title: 'menu.feedback.error.not-found'
                        },
                        component: () => import('@/views/feedback/404.vue')
                    },
                    {
                        path: '500',
                        name: 'InternalServerError',
                        meta: {
                            title: 'menu.feedback.error.internal-server-error'
                        },
                        component: () => import('@/views/feedback/500.vue')
                    }
                ]
            }
        ]
    },
    {
        path: '/example',
        name: 'Example',
        meta: {
            title: 'menu.example',
            icon: 'LayoutOutlined',
            auth: true
        },
        redirect: '/example/list/table-list',

        children: [
            {
                path: 'list',
                name: 'List',
                meta: {
                    title: 'menu.example.list',
                    icon: 'TableOutlined'
                },
                redirect: '/example/list/table-list',
                children: [
                    {
                        path: 'table-list',
                        name: 'TableList',
                        meta: {
                            title: 'menu.example.list.table-list'
                        },
                        component: () => import('@/views/example/list/tableList/Index.vue')
                    },
                    {
                        path: 'table-list',
                        meta: {
                            title: 'menu.example.list.table-list',
                            hide: true,
                            name: 'TableList'
                        },
                        children: [
                            {
                                path: 'create',
                                name: 'TableListCreate',
                                meta: {
                                    title: 'menu.example.list.table-list.create'
                                },
                                component: () => import('@/views/example/list/tableList/Edit.vue')
                            },
                            {
                                path: 'update/:id',
                                name: 'TableListUpdate',
                                meta: {
                                    title: 'menu.example.list.table-list.update'
                                },
                                component: () => import('@/views/example/list/tableList/Edit.vue')
                            },
                            {
                                path: 'detail/:id',
                                name: 'TableListDetail',
                                meta: {
                                    title: 'menu.example.list.table-list.detail'
                                },
                                component: () => import('@/views/example/list/tableList/Detail.vue')
                            }
                        ]
                    },
                    // {
                    //     path: 'create',
                    //     name: 'TableListCreate',
                    //     meta: {
                    //         title: 'menu.example.list.table-list.create',
                    //         hide: true
                    //     },
                    //     component: () => import('@/views/example/list/tableList/Edit.vue')
                    // },
                    {
                        path: 'basic-list',
                        name: 'BasicList',
                        meta: {
                            title: 'menu.example.list.basic-list'
                        },
                        component: () => import('@/views/example/list/basicList/Index.vue')
                    },
                    {
                        path: 'card-list',
                        name: 'CardList',
                        meta: {
                            title: 'menu.example.list.card-list'
                        },
                        component: () => import('@/views/example/list/cardList/Index.vue')
                    }
                ]
            },
            {
                path: 'form',
                name: 'Form',
                meta: {
                    title: 'menu.example.form',
                    icon: 'FormOutlined'
                },
                children: [
                    {
                        path: 'basic-form',
                        name: 'BasicForm',
                        meta: {
                            title: 'menu.example.form.basic-form'
                        },
                        component: () => import('@/views/example/form/BasicForm.vue')
                    },
                    {
                        path: 'step-form',
                        name: 'StepForm',
                        meta: {
                            title: 'menu.example.form.step-form'
                        },
                        component: () => import('@/views/example/form/StepForm.vue')
                    },
                    {
                        path: 'advanced-form',
                        name: 'AdvancedForm',
                        meta: {
                            title: 'menu.example.form.advanced-form'
                        },
                        component: () => import('@/views/example/form/AdvancedForm.vue')
                    }
                ]
            }
        ]
    },
    {
        path: '/setting',
        name: 'Setting',
        meta: {
            title: 'menu.setting',
            icon: 'SettingOutlined',
            auth: true
        },
        redirect: '/setting/system',
        children: [
            {
                path: 'system',
                name: 'System',
                meta: {
                    title: 'menu.setting.system',
                    icon: 'DesktopOutlined'
                },
                component: () => import('@/views/setting/System.vue')
            },
            {
                path: 'account',
                name: 'Account',
                meta: {
                    title: 'menu.setting.account',
                    icon: 'UserOutlined'
                },
                component: () => import('@/views/setting/Account.vue')
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            title: 'menu.about',
            icon: 'BugOutlined',
            auth: true,
            noColumn: true
        },
        component: () => import('@/views/about/Index.vue')
    }
]
