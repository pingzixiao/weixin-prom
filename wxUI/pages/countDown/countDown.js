Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 13,
    name:"打印条码",
    showNum: false,
    showName: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // this.Numdown()
  },
  Numdown: function() {    
    
    this.setData({
      showNum: true,
      showName: false
    })
    var num = this.data.num;
    setTimeout(()=> {
      this.setData({
        num: num - 1
      })
      if (num == 0) {
        this.setData({
          showNum: false,
          showName: true,
          num: 13
        })

      } else {
        this.Numdown()
      }
    }, 1000)
    
  }
 })