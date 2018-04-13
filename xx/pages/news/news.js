// pages/news/news.js
var timefriend=require("../../utils/time.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [{ id: '1', img: '../images/ad_1.jpg', time: '', title: '劳力士Submariner', desc: '潜航者' }, { id: '2', img: '../images/ad_1.jpg', time: '', title: '劳力士Submariner', desc: '潜航者' }, { id: '3', img: '../images/ad_1.jpg', time: '', title: '劳力士Submariner', desc: '潜航者' }, { id: '4', img: '../images/ad_1.jpg', time: '', title: '劳力士Submariner', desc: '潜航者' }, { id: '5', img: '../images/ad_1.jpg', time: '', title: '劳力士Submariner', desc: '潜航者' }, { id: '6', img: '../images/ad_1.jpg', time: '', title: '劳力士Submariner', desc: '潜航者' }, { id: '7', img: '../images/ad_1.jpg', time: '', title: '劳力士Submariner', desc: '潜航者' }],
    current:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this=this;
    var lists=_this.data.lists;
    for(var i=0;i<lists.length;i++){
      lists[i].time = timefriend.friendly_time(Date.parse(new Date())/1000);
    }
    _this.setData({lists:lists});
  },
  //快讯详情
  goodsxq:function(e){
    //console.log(e.currentTarget.dataset.id);
    var id= e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/newsxq/newsxq?id='+id,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  onoff:function(e){
    console.log(e.target.dataset.current);
    var _this=this;
    _this.setData({
      current: e.target.dataset.current
    })
  },
  eventchange:function(e){
  console.log(e.detail.current);
  var _this = this;
  _this.setData({
    current: e.detail.current
  })
  },
  onerefresh:function(){
    console.log("onerefresh");
  },
  oneloadmore:function(){
    console.log("oneloadmore")
  },
  tworefresh: function () {
    console.log("tworefresh");
  },
  twoloadmore: function () {
    console.log("twoloadmore")
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})