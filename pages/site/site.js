// pages/site/site.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isitem:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  radioCheckedChange: function (e) {
    this.setData({
      radioCheckVal: e.detail.value
    })
  },
  
  clickitem(e){
    this.setData({ isitem: e.currentTarget.dataset.id })
  },

})