export const MENU_LIST = [
    {
        title: '仪表盘',
        icon: 'HomeOutlined',
        key: 'dashboard',
        group: 'dashboard'
    },
    {
        title: '表单页',
        icon: 'FormOutlined',
        group: 'form',
        children: [
            {
                title: '基础表单',
                key: 'basicForm'
            },
            {
                title: '分步表单',
                key: 'stepForm'
            },
            {
                title: '复合表单',
                key: 'advancedForm'
            }
        ]
    },
    {
        title: '列表页',
        icon: 'TableOutlined',
        group: 'list',
        children: [
            {
                title: '查询表格',
                key: 'tableList'
            },
            {
                title: '标准列表',
                key: 'basicList'
            },
            {
                title: '卡片列表',
                key: 'cardList'
            }
        ]
    }
]
