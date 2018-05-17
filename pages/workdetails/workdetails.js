// pages/workdetails/workdetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //是否展示全部
    isquanbu:false
  },
  //展示全部点击事件
  clickquanbu(){
    this.setData({ isquanbu: true })
  }
})