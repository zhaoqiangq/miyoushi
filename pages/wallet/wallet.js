// pages/wallet/wallet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radioCheckValage:"60U币"
  },
  //radioChecked 函数
  radioage: function (e) {
    this.setData({
      radioCheckValage: e.detail.value
    })
  },
  //充值
  recharge() {
    wx.navigateTo({
      url: '../rechasu/rechasu'
    })
  }
})