// pages/youshidetails/youshidetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     ispay:1,  //切换支付信息
     isyue:true,   //是否有余额
     isactive:false,  //选择支付方式
     isphone:false  //is 电话
  },

  /**
   * 点击支付
   */
  clickpay(){
    this.setData({ ispay: 2 })
  },
    /**
   * 支付成功
   */
  pay(){
    this.setData({ ispay: 3})
  },
  /**
   * 支付成功完成
   */
  returns() {
    this.setData({ ispay: 1 })
  },
   /**
   * 拨打电话
   */
  iphone(){
    this.setData({ isphone: true })
  },
  /**
   * 取消拨打电话
   */
  cancel(){
    this.setData({ isphone: false })
  },
  //充值
  recharge() {
    wx.navigateTo({
      url: '../wallet/wallet'
    })
  }
})