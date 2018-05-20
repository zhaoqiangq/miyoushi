// pages/jigouinddex/jigouindex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://pic.86sb.com/sbgjgg/2018-04-28/201804281332156.jpg',
      'http://pic.86sb.com/sbgjgg/2018-04-28/201804281332156.jpg',
      'http://pic.86sb.com/sbgjgg/2018-04-28/201804281332156.jpg'
    ],
    isactive:true
  },

  zhaoping(){
    this.setData({
      isactive: true
    })
  },
  jianjie() {
    this.setData({
      isactive: false
    })
  }
})