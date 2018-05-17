//index.js
//获取应用实例
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    isplay: false,
    //音频数据
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
  },
  //播放
  audioPlay: function (e) {
    this.audioCtx.play();
    this.setData({
      isplay: true,
    })
  },
  //暂停
  audioPause: function () {
    this.audioCtx.pause();
    this.setData({
      isplay: false,
    })
  },
  /**音频进度 */
  audioPress: function (e) {
    var progress = parseInt((e.detail.currentTime / e.detail.duration) * 100)
    this.setData({
      audioPress: progress
    })
  }

})