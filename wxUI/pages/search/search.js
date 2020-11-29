Page({
    data: {
      searchInput:''
    },
    search: function (e) {
        console.log(e.detail.value)
        this.setData({
            searchInput: e.detail.value
        })
    },
    onLoad: function (options) { },
})