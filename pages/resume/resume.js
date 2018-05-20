// pages/resume/resume.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  //基本信息
  message() {
    wx.navigateTo({
      url: '../message/message'
    })
  },
    //个人标签 
  label() {
    wx.navigateTo({
      url: '../label/label'
    })
  },
  //个人简介 
  intro() {
    wx.navigateTo({
      url: '../intro/intro'
    })
  },
  //添加教学经历
  teach() {
    wx.navigateTo({
      url: '../teach/teach'
    })
  },
  //添加教育经历
  education() {
    wx.navigateTo({
      url: '../education/education'
    })
  },
  //添加荣誉奖项
  honor() {
    wx.navigateTo({
      url: '../honor/honor'
    })
  },
})