// pages/button/button.js
Page({
    data: {
        barList: ['选项一','选项二','选项三'],
        barIndex:0
    },
    clickBar:function(e){
        this.setData({
            barIndex:e.currentTarget.dataset.index
        })
    },
    onLoad: function (options) { },
})