//index.js
//获取应用实例
const app = getApp()
Page({
    data: {
        itemList: [{
                title: '按钮',
                url: '../button/button'
            },
            {
                title: '列表',
                url: '../list/list'
            },
            {
                title: '表单',
                url: '../form/form'
            },
            {
                title: '文件上传',
                url: '../uploader/uploader'
            }, {
                title: '模态框',
                url: '../dialog/dialog'
            },
            {
                title: '导航栏',
                url: '../topTabar/topTabar'
            },
            {
                title:'搜索',
                url:'../search/search'
            },
            {
                title: 'flex',
                url: '../flex/flex'
            },
            {
                title: '数据传值',
                url: '../data/data'
            }
        ]
    },
    chooseItem: function(e) {
        wx.navigateTo({
            url: e.currentTarget.dataset.url,
        })
    },
    onLoad: function() {}
})