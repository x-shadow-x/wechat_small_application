Page({
  data: {
    storeList: [{
        message: 'foo',
      },{
        message: 'bar'
      }]
  },

  asd: function() {
    console.log(123);
    this.setData({
      storeList: [{
        message: 'foo',
      },{
        message: 'bar'
      }]
    });
  }
})