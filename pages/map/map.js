Page({
  onLoad: function() {
    wx.getLocation({
      success: function(e) {
         console.log('获取地图');
        console.log(e);
      },
      fail: function() {},
      complete: function() {}
    });
    wx.chooseLocation({
      success: function(e) {
        console.log('选择地图');
        console.log(e);
      }
    });
  },
  data: {
    markers: [{
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园',
      desc: '我现在的位置'
    }],
    covers: [{
      latitude: 23.099794,
      longitude: 113.324520,
      iconPath: '../images/car.png',
      rotate: 10
    }, {
      latitude: 23.099298,
      longitude: 113.324129,
      iconPath: '../images/car.png',
      rotate: 90
    }]
  }
});