export const OWNER_AUTHORITY = [
    {
        name: 'system',
        check: false,
        indeterminate: false,
        list: ['create', 'update', 'retrieve', 'delete'],
        checkedList: []
    },
    {
        name: 'user',
        check: false,
        indeterminate: false,
        list: ['create', 'update', 'retrieve', 'delete'],
        checkedList: []
    },
    {
        name: 'auth',
        check: false,
        indeterminate: false,
        list: ['create', 'update', 'retrieve', 'delete', 'enable', 'disable'],
        checkedList: []
    }
]

export const SECURITY_AUTHORITY = [
    {
        name: 'security',
        check: false,
        indeterminate: false,
        list: ['config', 'enable', 'disable', 'close'],
        checkedList: []
    },
    {
        name: 'system',
        check: false,
        indeterminate: false,
        list: ['create', 'update', 'retrieve', 'delete'],
        checkedList: []
    },
    {
        name: 'gateway',
        check: false,
        indeterminate: false,
        list: ['create', 'update', 'retrieve', 'delete'],
        checkedList: []
    }
]
export const ACCESS_AUTHORITY = [
    {
        name: 'auth',
        check: false,
        indeterminate: false,
        list: ['login', 'logout'],
        checkedList: []
    },
    {
        name: 'fetch',
        check: false,
        indeterminate: false,
        list: ['create', 'update', 'retrieve', 'delete'],
        checkedList: []
    }
]

export const DATA_TEMP = [
    {
        id: '1',
        title: 'Vue',
        src: '/images/icon_vue.png',
        description: '渐进式JavaScript 框架易学易用，性能出色，适用场景丰富的 Web 前端框架',
        owner: 'vuejs',
        createdAt: new Date(),
        percent: 80,
        status: 'active'
    },
    {
        id: '2',
        title: 'Vite',
        src: '/images/icon_vite.png',
        description: '下一代的前端工具链,为开发提供极速响应',
        owner: 'vite',
        createdAt: new Date(),
        percent: 60,
        status: 'normal'
    },
    {
        id: '3',
        title: 'Ant Design',
        src: '/images/icon_ant_design.png',
        description: '企业级产品设计体系，创造高效愉悦的工作体验',
        owner: 'Ant Design Team',
        createdAt: new Date(),
        percent: 50,
        status: 'exception'
    },
    {
        id: '4',
        title: 'Ant Design Vue',
        src: '/images/icon_ant_design_vue.png',
        description: 'Ant Design 的 Vue 实现，开发和服务于企业级后台产品',
        owner: 'vueComponent',
        createdAt: new Date(),
        percent: 55,
        status: 'normal'
    },
    {
        id: '5',
        title: 'Pinia',
        src: '/images/icon_pinia.svg',
        description: '值得你喜欢的 Vue Store',
        owner: 'vuejs',
        createdAt: new Date(),
        percent: 66,
        status: 'exception'
    },
    {
        id: '6',
        title: 'TypeScript',
        src: '/images/icon_typescript.svg',
        description: '具有类型语法的 JavaScript',
        owner: 'Microsoft',
        createdAt: new Date(),
        percent: 68,
        status: 'normal'
    }
]
