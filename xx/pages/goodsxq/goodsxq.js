// pages/goodsxq/goodsxq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsimage: [{ img: '../images/swiper_1.jpg' }, { img: '../images/swiper_1.jpg' }, { img: '../images/swiper_1.jpg' }, { img: '../images/swiper_1.jpg' }, { img: '../images/swiper_1.jpg' }, { img: '../images/swiper_1.jpg' }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var id=options.id;
    console.log(id);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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
  previewImage:function(){
    var _this=this;
    var goodsimage = _this.data.goodsimage;
    var imgurl=[];
    for(var i=0;i<goodsimage.length;i++){
      imgurl[i]=goodsimage[i]['img'];
    }
    //console.log(imgurl);
    wx.previewImage({
      urls: imgurl,
    })
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