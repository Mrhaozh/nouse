//index.js
//获取应用实例
var util = require("../../utils/network.js");
const app = getApp();
Page({
  data: {
    datalist:'123',
    eid: app.globalData.eid,
    keyword:'',
    swiperlist: ['../images/swiper_1.jpg', '../images/swiper_1.jpg'],
    adlist: [{ id: '1', img: '../images/ad_1.jpg', title: '力荐美味大杏仁', desc: 'Almond' }, { id: '2', img: '../images/ad_2.jpg', title: '力荐美味大杏仁', desc: 'Almond' }, { id: '3', img: '../images/ad_3.jpg', title: '力荐美味大杏仁', desc: 'Almond' }, { id: '4', img: '../images/ad_4.jpg', title: '力荐美味大杏仁', desc: 'Almond' }, { id: '5', img: '../images/ad_5.jpg', title: '力荐美味大杏仁', desc: 'Almond' }, { id: '6',img: '../images/ad_6.jpg', title: '力荐美味大杏仁', desc: 'Almond' }],
    goodslist: [{ img: '../images/ad_5.jpg', title: '拼购5折起', desc: '2人开团 低至6.6元' }, { img: '../images/ad_3.jpg', title: 'M元N件', desc: '36元2件 56元3件' }, { img: '../images/ad_6.jpg', title: '新品尝鲜', desc: '每周一三五上新' }, { img: '../images/ad_7.jpg', title: '0元试吃', desc: '好品质 试新鲜' }, { img: '../images/ad_1.jpg', title: '新品尝鲜', desc: '每周一三五上新' }],
  },

  //事件处理函数
  //搜索框输入
  input:function(e){
    console.log(e)
  var _this=this;
  _this.setData({
    keyword:e.detail.value
  })
  },
  //搜索接口
  search:function(){
    var _this=this;
    var keyword=_this.data.keyword;
    console.log(keyword);
  },
  //详情页面跳转
  goodsxq:function(e){
  //console.log(e)
  //console.log(e.currentTarget.dataset.hi)
  var id = e.currentTarget.dataset.hi;
    wx.navigateTo({
      url: '/pages/goodsxq/goodsxq?id='+id,
    })
  },
  //刷新
  onPullDownRefresh: function () {
    setTimeout(function(){wx.stopPullDownRefresh()},2000);
  },
  //加载更多
  onReachBottom: function () {
    wx.showLoading({
      title: '正在加载',
    })
  setTimeout(function(){wx.hideLoading()},2000);
  },
  onLoad: function () {
    var _this=this;
    //console.log(_this.data.eid);
   // _this.getdata('http://47.94.97.161:808/Ad/getad','goodslist');
  
   util.getdata('http://47.94.97.161:808/Ad/getad', {}, 'POST').then(function(res){
     console.log(res)
   });
   //console.log(data);
    //console.log(res);
    console.log('onload');
  },
  onShow:function(){
  console.log('onshow');
  },
  onShareAppMessage:function(){
    console.log("分享")
  },

})
