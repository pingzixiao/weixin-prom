// pages/button/button.js
Page({
    data: {
        list: [{
            fid: 1,
            child: [{
                id: 11,
                value: '张三'
            }, {
                id: 12,
                value: '李四'
            }, {
                id: 13,
                value: '王五'
            }]
        }, {
            fid: 2,
            child: [{
                id: 21,
                value: '赵六'
            }, {
                id: 22,
                value: '钱七'
            }, {
                id: 23,
                value: '孙九'
            }]
        }]
    },
    onLoad: function(options) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
})