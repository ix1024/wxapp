var data = require('../../data/data.js');
Page({
    getTpl: function(e) {
        console.log(e);
        console.log(e.target.dataset.tpl);
        wx.navigateTo({
            url: '/pages/create/create?id=' + e.target.dataset.tpl + '&theme=' + e.target.dataset.theme
        });
    },
    onLoad: function() {
        this.setData({
            tpls: data.tpls
        });
    },
    onShow: function() {
        wx.setNavigationBarTitle({

            title: '选择模板'
        });
    }
});