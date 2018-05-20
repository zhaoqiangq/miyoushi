// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex: ['男', '女'],
    objectArray: [
      {
        id: 0,
        name: '男'
      },
      {
        id: 1,
        name: '女'
      }
    ], 
    index: '',
    array: [3,4,5,7,9,17,],
    indexs:''
  },

  //完成
  name() {
    wx.navigateTo({
      url: '../name/name'
    })
  },
  //性别
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //教龄
  bindPickerChangex: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      indexs: e.detail.value
    })
  },
})