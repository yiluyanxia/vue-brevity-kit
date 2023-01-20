export const ROLE_TYPE = {
    owner: {
        name: 'owner'
    },
    securityadmin: {
        name: 'security'
    },
    accessadmin: {
        name: 'access'
    }
}
export const SERVER_STATUS = {
    0: {
        name: '等待中',
        color: 'default'
    },
    1: {
        name: '运行中',
        color: 'processing'
    },
    2: {
        name: '已启用',
        color: 'success'
    },
    3: {
        name: '已停止',
        color: 'warning'
    },
    4: {
        name: '已禁用',
        color: 'error'
    }
}

export const BASIC_STATUS = {
    0: {
        name: '全部'
    },
    1: {
        name: '进行中'
    },
    2: {
        name: '等待中'
    }
}
export const VISITOR_TYPE = {
    1: {
        name: '内置',
        color: 'blue'
    },
    2: {
        name: '委外',
        color: 'orange'
    },
    3: {
        name: '甲方',
        color: 'purple'
    }
}
