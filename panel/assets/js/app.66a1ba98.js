(function(e){function t(t){for(var r,i,s=t[0],u=t[1],c=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/panel/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",["Login"!==this.$router.history.current.name?n("navigation"):e._e(),n("v-content",[n("router-view")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{dark:"",app:"","mini-variant":e.mini,permanent:""},on:{"update:miniVariant":function(t){e.mini=t},"update:mini-variant":function(t){e.mini=t}},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[n("v-list-item",{staticClass:"px-0",attrs:{"two-line":""}},[n("v-list-item-avatar",[n("img",{attrs:{src:"https://randomuser.me/api/portraits/men/81.jpg"}})]),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(e.user.realName))]),n("v-list-item-subtitle",[e._v(e._s(e.user.username))])],1),n("v-btn",{attrs:{icon:""},on:{click:function(t){t.stopPropagation(),e.mini=!e.mini}}},[n("v-icon",[e._v("mdi-chevron-left")])],1)],1),n("v-divider"),e._l(e.items,(function(t){return n("v-list-item",{key:t.title,attrs:{to:t.link,link:""}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.title))])],1)],1)}))],2)],1)},s=[],u={data:function(){return{drawer:!0,items:[{title:"Dashboard",icon:"mdi-view-dashboard",link:"/dashboard"},{title:"Courses",icon:"mdi-school",link:"/courses"},{title:"Usage Statistics",icon:"mdi-chart-areaspline-variant",link:"/statistics"},{title:"About",icon:"mdi-help-box",link:"/about"}],mini:!0,user:{}}},mounted:function(){this.user=this.$store.getters.userProfile}},c=u,l=n("2877"),d=n("6544"),p=n.n(d),m=n("8336"),v=n("ce7e"),f=n("132d"),h=n("8860"),b=n("da13"),g=n("8270"),_=n("5d23"),C=n("34c3"),w=n("f774"),x=Object(l["a"])(c,i,s,!1,null,null,null),V=x.exports;p()(x,{VBtn:m["a"],VDivider:v["a"],VIcon:f["a"],VList:h["a"],VListItem:b["a"],VListItemAvatar:g["a"],VListItemContent:_["a"],VListItemIcon:C["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VNavigationDrawer:w["a"]});var G={components:{Navigation:V}},k=G,y=(n("5c0b"),n("7496")),j=n("a75b"),O=Object(l["a"])(k,a,o,!1,null,null,null),L=O.exports;p()(O,{VApp:y["a"],VContent:j["a"]});n("b0c0");var $=n("8c4f"),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h1",[e._v("404")])])},A=[],S=n("a523"),P={},E=Object(l["a"])(P,I,A,!1,null,null,null),D=E.exports;p()(E,{VContainer:S["a"]});var R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h1",[e._v("Dashboard")])])},T=[],N={name:"Dashboard"},F=N,M=Object(l["a"])(F,R,T,!1,null,null,null),U=M.exports;p()(M,{VContainer:S["a"]});var B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h1",[e._v("About")])])},J=[],W={},q=Object(l["a"])(W,B,J,!1,null,null,null),z=q.exports;p()(q,{VContainer:S["a"]});var H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",{staticClass:"grey darken-4"},[n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs9:"",sm7:"",md5:"",lg4:""}},[n("v-card",{staticClass:"pa-10 text-center",attrs:{light:""}},[n("v-card-title",[e._v("Log in to your account")]),n("v-form",{staticClass:"mt-4"},[n("v-text-field",{attrs:{light:"",label:"Username","prepend-icon":"mdi-account"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("v-text-field",{attrs:{light:"",type:"password",label:"Password","prepend-icon":"mdi-lock"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-btn",{staticClass:"mt-6",attrs:{large:"",width:"100%",dark:""},on:{click:e.login}},[e._v(" Log in ")])],1)],1)],1)],1)],1)],1)],1)},K=[],Q=(n("96cf"),n("1da1")),X={name:"Login",data:function(){return{username:void 0,password:void 0}},methods:{login:function(){var e=Object(Q["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.username,n=this.password,e.next=3,this.$store.dispatch("login",{username:t,password:n});case 3:if(r=e.sent,!0!==r){e.next=9;break}return e.next=7,this.$router.push({name:"Dashboard"});case 7:e.next=10;break;case 9:console.log("Login view: --Wrong credentials--");case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},Y=X,Z=n("b0af"),ee=n("99d9"),te=n("0e8f"),ne=n("4bd4"),re=n("a722"),ae=n("8654"),oe=Object(l["a"])(Y,H,K,!1,null,null,null),ie=oe.exports;p()(oe,{VApp:y["a"],VBtn:m["a"],VCard:Z["a"],VCardTitle:ee["a"],VContainer:S["a"],VContent:j["a"],VFlex:te["a"],VForm:ne["a"],VLayout:re["a"],VTextField:ae["a"]});var se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h1",[e._v("Courses")]),n("v-container",e._l(e.courses,(function(e){return n("CourseCard",{key:e.id,attrs:{course:e}})})),1)],1)},ue=[],ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mb-5",attrs:{"min-width":"240",elevation:"4"}},[n("v-card-title",{staticClass:"subtitle-1 text-sm-center"},[n("router-link",{attrs:{to:e.courseLink(e.course.id)}},[e._v(e._s(e.course.name))])],1),n("v-divider"),n("v-container",{attrs:{fluid:""}},[n("v-row",e._l(e.course.groups,(function(t){return n("v-col",{key:t.id,attrs:{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"}},[n("v-card",{staticClass:"pa-3 subtitle-2",attrs:{outlined:"",tile:"",to:e.groupLink(t.id)}},[e._v(" "+e._s(t.name)+" ")])],1)})),1)],1)],1)},le=[],de=(n("99af"),{name:"CourseCard",props:["course"],methods:{groupLink:function(e){return"".concat(this.courseLink(this.id),"/groups/").concat(e)},courseLink:function(e){return"/courses/".concat(e)}},mounted:function(){return Object(Q["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}),pe=de,me=n("62ad"),ve=n("0fd9"),fe=Object(l["a"])(pe,ce,le,!1,null,null,null),he=fe.exports;p()(fe,{VCard:Z["a"],VCardTitle:ee["a"],VCol:me["a"],VContainer:S["a"],VDivider:v["a"],VRow:ve["a"]});var be={name:"Courses",components:{CourseCard:he},computed:{courses:function(){return this.$store.getters.courses}},mounted:function(){this.$store.dispatch("refreshCourses")}},ge=be,_e=Object(l["a"])(ge,se,ue,!1,null,null,null),Ce=_e.exports;p()(_e,{VContainer:S["a"]});var we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h1",[e._v("Course "+e._s(e.$route.params.course_id))])])},xe=[],Ve={},Ge=Ve,ke=Object(l["a"])(Ge,we,xe,!1,null,null,null),ye=ke.exports;p()(ke,{VContainer:S["a"]});var je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h1",[e._v("Statistics")])])},Oe=[],Le={},$e=Object(l["a"])(Le,je,Oe,!1,null,null,null),Ie=$e.exports;p()($e,{VContainer:S["a"]});var Ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h1",[e._v("Group "+e._s(e.$route.params.group_id))])])},Se=[],Pe={},Ee=Pe,De=Object(l["a"])(Ee,Ae,Se,!1,null,null,null),Re=De.exports;p()(De,{VContainer:S["a"]});var Te=n("2f62"),Ne=n("5530"),Fe={state:{userId:void 0,sessionId:void 0,profile:{}},mutations:{setUserId:function(e,t){e.userId=t},setSessionId:function(e,t){e.sessionId=t},setProfile:function(e,t){e.profile=Object(Ne["a"])(Object(Ne["a"])({},e.profile),t)}},getters:{isAuthenticated:function(e){return void 0!==e.sessionId},userProfile:function(e){return e.profile}},actions:{login:function(){var e=Object(Q["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.username,a=n.password,t.commit("setUserId",1),t.commit("setSessionId",a),t.commit("setProfile",{username:r,realName:"Real name"}),e.abrupt("return",!0);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()}},Me={state:{courses:[]},mutations:{setCourses:function(e,t){e.courses=t}},getters:{courses:function(e){return e.courses}},actions:{refreshCourses:function(e){var t=[{id:1,name:"Course 1",groups:[{id:6,name:"All students"},{id:7,name:"Group 1"},{id:8,name:"Group 2"},{id:9,name:"Group 3"},{id:10,name:"Group 4"},{id:11,name:"Group 5"},{id:12,name:"Group 6"},{id:13,name:"Group 7"},{id:14,name:"Group 8"},{id:15,name:"Group 9"}]},{id:2,name:"Course 2",groups:[{id:16,name:"All students"},{id:17,name:"Group 1"},{id:18,name:"Group 2"},{id:19,name:"Group 3"}]},{id:3,name:"Course 3",groups:[{id:26,name:"All students"},{id:27,name:"Group 1"},{id:28,name:"Group 2"},{id:29,name:"Group 3"},{id:30,name:"Group 4"},{id:31,name:"Group 5"},{id:32,name:"Group 6"}]},{id:4,name:"Course 4",groups:[{id:36,name:"All students"},{id:37,name:"Group 1"},{id:38,name:"Group 2"},{id:39,name:"Group 3"},{id:40,name:"Group 4"},{id:41,name:"Group 5"},{id:42,name:"Group 6"},{id:43,name:"Group 7"},{id:44,name:"Group 8"}]},{id:5,name:"Course 5",groups:[{id:46,name:"All students"},{id:47,name:"Group 1"},{id:48,name:"Group 2"},{id:49,name:"Group 3"},{id:50,name:"Group 4"},{id:51,name:"Group 5"},{id:52,name:"Group 6"},{id:53,name:"Group 7"}]}];e.commit("setCourses",t)}}};r["a"].use(Te["a"]);var Ue=new Te["a"].Store({state:{},mutations:{},actions:{},modules:{AuthStore:Fe,CourseStore:Me}});r["a"].use($["a"]);var Be=[{path:"/dashboard",name:"Dashboard",component:U},{path:"/",name:"Dashboard",component:U},{path:"/about",name:"About",component:z},{path:"/login",name:"Login",component:ie},{path:"/courses",name:"Courses",component:Ce},{path:"/courses/:course_id",name:"Course",component:ye},{path:"/courses/:course_id/groups/:group_id",name:"Group",component:Re},{path:"/statistics",name:"Statistics",component:Ie},{path:"*",name:"NotFound",component:D}],Je=new $["a"]({mode:"history",base:"/panel/",routes:Be});Je.beforeEach((function(e,t,n){"Login"===e.name||Ue.getters.isAuthenticated?n():n(ie)}));var We=Je,qe=n("f309");r["a"].use(qe["a"]);var ze=new qe["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:We,store:Ue,vuetify:ze,render:function(e){return e(L)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("7694"),a=n.n(r);a.a},7694:function(e,t,n){}});
//# sourceMappingURL=app.66a1ba98.js.map