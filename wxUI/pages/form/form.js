// pages/button/button.js
Page({
    data: {
        length: 0,
        note: '',
        pickList: ['ex1', 'ex2', 'ex3'],
        pickValue: '',
        time: 60,
        showCode: false
    },
    // textarea
    note: function(e) {
        this.setData({
            note: e.detail.value,
            length: e.detail.value.length
        })
    },
    // picker
    picker: function(e) {
        this.setData({
            pickValue: this.data.pickList[e.detail.value]
        })
    },
    // switch
    switchChange: function(e) {
        console.log(e.detail.value)
    },
    // code
    getCode: function() {
        var that = this;
        that.setData({
            showCode: true
        })
        let times = setTimeout(function() {
            if (that.data.time != 0) {
                that.setData({
                    time: that.data.time - 1
                })
                that.getCode()
            } else {
                that.setData({
                    showCode: false,
                    time: 60
                })
            }
        }, 1000)
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