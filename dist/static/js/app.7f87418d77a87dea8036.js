webpackJsonp([1],{"1b0G":function(t,e){},"25y2":function(t,e){},"2H3r":function(t,e){},"6swU":function(t,e){},"CLa+":function(t,e){},FmSC:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=i("VU/8")({name:"App"},a,!1,function(t){i("25y2")},"data-v-5a9f25aa",null).exports,r=i("/ocq"),c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"homeHeader"},[e("div",{staticClass:"back"},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#i-back"}})])]),this._v(" "),e("div",{staticClass:"search"},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#i-search"}})]),this._v(" "),e("input",{attrs:{type:"text",placeholder:"输入城市/景点/游玩主题"}})]),this._v(" "),e("router-link",{staticClass:"city",attrs:{to:"/city"}},[e("span",[this._v(this._s(this.$store.state.currentCity))]),this._v(" "),e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#i-down"}})])])],1)},staticRenderFns:[]};var o=i("VU/8")({name:"HomeHeader"},c,!1,function(t){i("rHWd")},null,null).exports,l={name:"HomeSwiper",data:function(){return{swiperOption:{pagination:{el:".swiper-pagination"},loop:!0}}},props:{list:{type:Array}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiperWrap"},[e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{attrs:{src:t.imgUrl,alt:"图片"}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var d=i("VU/8")(l,u,!1,function(t){i("eXNl")},"data-v-38181db8",null).exports,h={name:"HomeIcons",data:function(){return{swiperOption:{pagination:{el:".swiper-pagination"}}}},props:{iconList:{type:Array}},computed:{slidePage:function(){var t=[];return this.iconList.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"navIcon"},[i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.slidePage,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"itemLink"},[i("img",{attrs:{src:e.imgUrl,alt:""}}),t._v(" "),i("span",[t._v(t._s(e.desc))])])}))}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var p=i("VU/8")(h,v,!1,function(t){i("UMr5")},"data-v-ec16adfc",null).exports,f={name:"HomeWeek",props:{list:{type:Array}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weekWrap"},[i("div",{staticClass:"title"},[t._v("周末去哪")]),t._v(" "),i("ul",{staticClass:"weekList"},t._l(t.list,function(e){return i("li",{key:e.id},[i("div",{staticClass:"imgWrap"},[i("img",{attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"info"},[i("h3",[t._v(t._s(e.title))]),t._v(" "),i("span",[t._v(t._s(e.desc))])])])}))])},staticRenderFns:[]};var _=i("VU/8")(f,m,!1,function(t){i("1b0G")},null,null).exports,y={name:"HomeRecommend",props:{list:{type:Array}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommendWrap"},[i("div",{staticClass:"title"},[t._v("热销推荐")]),t._v(" "),i("ul",{staticClass:"recommendList"},t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{attrs:{src:e.imgUrl}}),t._v(" "),i("div",{staticClass:"infoWrap"},[i("p",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"desc"},[t._v(t._s(e.desc))]),t._v(" "),i("div",[i("button",{staticClass:"button"},[t._v("查看详情")])])])])}))])},staticRenderFns:[]};var C=i("VU/8")(y,g,!1,function(t){i("CLa+")},null,null).exports,L=i("mtWM"),w=i.n(L),b={name:"Home",data:function(){return{iconList:[],recommendList:[],swiperList:[],weekendList:[]}},components:{HomeHeader:o,Swiper:d,Icons:p,Week:_,Recommend:C},mounted:function(){this.getHomeInfo()},methods:{getHomeInfo:function(){var t=this;w.a.get("/api/index.json").then(function(e){return t.getUseData(e)})},getUseData:function(t){var e=t.data,i=e.ret,s=e.data;i&&s&&(this.iconList=s.iconList,this.recommendList=s.recommendList,this.swiperList=s.swiperList,this.weekendList=s.weekendList)}}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("home-header"),t._v(" "),i("swiper",{attrs:{list:t.swiperList}}),t._v(" "),i("icons",{attrs:{iconList:t.iconList}}),t._v(" "),i("recommend",{attrs:{list:t.recommendList}}),t._v(" "),i("week",{attrs:{list:t.weekendList}})],1)},staticRenderFns:[]};var x=i("VU/8")(b,k,!1,function(t){i("UuWk")},"data-v-9a93f066",null).exports,I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("router-link",{staticClass:"back",attrs:{to:"/"}},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#i-back"}})])]),this._v(" "),e("h2",[this._v("城市选择")])],1)},staticRenderFns:[]};var U=i("VU/8")({name:"CityHeader"},I,!1,function(t){i("6swU")},"data-v-3b0cbc4f",null).exports,$=i("GQaK"),V={name:"CitySearch",data:function(){return{scroll:null,inputValue:""}},props:{cities:{type:Object}},computed:{searchCityList:function(){var t=this,e=[];if(!this.inputValue)return[];for(var i in this.cities)this.cities[i].forEach(function(i){(i.name.indexOf(t.inputValue)>=0||i.spell.indexOf(t.inputValue)>=0)&&e.push(i)});return e}},methods:{selectCity:function(t){this.$store.commit("changeCity",{cityName:t}),this.$router.push("/")}},mounted:function(){var t=this.$refs.searchCityIndexList;this.scroll=new $.a(t)}},H={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"searchWrap"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.inputValue},on:{input:function(e){e.target.composing||(t.inputValue=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:""!==t.inputValue,expression:"inputValue !== ''"}],ref:"searchCityIndexList",staticClass:"searchCityIndexList"},[i("ul",{directives:[{name:"show",rawName:"v-show",value:t.searchCityList.length,expression:"searchCityList.length"}],staticClass:"city"},t._l(t.searchCityList,function(e){return i("li",{key:e.id,staticClass:"border-bottom",attrs:{spell:e.spell},on:{click:function(i){t.selectCity(e.name)}}},[t._v(t._s(e.name))])})),t._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:!t.searchCityList.length,expression:"!searchCityList.length"}],staticClass:"city"},[i("li",{staticClass:"border-bottom",staticStyle:{"text-align":"center"}},[t._v("条件不符，没有数据")])])])])},staticRenderFns:[]};var S=i("VU/8")(V,H,!1,function(t){i("pvgE")},"data-v-79da308c",null).exports,E={name:"CityList",data:function(){return{scroll:null}},props:{hotCities:{type:Array},cities:{type:Object},letter:{type:String}},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}},mounted:function(){this.scroll=new $.a(this.$refs.wrapper)},methods:{selectCity:function(t){this.$store.commit("changeCity",{cityName:t}),this.$router.push("/")}}},F={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"warp"},[i("div",[i("div",{staticClass:"cityWarp"},[i("h2",{staticClass:"title border-bottom"},[t._v("当前城市")]),t._v(" "),i("ul",{staticClass:"city border-bottom"},[i("li",[i("span",[t._v(t._s(this.$store.state.currentCity))])])])]),t._v(" "),i("div",{staticClass:"cityWarp"},[i("h2",{staticClass:"title border-bottom"},[t._v("热门城市")]),t._v(" "),i("ul",{staticClass:"city  border-bottom"},t._l(t.hotCities,function(e){return i("li",{key:e.id,attrs:{spell:e.spell},on:{click:function(i){t.selectCity(e.name)}}},[i("span",[t._v(t._s(e.name))])])}))]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,staticClass:"cityIndexList"},[i("h2",{ref:s,refInFor:!0,staticClass:"title border-bottom"},[t._v(" "+t._s(s))]),t._v(" "),i("ul",{staticClass:"city"},t._l(e,function(e){return i("li",{key:e.id,staticClass:"border-bottom",attrs:{spell:e.spell},on:{click:function(i){t.selectCity(e.name)}}},[t._v(t._s(e.name))])}))])})],2)])},staticRenderFns:[]};var N=i("VU/8")(E,F,!1,function(t){i("rVyP")},"data-v-3d9bcb0e",null).exports,W={name:"CityLetter",data:function(){return{touchStatus:!1}},props:{cities:{type:Object}},computed:{letter:function(){var t=[];for(var e in this.cities)t.push(e);return t}},methods:{clickLetter:function(t){console.log(t.target.innerText)},startLetter:function(){this.touchStatus=!0},moveLetter:function(t){if(this.touchStatus){var e=t.changedTouches[0],i=this.$refs.letterWarp.offsetTop+this.$refs.A[0].offsetTop,s=e.target.offsetHeight,a=Math.floor((e.pageY-i)/s);a>=0&&a<this.letter.length&&this.$emit("handleLetterIndex",this.letter[a])}},endLetter:function(){this.touchStatus=!1}}},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"letterWarp",staticClass:"letterWarp"},t._l(t.letter,function(e){return i("div",{key:e,ref:e,refInFor:!0,staticClass:"letter",on:{click:t.clickLetter,touchstart:t.startLetter,touchmove:t.moveLetter,touchend:t.endLetter}},[t._v(t._s(e))])}))},staticRenderFns:[]};var O={name:"City",data:function(){return{hotCities:[],cities:{},letter:""}},components:{CityHeader:U,Search:S,CityList:N,Letter:i("VU/8")(W,R,!1,function(t){i("FmSC")},"data-v-196cde1e",null).exports},mounted:function(){this.getCityList()},methods:{getCityList:function(){var t=this;w.a.get("/api/city.json").then(function(e){return t.getUseData(e)})},getUseData:function(t){var e=t.data,i=e.ret,s=e.data;i&&s&&(this.hotCities=s.hotCities,this.cities=s.cities)},handleChangeLetterIndex:function(t){this.letter=t}}},D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("city-header"),t._v(" "),i("search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{hotCities:t.hotCities,cities:t.cities,letter:t.letter}}),t._v(" "),i("letter",{attrs:{cities:t.cities},on:{handleLetterIndex:t.handleChangeLetterIndex}})],1)},staticRenderFns:[]};var j=i("VU/8")(O,D,!1,function(t){i("uO8r")},"data-v-27af2f00",null).exports,A={name:"DetailsHeader",data:function(){return{isShow:!0,opacityObject:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>50){var e=t/140;e=e>1?1:e,this.opacityObject={opacity:e},this.isShow=!1}else this.isShow=!0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)}},T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.isShow?i("div",{staticClass:"headerButton"},[i("router-link",{staticClass:"back",attrs:{tag:"div",to:"/"}},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#i-back"}})])])],1):t._e(),t._v(" "),t.isShow?t._e():i("div",{staticClass:"headerFixed",style:t.opacityObject},[i("router-link",{staticClass:"back",attrs:{to:"/"}},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#i-back"}})])]),t._v(" "),i("h2",[t._v("城市选择")])],1)])},staticRenderFns:[]};var M=i("VU/8")(A,T,!1,function(t){i("Q3dH")},"data-v-a1e971f8",null).exports,P={name:"DetailsBanner",props:{sightName:{type:String},bannerImg:{type:String},gallaryImgs:{type:Array}}},G={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"banner"},[i("div",{staticClass:"bannerImgWrap"},[i("img",{attrs:{src:t.bannerImg,alt:""}})]),t._v(" "),i("div",{staticClass:"bannerInfo"},[i("div",{staticClass:"title"},[t._v(t._s(t.sightName))]),t._v(" "),i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#i-img"}})]),t._v(" "),i("span",[t._v(t._s(t.gallaryImgs.length))])])])},staticRenderFns:[]};var B=i("VU/8")(P,G,!1,function(t){i("aF8J")},"data-v-7e393218",null).exports,Q={name:"DetailsList",props:{categoryList:{type:Array}}},Y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},t._l(t.categoryList,function(e,s){return i("div",{key:s,staticClass:"list"},[i("div",{staticClass:"title"},[i("span",{staticClass:"icon"}),t._v(t._s(e.title))]),t._v(" "),e.children?i("div",{staticClass:"children"},[i("details-list",{attrs:{categoryList:e.children}})],1):t._e()])}))},staticRenderFns:[]};var J={data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],categoryList:[]}},components:{DetailsHeader:M,DetailsBanner:B,DetailsList:i("VU/8")(Q,Y,!1,function(t){i("YzLr")},"data-v-1bcb592f",null).exports},methods:{handleGetDetailsData:function(t){var e=t.data,i=e.ret,s=e.data;i&&s&&(console.log(s),this.sightName=s.sightName,this.bannerImg=s.bannerImg,this.gallaryImgs=s.gallaryImgs,this.categoryList=s.categoryList)}},mounted:function(){w.a.get("/quna/dist/api/detail.json",{params:{id:this.$route.params.id}}).then(this.handleGetDetailsData)}},q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("details-header"),this._v(" "),e("details-banner",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,gallaryImgs:this.gallaryImgs}}),this._v(" "),e("details-list",{attrs:{categoryList:this.categoryList}}),this._v(" "),e("div",{staticStyle:{height:"1000px"}})],1)},staticRenderFns:[]};var z=i("VU/8")(J,q,!1,function(t){i("2H3r")},"data-v-0e187d50",null).exports;s.a.use(r.a);var X=new r.a({routes:[{path:"/",name:"Home",component:x},{path:"/city",name:"City",component:j},{path:"/detail/:id",name:"Details",component:z}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),K=i("NYxO");s.a.use(K.a);var Z="上海";localStorage.defaultCity&&(Z=localStorage.defaultCity);var tt=new K.a.Store({state:{currentCity:Z},mutations:{changeCity:function(t,e){console.log(t,e),t.currentCity=e.cityName,localStorage.defaultCity=e.cityName}}}),et=i("v5o6"),it=i.n(et),st=i("7QTg"),at=i.n(st);i("m0iu"),i("cjdf"),i("v2ns");it.a.attach(document.body),s.a.use(at.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:X,store:tt,components:{App:n},template:"<App/>"})},Q3dH:function(t,e){},UMr5:function(t,e){},UuWk:function(t,e){},YzLr:function(t,e){},aF8J:function(t,e){},cjdf:function(t,e){},eXNl:function(t,e){},m0iu:function(t,e){},pvgE:function(t,e){},rHWd:function(t,e){},rVyP:function(t,e){},uO8r:function(t,e){},v2ns:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7f87418d77a87dea8036.js.map