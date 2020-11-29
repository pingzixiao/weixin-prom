// pages/list/list.js
Page({
    data: {
        startX: 0,
        endX: 0,
        toLeft:false,
        toRight:false
    },
    start: function(e) {
        this.setData({
            startX: e.touches[0].clientX
        })
    },
    move: function(e) {
        this.setData({
            endX: e.touches[0].clientX
        })
        if (this.data.startX - this.data.endX > 50) {
            console.log('左滑');
            this.setData({
                toLeft:true,
                toRight:false
            })
        }
        if (this.data.endX - this.data.startX > 50) {
            console.log('右滑');
            this.setData({
                toLeft:false,
                toRight: true
            })
        }
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