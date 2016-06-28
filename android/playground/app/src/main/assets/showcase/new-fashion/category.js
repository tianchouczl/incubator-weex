/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/918304b35162c0fa434158149beb7c82", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(19);

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      NUMBER_248: 248,
	      NUMBER_155: 155,
	      NUMBER_373: 373,
	      NUMBER_237: 237,
	      NUMBER_186: 186,
	      NUMBER_208: 208,
	      NUMBER_750: 750,
	      subItemBg: '//gw.alicdn.com/tps/TB1QzUfLVXXXXaOXVXXXXXXXXXX-248-86.jpg',
	      items: [],
	      subItems: []
	    }},
	    methods: {
	      ready: function () {
	        var self = this;
	        self._loadData();
	      },

	      _loadData: function () {
	        var self = this;
	        var content = {
	          "main": [{
	            "shopList": [{
	              "id": "619123122",
	              "picUrl": "//img.alicdn.com/tps/i1/TB1Cl5MLVXXXXXTaXXXSutbFXXX.jpg",
	              "finalScore": "0.884765209440857",
	              "shopUrl": "http://liangpinpuzi.tmall.com/campaign-3735-7.htm",
	              "entityType": "SHOP",
	              "brandId": "7724367"
	            }, {
	              "id": "880734502",
	              "picUrl": "//img.alicdn.com/tps/i1/TB1HN2XLVXXXXbkXFXXSutbFXXX.jpg",
	              "finalScore": "0.8822246866512714",
	              "shopUrl": "http://sanzhisongshu.tmall.com/campaign-3735-7.htm",
	              "entityType": "SHOP",
	              "brandId": "147280915"
	            }, {
	              "id": "392147177",
	              "picUrl": "//img.alicdn.com/tps/i1/TB1yq6dLVXXXXbXXpXXSutbFXXX.jpg",
	              "finalScore": "0.8805854724243631",
	              "shopUrl": "http://zhouheiya.tmall.com/campaign-3735-6.htm",
	              "entityType": "SHOP",
	              "brandId": "111496"
	            }, {
	              "id": "2081058060",
	              "picUrl": "//img.alicdn.com/tps/i1/TB1w4jxLVXXXXaxXXXXtKXbFXXX.gif",
	              "finalScore": "0.8640439551049249",
	              "shopUrl": "http://rongxintang.tmall.com/campaign-3735-6.htm",
	              "entityType": "SHOP",
	              "brandId": "8709890"
	            }],
	            "finalScore": "4.657333333333334",
	            "industryUrl": null,
	            "entityType": "OTHER",
	            "colour": "#fff5a3",
	            "industryTitle": null,
	            "bannerUrl": "//pages.tmall.com/wow/act/15617/newfood?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_12_735362&pos=1",
	            "leftBannerImg": "http://img.alicdn.com/tps/i1/TB1LHh4MXXXXXbsXpXXeWjm2pXX-750-240.jpg",
	            "_pos_": "1",
	            "industryBenefit": null,
	            "industryId": "12",
	            "industryImg": null,
	            "rightBannerImg": "//img.alicdn.com/tps/i4/TB1wshUMXXXXXXaXVXXeWjm2pXX-750-240.jpg"
	          }, {
	            "shopList": [{
	              "id": "520557274",
	              "picUrl": "//img.alicdn.com/tps/i1/TB1aMjXLVXXXXbUaXXXSutbFXXX.jpg",
	              "finalScore": "0.8986382989845325",
	              "shopUrl": "http://newbalance.tmall.com/campaign-3735-20.htm",
	              "entityType": "SHOP",
	              "brandId": "20584"
	            }, {
	              "id": "746866993",
	              "picUrl": "//img.alicdn.com/tps/i1/TB1pXG9LVXXXXaLXFXXSutbFXXX.jpg",
	              "finalScore": "0.8917855242977327",
	              "shopUrl": "http://vans.tmall.com/campaign-3735-19.htm",
	              "entityType": "SHOP",
	              "brandId": "29529"
	            }, {
	              "id": "1612713147",
	              "picUrl": "//img.alicdn.com/tps/i1/TB1jHfXLVXXXXXPXFXXSutbFXXX.jpg",
	              "finalScore": "0.8895943606442631",
	              "shopUrl": "http://dcshoecousa.tmall.com/campaign-3735-8.htm",
	              "entityType": "SHOP",
	              "brandId": "3851662"
	            }, {
	              "id": "2379251418",
	              "picUrl": "//img.alicdn.com/tps/i1/TB1sbLlLVXXXXbeXXXXSutbFXXX.jpg",
	              "finalScore": "0.8881539668874383",
	              "shopUrl": "http://baijinydhw.tmall.com/campaign-3735-2.htm",
	              "entityType": "SHOP",
	              "brandId": "20579"
	            }],
	            "finalScore": "4.545333333333334",
	            "industryUrl": null,
	            "entityType": "OTHER",
	            "colour": "#cbdbfe",
	            "industryTitle": null,
	            "bannerUrl": "//pages.tmall.com/wow/act/15617/ydhw?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_8_735362&pos=2",
	            "leftBannerImg": "http://img.alicdn.com/tps/i3/TB1h4kzLVXXXXawXpXXeWjm2pXX-750-240.jpg",
	            "_pos_": "2",
	            "industryBenefit": null,
	            "industryId": "8",
	            "industryImg": null,
	            "rightBannerImg": "//img.alicdn.com/tps/i4/TB19VMjLVXXXXaeaXXXeWjm2pXX-750-240.jpg"
	          }, {
	            "shopList": [{
	              "id": "811383091",
	              "picUrl": "//img.alicdn.com/tps/i1/TB1q49ZLVXXXXaJXVXXSutbFXXX.jpg",
	              "finalScore": "0.8723682716749482",
	              "shopUrl": "http://tongrentangbj.tmall.com/campaign-3735-9.htm",
	              "entityType": "SHOP",
	              "brandId": "44652"
	            }, {
	              "id": "838914626",
	              "picUrl": "//img.alicdn.com/tps/i1/TB1GQYbLVXXXXaXXVXXSutbFXXX.jpg",
	              "finalScore": "0.5027131908086584",
	              "shopUrl": "http://jouo.tmall.com/campaign-3735-3.htm",
	              "entityType": "SHOP",
	              "brandId": "14170081"
	            }, {
	              "id": "1077716829",
	              "picUrl": "//img.alicdn.com/tps/i1/TB1rdW2LVXXXXagapXXSutbFXXX.jpg",
	              "finalScore": "0.5015387557024262",
	              "shopUrl": "http://wetcode.tmall.com/campaign-3735-14.htm",
	              "entityType": "SHOP",
	              "brandId": "3675642"
	            }, {
	              "id": "1664976033",
	              "picUrl": "//img.alicdn.com/tps/i1/TB1Q.rpLVXXXXXiXpXXSutbFXXX.jpg",
	              "finalScore": "0.5014897109669442",
	              "shopUrl": "http://hanhoohzp.tmall.com/campaign-3735-17.htm",
	              "entityType": "SHOP",
	              "brandId": "78888695"
	            }],
	            "finalScore": "4.526666666666666",
	            "industryUrl": null,
	            "entityType": "OTHER",
	            "colour": "#ffd1b6",
	            "industryTitle": null,
	            "bannerUrl": "//pages.tmall.com/wow/act/15617/getbeauty?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_2_735362&pos=3",
	            "leftBannerImg": "http://img.alicdn.com/tps/i4/TB1Djt9MXXXXXanXXXXeWjm2pXX-750-240.jpg",
	            "_pos_": "3",
	            "industryBenefit": null,
	            "industryId": "2",
	            "industryImg": null,
	            "rightBannerImg": "//img.alicdn.com/tps/i3/TB1_gVQMXXXXXX9XVXXeWjm2pXX-750-240.jpg"
	          }, {
	            "shopList": [{
	              "id": "2153169655",
	              "picUrl": "//img.alicdn.com/tps/i1/TB1nlK7LVXXXXaRXFXXSutbFXXX.jpg",
	              "finalScore": "0.8820210808835905",
	              "shopUrl": "http://ctkicks.tmall.com/campaign-3735-15.htm",
	              "entityType": "SHOP",
	              "brandId": "20584"
	            }, {
	              "id": "2784101115",
	              "picUrl": "//img.alicdn.com/tps/i1/TB1RrS.LVXXXXcrXpXXSutbFXXX.jpg",
	              "finalScore": "0.5930383227012586",
	              "shopUrl": "http://tomtailor.tmall.com/campaign-3735-0.htm",
	              "entityType": "SHOP",
	              "brandId": "213474060"
	            }, {
	              "id": "2183813726",
	              "picUrl": "//img.alicdn.com/tps/i1/TB1kmS_LVXXXXaBaXXXSutbFXXX.jpg",
	              "finalScore": "0.5882558957771681",
	              "shopUrl": "http://huaiyuan.tmall.com/campaign-3735-5.htm",
	              "entityType": "SHOP",
	              "brandId": "29465"
	            }, {
	              "id": "1785908005",
	              "picUrl": "//img.alicdn.com/tps/i1/TB1dB6zLVXXXXcJXXXXSutbFXXX.jpg",
	              "finalScore": "0.5694211862124341",
	              "shopUrl": "http://axonus.tmall.com/campaign-3735-1.htm",
	              "entityType": "SHOP",
	              "brandId": "115035841"
	            }],
	            "finalScore": "4.413955555555555",
	            "industryUrl": null,
	            "entityType": "OTHER",
	            "colour": "#b9eaf2",
	            "industryTitle": null,
	            "bannerUrl": "//pages.tmall.com/wow/act/15617/guojixfs?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_1_735362&pos=4",
	            "leftBannerImg": "http://img.alicdn.com/tps/i3/TB1_T7ALVXXXXXOXXXXeWjm2pXX-750-240.jpg",
	            "_pos_": "4",
	            "industryBenefit": null,
	            "industryId": "1",
	            "industryImg": null,
	            "rightBannerImg": "//img.alicdn.com/tps/i2/TB1s7koLVXXXXafXFXXeWjm2pXX-750-240.jpg"
	          }, {
	            "shopList": [{
	              "id": "2453054335",
	              "picUrl": "//img.alicdn.com/tps/i1/TB1RX_vLVXXXXchXpXXSutbFXXX.jpg",
	              "finalScore": "0.8463447899590267",
	              "shopUrl": "http://nanshizixing.tmall.com/campaign-3735-2.htm",
	              "entityType": "SHOP",
	              "brandId": "844502560"
	            }, {
	              "id": "1041773234",
	              "picUrl": "//img.alicdn.com/tps/i1/TB1Q7jpLVXXXXX8XpXXSutbFXXX.jpg",
	              "finalScore": "0.560952734503075",
	              "shopUrl": "http://dapu.tmall.com/campaign-3735-8.htm",
	              "entityType": "SHOP",
	              "brandId": "14493763"
	            }, {
	              "id": "300031438",
	              "picUrl": "//img.alicdn.com/tps/i1/TB13VC4LVXXXXarXVXXSutbFXXX.jpg",
	              "finalScore": "0.5450674634839442",
	              "shopUrl": "http://kangerxin.tmall.com/campaign-3735-10.htm",
	              "entityType": "SHOP",
	              "brandId": "3781905"
	            }, {
	              "id": "92042735",
	              "picUrl": "//img.alicdn.com/tps/i1/TB1PxYcLVXXXXasaXXXSutbFXXX.jpg",
	              "finalScore": "0.5448023228053981",
	              "shopUrl": "http://shuixing.tmall.com/campaign-3735-10.htm",
	              "entityType": "SHOP",
	              "brandId": "3685660"
	            }],
	            "finalScore": "4.13",
	            "industryUrl": null,
	            "entityType": "OTHER",
	            "colour": "#bbffe5",
	            "industryTitle": null,
	            "bannerUrl": "//pages.tmall.com/wow/act/15617/jfjs?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_4_735362&pos=5",
	            "leftBannerImg": "http://img.alicdn.com/tps/i3/TB1jeoCLVXXXXcoXXXXeWjm2pXX-750-240.jpg",
	            "_pos_": "5",
	            "industryBenefit": null,
	            "industryId": "4",
	            "industryImg": null,
	            "rightBannerImg": "//img.alicdn.com/tps/i4/TB1C5.fLVXXXXb3aXXXeWjm2pXX-750-240.jpg"
	          }, {
	            "shopList": [{
	              "id": "822428555",
	              "picUrl": "//img.alicdn.com/tps/i1/TB1g46aLVXXXXcUXVXXSutbFXXX.jpg",
	              "finalScore": "0.9183458776971917",
	              "shopUrl": "http://playboyyd.tmall.com/campaign-3735-11.htm",
	              "entityType": "SHOP",
	              "brandId": "29510"
	            }, {
	              "id": "196993935",
	              "picUrl": "//img.alicdn.com/tps/i1/TB1pHG8LVXXXXbraXXXSutbFXXX.jpg",
	              "finalScore": "0.9105525246667775",
	              "shopUrl": "https://uniqlo.tmall.com/campaign-3735-56.htm",
	              "entityType": "SHOP",
	              "brandId": "29527"
	            }, {
	              "id": "505753958",
	              "picUrl": "//img.alicdn.com/tps/i1/TB1WKYyLVXXXXXHXXXXSutbFXXX.jpg",
	              "finalScore": "0.90750966370726",
	              "shopUrl": "http://bonas.tmall.com/campaign-3735-11.htm",
	              "entityType": "SHOP",
	              "brandId": "3486580"
	            }, {
	              "id": "2113823580",
	              "picUrl": "//img.alicdn.com/tps/i1/TB1itHkLVXXXXX9XFXXSutbFXXX.jpg",
	              "finalScore": "0.5900977955635289",
	              "shopUrl": "http://kafanya.tmall.com/campaign-3735-7.htm",
	              "entityType": "SHOP",
	              "brandId": "110684218"
	            }],
	            "finalScore": "4.088",
	            "industryUrl": null,
	            "entityType": "OTHER",
	            "colour": "#ffc7c9",
	            "industryTitle": null,
	            "bannerUrl": "//pages.tmall.com/wow/act/15617/neiyi328?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_9_735362&pos=6",
	            "leftBannerImg": "http://img.alicdn.com/tps/i1/TB1tl3tLVXXXXbbXFXXeWjm2pXX-750-240.jpg",
	            "_pos_": "6",
	            "industryBenefit": null,
	            "industryId": "9",
	            "industryImg": null,
	            "rightBannerImg": "//img.alicdn.com/tps/i2/TB1AkIyLVXXXXbjXpXXeWjm2pXX-750-240.jpg"
	          }],
	          "sub": [{
	            "shopList": null,
	            "finalScore": "4.033333333333333",
	            "industryUrl": "//pages.tmall.com/wow/act/15617/zbps?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_3_735362&pos=7",
	            "entityType": "OTHER",
	            "colour": "#bbffe5",
	            "industryTitle": "珠宝配饰",
	            "bannerUrl": null,
	            "leftBannerImg": null,
	            "_pos_": "7",
	            "industryBenefit": "大牌1折秒杀",
	            "industryId": "3",
	            "industryImg": "//img.alicdn.com/tps/i1/TB1s5y.LVXXXXb.aXXXrdvGIFXX-248-155.jpg",
	            "rightBannerImg": null
	          }, {
	            "shopList": null,
	            "finalScore": "3.8773333333333335",
	            "industryUrl": "//pages.tmall.com/wow/act/15617/dqc?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_15_735362&pos=8",
	            "entityType": "OTHER",
	            "colour": "#b4ebff",
	            "industryTitle": "数码",
	            "bannerUrl": null,
	            "leftBannerImg": null,
	            "_pos_": "8",
	            "industryBenefit": "疯抢大牌新品",
	            "industryId": "15",
	            "industryImg": "//img.alicdn.com/tps/i4/TB1_xG.LVXXXXbWaXXXrdvGIFXX-248-155.jpg",
	            "rightBannerImg": null
	          }, {
	            "shopList": null,
	            "finalScore": "3.8359999999999994",
	            "industryUrl": "//pages.tmall.com/wow/act/15617/man?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_6_735362&pos=9",
	            "entityType": "OTHER",
	            "colour": "#cbe9a9",
	            "industryTitle": "男装",
	            "bannerUrl": null,
	            "leftBannerImg": null,
	            "_pos_": "9",
	            "industryBenefit": "新品低至9.9元",
	            "industryId": "6",
	            "industryImg": "//img.alicdn.com/tps/i1/TB1mO2qLVXXXXXiXFXXrdvGIFXX-248-155.jpg",
	            "rightBannerImg": null
	          }, {
	            "shopList": null,
	            "finalScore": "3.243333333333333",
	            "industryUrl": "//pages.tmall.com/wow/act/15617/xihu?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_13_735362&pos=10",
	            "entityType": "OTHER",
	            "colour": "#cdffa4",
	            "industryTitle": "洗护",
	            "bannerUrl": null,
	            "leftBannerImg": null,
	            "_pos_": "10",
	            "industryBenefit": "爆款1分钱抢",
	            "industryId": "13",
	            "industryImg": "//img.alicdn.com/tps/i3/TB1Ft_CLVXXXXX2XXXXrdvGIFXX-248-155.jpg",
	            "rightBannerImg": null
	          }, {
	            "shopList": null,
	            "finalScore": "3.1553333333333335",
	            "industryUrl": "//pages.tmall.com/wow/act/15617/myxfs?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_5_735362&pos=11",
	            "entityType": "OTHER",
	            "colour": "#f8e1ff",
	            "industryTitle": "母婴童装",
	            "bannerUrl": null,
	            "leftBannerImg": null,
	            "_pos_": "11",
	            "industryBenefit": "跨店满299减40",
	            "industryId": "5",
	            "industryImg": "//img.alicdn.com/tps/i4/TB1c.HvLVXXXXXPXpXXrdvGIFXX-248-155.jpg",
	            "rightBannerImg": null
	          }, {
	            "shopList": null,
	            "finalScore": "2.6739999999999995",
	            "industryUrl": "//pages.tmall.com/wow/act/15617/nvzhuang?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_7_735362&pos=12",
	            "entityType": "OTHER",
	            "colour": "#d5cbe8",
	            "industryTitle": "女装",
	            "bannerUrl": null,
	            "leftBannerImg": null,
	            "_pos_": "12",
	            "industryBenefit": "折后用券抢新",
	            "industryId": "7",
	            "industryImg": "//img.alicdn.com/tps/i3/TB1JdfsLVXXXXbRXpXXrdvGIFXX-248-155.jpg",
	            "rightBannerImg": null
	          }, {
	            "shopList": null,
	            "finalScore": "0.0",
	            "industryUrl": "//pages.tmall.com/wow/act/15617/mobilephone?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_14_735362&pos=13",
	            "entityType": "OTHER",
	            "colour": "#c5ffdf",
	            "industryTitle": "手机",
	            "bannerUrl": null,
	            "leftBannerImg": null,
	            "_pos_": "13",
	            "industryBenefit": "1元抢优惠券",
	            "industryId": "14",
	            "industryImg": "//img.alicdn.com/tps/i4/TB1M3zhLVXXXXX4XVXXrdvGIFXX-248-155.jpg",
	            "rightBannerImg": null
	          }, {
	            "shopList": null,
	            "finalScore": "0.0",
	            "industryUrl": "//pages.tmall.com/wow/act/15617/xiangbaohuanxin?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_11_735362&pos=14",
	            "entityType": "OTHER",
	            "colour": "#ffccdc",
	            "industryTitle": "箱包",
	            "bannerUrl": null,
	            "leftBannerImg": null,
	            "_pos_": "14",
	            "industryBenefit": "极致焕新尖货",
	            "industryId": "11",
	            "industryImg": "//img.alicdn.com/tps/i3/TB1gE6kLVXXXXcrXFXXrdvGIFXX-248-155.jpg",
	            "rightBannerImg": null
	          }, {
	            "shopList": null,
	            "finalScore": "0.0",
	            "industryUrl": "//pages.tmall.com/wow/act/15617/newnv?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_10_735362&pos=15",
	            "entityType": "OTHER",
	            "colour": "#fff8ee",
	            "industryTitle": "鞋履",
	            "bannerUrl": null,
	            "leftBannerImg": null,
	            "_pos_": "15",
	            "industryBenefit": "潮品精选鞋履",
	            "industryId": "10",
	            "industryImg": "//img.alicdn.com/tps/i3/TB1.qzpLVXXXXX.XFXXrdvGIFXX-248-155.jpg",
	            "rightBannerImg": null
	          }],
	          "isFormal": "false",
	          "exposureParam": "//ac.mmstat.com/1.gif?apply=vote&abbucket=_AB-M1011_B14&com=02&acm=03654.1003.1.735362&cod=03654&cache=U5revsTn&aldid=KXPpnvEH&logtype=4&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.735362&ip=",
	          "id": "03654"
	        }
	        self._processData(content);
	        // self.$sendMtop({
	        //     api: 'mtop.taobao.aladdin.service.AldRecommendService.newFashionIndustry',
	        //     v: '1.0',
	        //     isHttps: true,
	        //     sessionOption: 'AutoLoginOnly',
	        //     timer: 3000
	        // }, function (result) {
	        //     console.log('in category load mtop data:', result)
	        //     if(typeof result==='string') result = JSON.parse(result);
	        //     var content = self.ds._backup;
	        //     if (result.data && result.data.resultValue) {
	        //         content = result.data.resultValue;
	        //     }
	        //     self._processData(content);
	        // });
	      },
	      _processData: function (content) {
	        var self = this;
	        var items = content.main;
	        var subItems = content.sub;
	        for (var j = 0; j < items.length; j++) {
	          var item = items[j];
	          item.index= j;
	          item.bannerImg = j % 2 === 0 ? item.leftBannerImg : item.rightBannerImg;
	          if(item.shopList){
	            for(var n=0;n<item.shopList.length;n++){
	              item.shopList[n].idx = n;
	            }
	          }
	        }

	        for (var i = 0; i < subItems.length; i++) {
	          var subItem = subItems[i];
	          subItem.index= i;
	          subItem.top = (i - i % 3) / 3 * (241 + 3);
	          subItem.left = i % 3 * (248 + 3);
	        }

	        self.items = items;
	        self.subItems = subItems;
	      }
	    }
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "container",
	  "children": [
	    {
	      "type": "image",
	      "shown": function () {return this.ds.floorTitle},
	      "classList": [
	        "title"
	      ],
	      "attr": {
	        "src": function () {return this.ds.floorTitle}
	      }
	    },
	    {
	      "type": "container",
	      "classList": [
	        "item-container"
	      ],
	      "children": [
	        {
	          "type": "container",
	          "repeat": function () {return this.items},
	          "style": {
	            "width": 750,
	            "paddingBottom": 14,
	            "backgroundColor": function () {return this.colour}
	          },
	          "children": [
	            {
	              "type": "container",
	              "children": [
	                {
	                  "type": "banner",
	                  "attr": {
	                    "width": function () {return this.NUMBER_750},
	                    "height": function () {return this.NUMBER_237},
	                    "src": function () {return this.bannerImg},
	                    "href": function () {return this.bannerUrl}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "container",
	              "classList": [
	                "shop-list"
	              ],
	              "children": [
	                {
	                  "type": "container",
	                  "repeat": function () {return this.shopList},
	                  "classList": [
	                    "shop-img-container"
	                  ],
	                  "children": [
	                    {
	                      "type": "banner",
	                      "attr": {
	                        "width": function () {return this.NUMBER_186},
	                        "height": function () {return this.NUMBER_208},
	                        "src": function () {return this.picUrl},
	                        "href": function () {return this.shopUrl}
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "container",
	      "classList": [
	        "sub-item-container"
	      ],
	      "style": {
	        "height": function () {return Math.round(this.subItems.length/3)*(241+3)}
	      },
	      "children": [
	        {
	          "type": "container",
	          "repeat": function () {return this.subItems},
	          "classList": [
	            "sub-item"
	          ],
	          "style": {
	            "top": function () {return this.top},
	            "left": function () {return this.left}
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "sub-item-bg"
	              ],
	              "attr": {
	                "src": function () {return this.subItemBg}
	              }
	            },
	            {
	              "type": "container",
	              "classList": [
	                "sub-item-img"
	              ],
	              "children": [
	                {
	                  "type": "banner",
	                  "attr": {
	                    "width": function () {return this.NUMBER_248},
	                    "height": function () {return this.NUMBER_155},
	                    "src": function () {return this.industryImg},
	                    "href": function () {return this.industryUrl}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "container",
	              "classList": [
	                "sub-item-title"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "industry-title"
	                  ],
	                  "attr": {
	                    "href": function () {return this.industryUrl},
	                    "value": function () {return this.industryTitle}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "industry-benefit"
	                  ],
	                  "attr": {
	                    "href": function () {return this.industryUrl},
	                    "value": function () {return this.industryBenefit}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "title": {
	    "width": 750,
	    "height": 100
	  },
	  "shop-list": {
	    "flexDirection": "row"
	  },
	  "shop-img-container": {
	    "marginRight": 2
	  },
	  "sub-item": {
	    "position": "absolute",
	    "width": 248,
	    "height": 241,
	    "alignItems": "center",
	    "backgroundColor": "#ffffff"
	  },
	  "sub-item-bg": {
	    "width": 248,
	    "height": 86
	  },
	  "sub-item-title": {
	    "position": "absolute",
	    "left": 0,
	    "top": 0,
	    "width": 248,
	    "textAlign": "center"
	  },
	  "industry-title": {
	    "fontSize": 28,
	    "color": "#484848",
	    "textAlign": "center",
	    "marginTop": 10,
	    "height": 34
	  },
	  "industry-benefit": {
	    "fontSize": 24,
	    "color": "#999999",
	    "textAlign": "center"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/918304b35162c0fa434158149beb7c82", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },

/***/ 19:
/***/ function(module, exports) {

	;__weex_define__("@weex-component/banner", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	        quality: 'normal',
	        width: 0,
	        height: 0,
	        src: '',
	        href: '',
	        spmc:0,
	        spmd:0
	    }},
	    methods: {
	      ready: function () {
	      },
	      _clickHandler: function () {
	        this.$call('modal', 'toast', {
	          message: 'click',
	          duration: 1
	        });
	      }
	    }
	  };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "image",
	  "style": {
	    "width": function () {return this.width},
	    "height": function () {return this.height}
	  },
	  "attr": {
	    "src": function () {return this.src},
	    "imageQuality": function () {return this.quality}
	  },
	  "events": {
	    "click": "_clickHandler"
	  }
	})
	})

/***/ }

/******/ });