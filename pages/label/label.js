// pages/label/label.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    islabel:false
  },

  //添加标签
  addlabel(){
    this.setData({
      islabel: true
    })
  },
  //取消添加 
  quxiao(){
    this.setData({
      islabel: false
    })
  }
})