const menuList = [
    {
        title: '首页',
        key: '/admin/home'
    },
    {
        title: '文章管理',
        key: '/admin/article',
        children: [
            {
                title: 'list',
                key: '/admin/article/list',
            },
            {
                title: '详情',
                key: '/admin/article/detail',
            },
        ]
    },
    {
        title: '表单',
        key: '/form',
        children: [
            {
                title: '登录',
                key: '/form/login',
            },
            {
                title: '注册',
                key: '/form/reg',
            }
        ]
    },
    {
        title: '表格',
        key: '/table',
        children: [
            {
                title: '基础表格',
                key: '/table/basic',
            },
            {
                title: '高级表格',
                key: '/table/high',
            }
        ]
    },
    {
        title: '富文本',
        key: '/rich'
    },
    {
        title: '城市管理',
        key: '/city'
    },
];
export default menuList;