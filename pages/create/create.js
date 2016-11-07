Page({
    data: {
        money: '',
        secret: '公开',
        text: '亲爱的同学：同窗三载，温馨如昨，悲欢岁月，依稀如梦。同窗三载，温馨如昨，悲欢岁月，依稀如梦。但我们相信：无论你事业辉煌，还是暂时失意;无论你身居要职，还是闲游桃源;同窗之情不变。往事如烟，多少回梦里相聚。我们想约你，约你重续昨日旧梦，听听久违的声音，看看熟悉的面孔，诉诉离别的思绪。让你我抛开尘世的喧嚣、摆脱身边的烦恼，让心栖息，忘却忧愁;说说心里话，聊聊同学情。在二月，这个热闹喜悦的冬日，我们约定在母校相会，希望你能来重温那段甜美而浪漫的回忆。'
    },
    bindStartTimeChange: function(e) {
        this.setData({
            startDate: e.detail.value
        });
    },
    onShow: function(option) {
        wx.setNavigationBarTitle({
            title: '创建报名'
        });
    },
    bindEndTimeChange: function(e) {
        this.setData({
            endDate: e.detail.value
        });
    },
    goToBack: function() {
        console.log('------------navigateBack');
        wx.navigateBack({
            delta: 1
        });
    },
    selectMap: function(e) {
        var _this = this;
        var latitude = e.target.dataset.latitude || '';
        var longitude = e.target.dataset.longitude || '';
        console.log(latitude)
        console.log(longitude)
        wx.openLocation({
            latitude: latitude,
            longitude: longitude,
            success: function(e) {
                console.log('打开地图');
                console.log(e);
                wx.chooseLocation({
                    success: function(e) {
                        console.log('选择地图');
                        console.log(e);
                        _this.setData({
                            latitude: e.latitude,
                            longitude: e.longitude,
                            addressName: e.address
                        });
                    }
                });
            },
            fail: function() {},
            complete: function() {}
        });

        // wx.navigateTo({
        //     url: '/pages/map/map?id=' + e.target.dataset.tpl + '&theme=' + e.target.dataset.theme
        // });
    },
    secret: function() {
        var _this = this;
        var list = ['公开', '私有'];
        wx.showActionSheet({
            itemList: list,
            success: function(res) {
                if (!res.cancel) {
                    console.log(res.tapIndex);
                    _this.setData({
                        secret: list[res.tapIndex]
                    });
                }
            }
        });
    },
    formSubmit: function(e) {
        var value = e.detail.value || {};
        var status = true;
        wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
        });
        // wx.request({
        //     url: 'https://www.baidu.com/', //仅为示例，并非真实的接口地址
        //     data: {
        //         x: '',
        //         y: ''
        //     },
        //     header: {
        //         'Content-Type': 'application/json'
        //     },
        //     success: function(res) {
        //         console.log(res.data)
        //     }
        // });
        //console.log(e);
        //console.log(e.detail.value);
        for (var key in value) {
            if (!value[key]) {
                status = false;
            }
        }
        if (status) {
            wx.showModal({
                title: '提交数据',
                content: 'e.detail.value',
                success: function(res) {
                    if (res.confirm) {
                        console.log('用户点击确定')
                    }
                }
            });
        } else {
            wx.showModal({
                title: '提交数据',
                content: '数据填写不完整',
                success: function(res) {
                    if (res.confirm) {
                        console.log('用户点击确定')
                    }
                }
            });
        }

    },
    onLoad: function(option) {
        console.log('query', option.id);
        this.setData({
            imageUrl: option.id,
            theme: option.theme
        });
    }

});