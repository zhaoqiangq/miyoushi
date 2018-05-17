// pages/youshi/youshi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isadv:true
  },

  /**
  * 关闭广告位
  */
  closeadv: function () {
    this.setData({ isadv: false })
  },
  /**
 * 请求下一页数据
 */
  scrolldalist() {
    console.log('1111');
  },
})