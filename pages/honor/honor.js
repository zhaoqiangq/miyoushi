// pages/honor/honor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
})