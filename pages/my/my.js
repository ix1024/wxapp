var app = getApp();
Page({
    data:{
        userInfo:{},
        userName:'kingwell',
        signature:'心若没有归属感，走到发里都是流浪。'
    },
    onLoad:function(){
        wx.setNavigationBarTitle({
        title: '我'
        });
        var that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo){
            console.log(userInfo);
        //更新数据
        that.setData({
            userInfo:userInfo
        });
        });

        
    }
});