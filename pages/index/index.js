Page({
  data:{
    // text:"这是一个页面"
    areaLists: ["Select Area","All City &amp; Shenzhen Bay","Bao'An Arcadia (Taoyuan Ju)","Bao'An Central District",
    "Bao'An Gems Cube","Bao'An Lingzhi","Bao'An Xi Xiang","Chegongmiao / Zhuzilin","Coastal City","Futian - Bagualing &amp; Yuanling",
    "Futian - Honey Lake &amp; Jingtian","Futian - Shangmeilin","Futian CBD","Futian Free Trade Zone",
    "Futian Huaqiangbei &amp; Science Museum","Futian Shang &amp; XiaSha","Garden City","Hi Tech Park - Nanshan",
    "Longgang - Bantian","Longgang Central City","Longhua - Longhua","Longhua - Minzhi","Luohu - Dongmen Laojiei / Hubei",
    "Luohu - Guomao &amp; Kinglory Plaza","Luohu - Huangbeiling &amp; Yijing","Luohu - KK Mall &amp; MixC",
    "Luohu - Shuibei &amp; Tianbei","Nanshan - Qianhai","Nanshan - Xili Taoyuan Village","OCT / Window of the World",
    "Shekou","Shenzhen University - Nanshan","University Town - Xili","Yantian - Shatoujiao"],


    buildingLists: ["Select Building","Excellence City Phase 1 (Zhuoyue Cheng 1)","KKmall Jinlong Dasha( KK Mall Building D)",
    "Lijin Commercial Hotel","VTech Research &amp; Development Building(Weiyida Yanfa Dalou)","126 Building","1866 Garden",
    "3NOD Technology Building","51 Dasha","7 Days Inn (Cun Jin Da Sha Floors 10-21)","7 Days Inn (HuaDa Dasha) - No.65 Taizi Rd",
    "7 Days Inn (Si Hai)"],


    fancyLists: ["Show Everything","Alcohol","American","Australian","Bakery","Chinese","Coffee","Dutch","English","Filipino",
    "French","German","Healthy","Hong Kongese","Indian","Indonesian ","Italian","Japanese","Kebabs","Korean","Malaysian","Mexican",
    "Middle Eastern","Nepalese","Pizza","Seafood","Singaporean","Spanish","Sushi","Thai","Turkish","Vietnamese"],

    areaIndex: 0,
    buildingIndex: 0,
    fancyIndex: 0,
    isDisable: false,
    isLoading: false
  },

  onLoad:function() {
      // var that = this; 
      // wx.request({
      //     url: 'http://gank.io/api/data/Android/30/1',
      //     method: 'GET',
      //     success:function(res) {
      //         console.log(res.data.results);
      //     }

      // })
  },

  /**
   * 监听普通picker选择器
   */
  listenerPickerSelected: function(e) {
      //改变areaIndex值，通过setData()方法重绘界面
      var data = {};
      data[e.target.id + "Index"] = parseInt(e.detail.value);
      var key = e.target.id + "Index"
      this.data[key] = parseInt(e.detail.value)
      console.log(this.data);
      this.setData(this.data);
  },
  clickButton: function(e) {
    this.setData({
      isDisable: true,
      isLoading: true
    });
    wx.navigateTo({
      url: "../store_list/store_list"
    });
    this.setData({
      isDisable: false,
      isLoading: false
    });
  }
})