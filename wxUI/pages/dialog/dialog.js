// pages/button/button.js
Page({
    data: {
        prompt:false
    },
    prompt:function(e){
        this.setData({
            prompt: !this.data.prompt
        })
    },
    onLoad: function (options) { },
})