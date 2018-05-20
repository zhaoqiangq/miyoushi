// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  //完成
  geren() {
    wx.navigateTo({
      url: '../resume/resume'
    })
  },
  //意向管理
  purpose() {
    wx.navigateTo({
      url: '../purpose/purpose'
    })
  },
  //客服
  kefu() {
    wx.navigateTo({
      url: '../kefu/kefu'
    })
  },
  //设置
  set() {
    wx.navigateTo({
      url: '../set/set'
    })
  },
  //实名认证
  approve() {
    wx.navigateTo({
      url: '../approve/approve'
    })
  }
})