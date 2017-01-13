Page({
  data: {
    storeList: [{
        src: "../imgs/store_icon/timthumb.jpg",
        storeName: "Beny's Pizza",
        address: "(next to QSI) 1st Floor, Fenghua Theater, Gongyuan Rd, Shekou",
        minOrder: "",
        deliveryFee: "",
        foodType: "American, Italian, Pizza",
        time: "11:00am - 10:30pm",
        scoreList: [1, 1, 1, 1, 0],
        ratingsCount: 54
      },{
        src: "../imgs/store_icon/timthumb2.jpg",
        storeName: "Little India",
        address: "56, 2/F, AN. Area, Polycultural Centre, Houhaibin Ave, anshan District, Shenzhen. 518054. Metro Houhai St. Exit D.1",
        minOrder: 60,
        deliveryFee: 8,
        foodType: "Alcohol, Indian, Nepalese",
        time: "11:00am - 10:30pm",
        scoreList: [1, 1, 1, 1, 1],
        ratingsCount: 4
        
      },{
        src: "../imgs/store_icon/timthumb3.jpg",
        storeName: "PHO Vietnamese",
        address: "106B New Cross Plaza, No.2051 Nanhai Avenue, Nanshan",
        minOrder: 40,
        deliveryFee: 7,
        foodType: "Vietnamese",
        time: "06:00pm - 09:30pm",
        scoreList: [1, 1, 1, 0, 0],
        ratingsCount: 27
      },{
        src: "../imgs/store_icon/timthumb4.jpg",
        storeName: "Sun Shi Jiao Zi Guan",
        address: "Wan Xia Road #50 (Dongjiaotao), Shekou (Formerly Under Sea Taste)",
         minOrder: 40,
        deliveryFee: "",
        foodType: "Chinese",
        time: " 05:00pm - 10:59pm",
        scoreList: [1, 1, 0, 0, 0],
        ratingsCount: 20
      },{
        src: "../imgs/store_icon/timthumb5.jpg",
        storeName: "Tony's Kitchen",
        address: "No. 92-5, Shang Le Street, Shekou",
         minOrder: "",
        deliveryFee: "",
        foodType: "American, German, Italian, Mexican, Pizza",
        time: " 11:00am - 11:00pm",
        scoreList: [1, 1, 1, 1, 1],
        ratingsCount: 32
      },{
        src: "../imgs/store_icon/timthumb4.jpg",
        storeName: "Sun Shi Jiao Zi Guan",
        address: "Wan Xia Road #50 (Dongjiaotao), Shekou (Formerly Under Sea Taste)",
         minOrder: 40,
        deliveryFee: "",
        foodType: "Chinese",
        time: " 05:00pm - 10:59pm",
        scoreList: [1, 1, 1, 1, 1],
        ratingsCount: 20
      },{
        src: "../imgs/store_icon/timthumb5.jpg",
        storeName: "Tony's Kitchen",
        address: "No. 92-5, Shang Le Street, Shekou",
         minOrder: "",
        deliveryFee: "",
        foodType: "American, German, Italian, Mexican, Pizza",
        time: " 11:00am - 11:00pm",
        scoreList: [1, 1, 1, 1, 0],
        ratingsCount: 32
      }]
  },

  loadMore: function() {
    this.setData({
      showLoading: true
    });
    var storeList = [{
        src: "../imgs/store_icon/timthumb.jpg",
        storeName: "Beny's Pizza",
        address: "(next to QSI) 1st Floor, Fenghua Theater, Gongyuan Rd, Shekou",
        minOrder: "",
        deliveryFee: "",
        foodType: "American, Italian, Pizza",
        time: "11:00am - 10:30pm",
        scoreList: [1, 1, 1, 1, 0],
        ratingsCount: 54
      },{
        src: "../imgs/store_icon/timthumb2.jpg",
        storeName: "Little India",
        address: "56, 2/F, AN. Area, Polycultural Centre, Houhaibin Ave, anshan District, Shenzhen. 518054. Metro Houhai St. Exit D.1",
        minOrder: 60,
        deliveryFee: 8,
        foodType: "Alcohol, Indian, Nepalese",
        time: "11:00am - 10:30pm",
        scoreList: [1, 1, 1, 1, 1],
        ratingsCount: 4
        
      },{
        src: "../imgs/store_icon/timthumb3.jpg",
        storeName: "PHO Vietnamese",
        address: "106B New Cross Plaza, No.2051 Nanhai Avenue, Nanshan",
        minOrder: 40,
        deliveryFee: 7,
        foodType: "Vietnamese",
        time: "06:00pm - 09:30pm",
        scoreList: [1, 1, 1, 0, 0],
        ratingsCount: 27
      }];

      setTimeout(function() {
        this.setData({
          storeList: this.data.storeList.concat(storeList),
          showLoading: false
        });
      }.bind(this), 1000);
    
  }
})