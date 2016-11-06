Page({
    data: {
        message: 'Hello MINA!'
    },
    bindStartTimeChange:function(e){
        console.log(e);
       this.setData({
        startDate: e.detail.value
        })
    },
    goToBack:function(){
        console.log('------------navigateBack');
        
        wx.navigateBack({delta:1});
    },
  onLoad: function(option){
    console.log(option.query,2019)
  }
  
});