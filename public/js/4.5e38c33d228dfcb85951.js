webpackJsonp([4,8],{2:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var a=s(6),o=n(a);e.default=o.default||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t}},3:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(1),o=n(a);e.default={replace:!0,props:{pageType:String,fixHead:Boolean,messageCount:Number,needAdd:{type:Boolean,default:!0}},data:function(){return{nickname:"",profileimgurl:"",show:!1}},methods:{openMenu:function(){(0,o.default)("html, body, #page").addClass("scroll-hide"),this.show=!this.show},showMenus:function(){this.show=!this.show,(0,o.default)("html, body, #page").removeClass("scroll-hide")}},components:{nvMenu:s(15)}}},4:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={replace:!0,props:["showMenu","pageType","nickName","profileUrl"],components:{userInfo:s(16)}}},5:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(2),o=n(a),r=s(21);e.default={replace:!0,computed:(0,o.default)({},(0,r.mapGetters)({userInfo:"getUserInfo"})),methods:{goEnter:function(){this.$router.push({name:"login",query:{redirect:encodeURIComponent(this.$route.path)}})},goUser:function(){this.$router.push({name:"user",params:{loginname:this.userInfo.loginname}})}}}},6:function(t,e,s){t.exports={default:s(7),__esModule:!0}},7:function(t,e,s){s(11),t.exports=s(20).Object.assign},8:function(t,e,s){"use strict";var n=s(25),a=s(9),o=s(10),r=s(26),i=s(24),c=Object.assign;t.exports=!c||s(22)(function(){var t={},e={},s=Symbol(),n="abcdefghijklmnopqrst";return t[s]=7,n.split("").forEach(function(t){e[t]=t}),7!=c({},t)[s]||Object.keys(c({},e)).join("")!=n})?function(t,e){for(var s=r(t),c=arguments.length,u=1,l=a.f,f=o.f;c>u;)for(var d,h=i(arguments[u++]),p=l?n(h).concat(l(h)):n(h),m=p.length,_=0;m>_;)f.call(h,d=p[_++])&&(s[d]=h[d]);return s}:c},9:function(t,e){e.f=Object.getOwnPropertySymbols},10:function(t,e){e.f={}.propertyIsEnumerable},11:function(t,e,s){var n=s(23);n(n.S+n.F,"Object",{assign:s(8)})},12:function(t,e){},13:function(t,e){},14:function(t,e,s){var n,a;n=s(3);var o=s(19);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=n},15:function(t,e,s){var n,a;s(13),n=s(4);var o=s(18);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=n},16:function(t,e,s){var n,a;s(12),n=s(5);var o=s(17);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=n},17:function(t,e){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"user-info"},[t.userInfo.loginname?t._e():t._h("ul",{staticClass:"login-no"},[t._h("li",{staticClass:"login",on:{click:t.goEnter}},[t._h("a",["登录"])])])," "," ",t.userInfo.loginname?t._h("div",{staticClass:"login-yes",on:{click:t.goUser}},[t._h("div",{staticClass:"avertar"},[t.userInfo.avatar_url?t._h("img",{attrs:{src:t.userInfo.avatar_url}}):t._e()])," ",t._h("div",{staticClass:"info"},[t.userInfo.loginname?t._h("p",{domProps:{textContent:t._s(t.userInfo.loginname)}}):t._e()])]):t._e()])},staticRenderFns:[]}},18:function(t,e){t.exports={render:function(){var t=this;return t._h("section",{staticClass:"nav-list",class:{show:t.showMenu},attrs:{id:"sideBar"}},[t._h("user-info")," ",t._h("section",{staticClass:"list-ul"},[t._h("router-link",{staticClass:"icon-quanbu iconfont item",attrs:{to:{name:"list",query:{tab:"all"}}}},["全部"])," ",t._h("router-link",{staticClass:"icon-hao iconfont item",attrs:{to:{name:"list",query:{tab:"good"}}}},["精华"])," ",t._h("router-link",{staticClass:"icon-fenxiang iconfont item",attrs:{to:{name:"list",query:{tab:"share"}}}},["分享"])," ",t._h("router-link",{staticClass:"icon-wenda iconfont item",attrs:{to:{name:"list",query:{tab:"ask"}}}},["问答"])," ",t._h("router-link",{staticClass:"icon-zhaopin iconfont item",attrs:{to:{name:"list",query:{tab:"job"}}}},["招聘"])," ",t._h("router-link",{staticClass:"icon-xiaoxi iconfont item line",attrs:{to:{name:"message"}}},["消息"])," ",t._h("router-link",{staticClass:"icon-about iconfont item",attrs:{to:{name:"about"}}},["关于"])])])},staticRenderFns:[]}},19:function(t,e){t.exports={render:function(){var t=this;return t._h("div",[t.show&&t.fixHead?t._h("div",{staticClass:"page-cover",on:{click:t.showMenus}}):t._e()," ",t._h("header",{class:{show:t.show&&t.fixHead,"fix-header":t.fixHead,"no-fix":!t.fixHead},attrs:{id:"hd"}},[t._h("div",{staticClass:"nv-toolbar"},[t.fixHead?t._h("div",{staticClass:"toolbar-nav",on:{click:t.openMenu}}):t._e()," ",t._h("span",{domProps:{textContent:t._s(t.pageType)}})," ",t.messageCount>0?t._h("i",{staticClass:"num"},[" "+t._s(t.messageCount)]):t._e()," ",t._h("router-link",{attrs:{to:"/add"}},[t.needAdd?t._h("i",{directives:[{name:"show",rawName:"v-show",value:!t.messageCount||t.messageCount<=0,expression:"!messageCount || messageCount <= 0"}],staticClass:"iconfont add-icon"},[""]):t._e()])])])," ",t.fixHead?t._h("nv-menu",{attrs:{"show-menu":t.show,"page-type":t.pageType,"nick-name":t.nickname,"profile-url":t.profileimgurl}}):t._e()])},staticRenderFns:[]}},48:function(t,e,s){var n,a;n=s(61);var o=s(107);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=n},61:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(1),o=n(a),r=s(27),i=n(r),c=s(14),u=n(c);e.default={data:function(){return{user:{},currentData:[],selectItem:1}},mounted:function(){this.getUser()},methods:{changeItem:function(t){this.selectItem=t,this.currentData=1===t?this.user.recent_replies:this.user.recent_topics},getLastTimeStr:function(t,e){return i.default.getLastTimeStr(t,e)},getUser:function(){var t=this,e=this.$route.params.loginname;return e?void o.default.get("https://cnodejs.org/api/v1/user/"+e,function(e){if(e&&e.data){var s=e.data;t.user=s,s.recent_replies.length>0?t.currentData=s.recent_replies:(t.currentData=s.recent_topics,t.selectItem=2)}}):(this.$alert("缺少用户名参数"),this.$router.push({path:"/"}),!1)}},watch:{$route:function(t,e){this.getUser()}},components:{nvHead:u.default}}},107:function(t,e){t.exports={render:function(){var t=this;return t._h("div",[t._h("nv-head",{attrs:{"page-type":"用户信息","fix-head":!0,"show-menu":!1,"need-add":!0}})," ",t._h("section",{staticClass:"userinfo"},[t._h("img",{staticClass:"u-img",attrs:{src:t.user.avatar_url}}),t._h("br")," ",t._h("span",{staticClass:"u-name",domProps:{textContent:t._s(t.user.loginname)}})," ",t._h("div",{staticClass:"u-bottom"},[t._h("span",{staticClass:"u-time",domProps:{textContent:t._s(t.getLastTimeStr(t.user.create_at,!1))}})," ",t._h("span",{staticClass:"u-score"},["积分："+t._s(t.user.score)])])])," ",t._h("section",{staticClass:"topics"},[t._h("ul",{staticClass:"user-tabs"},[t._h("li",{staticClass:"item br",class:{selected:1===t.selectItem},on:{click:function(e){t.changeItem(1)}}},["最近回复"])," ",t._h("li",{staticClass:"item",class:{selected:2===t.selectItem},on:{click:function(e){t.changeItem(2)}}},["最新发布"])])," ",t._l(t.currentData,function(e){return t._h("div",{staticClass:"message"},[t._h("section",{staticClass:"user"},[t._h("router-link",{staticClass:"head",attrs:{to:{name:"user",params:{loginname:e.author.loginname}}}},[t._h("img",{attrs:{src:e.author.avatar_url}})])," ",t._h("router-link",{staticClass:"info",attrs:{to:{name:"topic",params:{id:e.id}}}},[t._h("div",{staticClass:"t-title"},[t._s(e.title)])," ",t._h("span",{staticClass:"cl mt12"},[t._h("span",{staticClass:"name"},[t._s(e.author.loginname)])])," ",t._h("span",{staticClass:"cr mt12"},[t._h("span",{staticClass:"name",domProps:{textContent:t._s(t.getLastTimeStr(e.last_reply_at,!0))}})])])])])})," ",t._h("div",{directives:[{name:"show",rawName:"v-show",value:0===t.currentData.length,expression:"currentData.length === 0"}],staticClass:"no-data"},[t._h("i",{staticClass:"iconfont icon-empty"},[""]),"\n            暂无数据!\n        "])])])},staticRenderFns:[]}}});
//# sourceMappingURL=4.5e38c33d228dfcb85951.js.map