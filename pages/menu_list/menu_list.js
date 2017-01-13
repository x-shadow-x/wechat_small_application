// pages/detail/index.js
Page({
  data:{
    menuList:[{
      src: "../imgs/food1.jpg",
      goodsName: "Pork Ribs In Brown Sauce",
      goodsPrice: 14,
      saleNum: 120,
      num: 0,
      scoreList: [1, 1, 1, 1, 0]
    },{
      src: "../imgs/food1.jpg",
      goodsName: "Pork Ribs",
      goodsPrice: 14,
      saleNum: 120,
      num: 0,
      scoreList: [1, 1, 1, 1, 1]
    },{
      src: "../imgs/food1.jpg",
      goodsName: "Cheese Pizza",
      goodsPrice: 14,
      saleNum: 120,
      num: 0,
      scoreList: [1, 1, 1, 0, 0]
    },{
      src: "../imgs/food1.jpg",
      goodsName: "Pepperoni Pizza",
      goodsPrice: 14,
      saleNum: 120,
      num: 0,
      scoreList: [1, 1, 1, 0, 0]
    },{
      src: "../imgs/food1.jpg",
      goodsName: "Meat Lover",
      goodsPrice: 14,
      saleNum: 120,
      num: 0,
      scoreList: [1, 1, 1, 1, 1]
    }],
    orderList: [],
    sumNum: 0,
    minPrice: 20,
    totalPrice: 0,
    disableScroll: false,
    showOrder: false,
    showHover: false,
    showLoading: false
  },

  handleSub: function(e) {
    var index = e.target.dataset.index;
    var increment = -1;
    if(this.data.menuList[index].num < 1) {
      increment = 0;
    }
    handleBuy(this, index, increment);
  },
  handleAdd: function(e) {
    handleBuy(this, e.target.dataset.index, 1);
  },
  toggleOrder: function() {
    if(this.data.sumNum > 0) {
      this.setData({
        disableScroll: !this.data.disableScroll,
        showOrder: !this.data.showOrder,
        showHover: !this.data.showHover
      });
    }
  },
  loadMore: function() {
    this.setData({
      showLoading: true
    });
    var res = [{
      src: "../imgs/food1.jpg",
      goodsName: "Pork Ribs In Brown Sauce",
      goodsPrice: 14,
      saleNum: 120,
      num: 0,
      scoreList: [1, 1, 1, 1, 0]
    },{
      src: "../imgs/food1.jpg",
      goodsName: "Pork Ribs",
      goodsPrice: 14,
      saleNum: 120,
      num: 0,
      scoreList: [1, 1, 1, 1, 1]
    },{
      src: "../imgs/food1.jpg",
      goodsName: "Cheese Pizza",
      goodsPrice: 14,
      saleNum: 120,
      num: 0,
      scoreList: [1, 1, 1, 0, 0]
    }];
    setTimeout(function() {
      this.setData({
        menuList: this.data.menuList.concat(res),
        showLoading: false
      });
    }.bind(this), 1000);
    
  }
})

/**
 * 添加、删除菜品处理函数
 */
function handleBuy(that, index, increment) {
  var index = index;
  var increment = +increment;
  var data = that.data;
  var orderList = data.orderList || [];
  var totalPrice = that.data.totalPrice;
  var sumNum = data.sumNum;
  var menuList = data.menuList;
  var num = menuList[index].num;
  var goodsPrice = menuList[index].goodsPrice;
  var goodsName = menuList[index].goodsName;
  var orderMap = {};


  for(var i = 0, len = orderList.length; i < len; i++) {
    orderMap[orderList[i].goodsName] = orderList[i].index;
  }


  // 判断当前商品是否已经在购物车数组中
  var listIndex = orderMap[menuList[index].goodsName];

  console.log(listIndex);

  menuList[index].num = menuList[index].num + increment;
  sumNum = sumNum + increment;
  totalPrice = totalPrice + goodsPrice * increment;
  
  if(listIndex || listIndex == 0) {
    orderList[listIndex].num = menuList[index].num;
    orderList[listIndex].sumPrice = goodsPrice * menuList[index].num;
  } else {
    orderMap[menuList[index].goodsName] = orderList.length;
    orderList.push({
      'goodsName': goodsName,
      'sumPrice': goodsPrice * menuList[index].num,
      'index': orderMap[menuList[index].goodsName],
      'num': 1,
      'index': orderList.length
    });
  }

  that.setData({
    menuList,
    sumNum,
    totalPrice,
    "orderList": orderList
  });
}