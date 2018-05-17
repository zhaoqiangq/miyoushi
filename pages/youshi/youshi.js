// pages/youshi/youshi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //关闭广告位
    isadv:true,
    //页面遮罩滚动开关
    mask: false,
    //radio值
    radioCheckVal: "最新",
    radioCheckValage: "不限",
    radioCheckValsubject: "不限",
    radioCheckValeducation: "不限",
    radioCheckValundergo: "不限",
    radioCheckValgender: "不限",
    radioCheckValpay: "不限",
    radioCheckValregion: "不限"
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
  /**
   * 添加职位
   */
  isaddshow: function () {
    this.setData({ isadd: true, mask: true })
  },
  /**
  * 点击遮罩关闭添加职位
  */
  isaddhide: function () {
    this.setData({ isadd: false, mask: false })
  },
  /**
  * 请求下一页数据
  */
  scrolldalist() {
    console.log('1111');
  },
  //radioChecked 函数
  radioCheckedChange: function (e) {
    this.setData({
      radioCheckVal: e.detail.value
    })
  },
  radioage: function (e) {
    this.setData({
      radioCheckValage: e.detail.value
    })
  },
  radiosubject: function (e) {
    this.setData({
      radioCheckValsubject: e.detail.value
    })
  },
  radioeducation: function (e) {
    this.setData({
      radioCheckValeducation: e.detail.value
    })
  },
  radioundergo: function (e) {
    this.setData({
      radioCheckValundergo: e.detail.value
    })
  },
  radiogender: function (e) {
    this.setData({
      radioCheckValgender: e.detail.value
    })
  },
  radiopay: function (e) {
    this.setData({
      radioCheckValpay: e.detail.value
    })
  },
  radioregion: function (e) {
    this.setData({
      radioCheckValregion: e.detail.value
    })
  },
  //form提交
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  //form重置
  formReset: function () {
    console.log('form发生了reset事件')
  },
  //切换地区
  qiehuan() {
    wx.navigateTo({
      url: '../site/site'
    })
  },
})