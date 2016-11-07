var data = require('../../data/data.js');
console.log(data);
var setTitle = function() {
	wx.setNavigationBarTitle({
		title: '查看详情'
	});
};
setTitle();
console.log(data.tplBanner['002']);
Page({
	data: {

		banner: data.tplBanner['002']
	},
	onShow: function() {
		setTitle();
	},
	tel: function(e) {
		var phoneNumber = e.target.dataset.tel;
		console.log(phoneNumber);
		if (!phoneNumber) {
			return;
		}
		wx.makePhoneCall({
			phoneNumber: phoneNumber
		});
	},
	join: function() {
		wx.showToast({
			title: '报名成功',
			icon: 'success',
			duration: 2000
		});
	},
	onLoad: function(options) {
		var _this = this;
		var dataObj = {
			des: '同学聚会',
			banner: data.tplBanner[options.id]
		};
		data.list.forEach(function(item, index) {
			if (item.id === options.id) {
				for (var key in item) {
					dataObj[key] = item[key];
				}
			}
		});
		console.log(dataObj);
		console.log(555555555555555, options);

		_this.setData(dataObj);
		setTitle();
	}
});