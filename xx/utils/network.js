function request(url, data = {}, method = "GET") {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      data: data,
      method: method,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //console.log(res.data);
            resolve(res.data);
      },
      fail: function (err) {
        reject(err)
        console.log("failed")
      }
    })
  });
}
module.exports = {
  getdata: request
}