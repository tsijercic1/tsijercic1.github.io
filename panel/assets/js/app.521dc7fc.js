(function(e){function t(t){for(var r,o,s=t[0],u=t[1],c=t[2],d=0,m=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(m.length)m.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/panel/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",["Login"!==this.$router.history.current.name?n("navigation"):e._e(),n("v-content",[n("router-view")],1)],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{dark:"",app:"","mini-variant":e.mini,permanent:""},on:{"update:miniVariant":function(t){e.mini=t},"update:mini-variant":function(t){e.mini=t}},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[n("v-list-item",{staticClass:"px-0",attrs:{"two-line":""}},[n("v-list-item-avatar",[n("img",{attrs:{src:"https://randomuser.me/api/portraits/men/81.jpg"}})]),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(e.user.realName))]),n("v-list-item-subtitle",[e._v(e._s(e.user.username))])],1),n("v-btn",{attrs:{icon:""},on:{click:function(t){t.stopPropagation(),e.mini=!e.mini}}},[n("v-icon",[e._v("mdi-chevron-left")])],1)],1),n("v-divider"),e._l(e.items,(function(t){return n("v-list-item",{key:t.title,attrs:{to:t.link,link:""}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.title))])],1)],1)}))],2)],1)},s=[],u={data:function(){return{drawer:!0,items:[{title:"Dashboard",icon:"mdi-view-dashboard",link:"/dashboard"},{title:"Courses",icon:"mdi-school",link:"/courses"},{title:"Usage Statistics",icon:"mdi-chart-areaspline-variant",link:"/statistics"},{title:"About",icon:"mdi-help-box",link:"/about"}],mini:!0,user:{}}},mounted:function(){this.user=this.$store.getters.userProfile}},c=u,l=n("2877"),d=n("6544"),m=n.n(d),p=n("8336"),v=n("ce7e"),f=n("132d"),h=n("8860"),b=n("da13"),g=n("8270"),_=n("5d23"),w=n("34c3"),C=n("f774"),x=Object(l["a"])(c,o,s,!1,null,null,null),V=x.exports;m()(x,{VBtn:p["a"],VDivider:v["a"],VIcon:f["a"],VList:h["a"],VListItem:b["a"],VListItemAvatar:g["a"],VListItemContent:_["a"],VListItemIcon:w["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VNavigationDrawer:C["a"]});var k={components:{Navigation:V}},y=k,j=(n("5c0b"),n("7496")),O=n("a75b"),S=Object(l["a"])(y,a,i,!1,null,null,null),L=S.exports;m()(S,{VApp:j["a"],VContent:O["a"]});n("b0c0");var I=n("8c4f"),$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h1",[e._v("404")])])},A=[],E=n("a523"),G={},D=Object(l["a"])(G,$,A,!1,null,null,null),P=D.exports;m()(D,{VContainer:E["a"]});var R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h1",[e._v("Dashboard")])])},T=[],K={name:"Dashboard"},N=K,F=Object(l["a"])(N,R,T,!1,null,null,null),M=F.exports;m()(F,{VContainer:E["a"]});var U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h1",[e._v("About")])])},B=[],J={},W=Object(l["a"])(J,U,B,!1,null,null,null),q=W.exports;m()(W,{VContainer:E["a"]});var z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",{staticClass:"grey darken-4"},[n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs9:"",sm7:"",md5:"",lg4:""}},[n("v-card",{staticClass:"pa-10 text-center",attrs:{light:""}},[n("v-card-title",[e._v("Log in to your account")]),n("v-form",{staticClass:"mt-4"},[n("v-text-field",{attrs:{light:"",label:"Username","prepend-icon":"mdi-account"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("v-text-field",{attrs:{light:"",type:"password",label:"Password","prepend-icon":"mdi-lock"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-btn",{staticClass:"mt-6",attrs:{large:"",width:"100%",dark:""},on:{click:e.login}},[e._v(" Log in ")])],1)],1)],1)],1)],1)],1)],1)},H=[],Q=(n("96cf"),n("1da1")),X={name:"Login",data:function(){return{username:void 0,password:void 0}},methods:{login:function(){var e=Object(Q["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.username,n=this.password,e.next=3,this.$store.dispatch("login",{username:t,password:n});case 3:if(r=e.sent,!0!==r){e.next=9;break}return e.next=7,this.$router.push({name:"Dashboard"});case 7:e.next=10;break;case 9:console.log("Login view: --Wrong credentials--");case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},Y=X,Z=n("b0af"),ee=n("99d9"),te=n("0e8f"),ne=n("4bd4"),re=n("a722"),ae=n("8654"),ie=Object(l["a"])(Y,z,H,!1,null,null,null),oe=ie.exports;m()(ie,{VApp:j["a"],VBtn:p["a"],VCard:Z["a"],VCardTitle:ee["a"],VContainer:E["a"],VContent:O["a"],VFlex:te["a"],VForm:ne["a"],VLayout:re["a"],VTextField:ae["a"]});var se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h1",[e._v("Courses")]),n("v-container",e._l(e.courses,(function(e){return n("CourseCard",{key:e.id,attrs:{course:e}})})),1)],1)},ue=[],ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{"min-width":"240",elevation:"4"}},[n("v-card-title",{staticClass:"subtitle-2 text-sm-center"},[n("router-link",{attrs:{to:e.courseLink(e.course.id)}},[e._v(e._s(e.course.name))])],1),n("v-divider"),n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{justify:"center"}},e._l(e.groups,(function(t){return n("v-col",{key:t.id,attrs:{cols:"10",md:"4",lg:"3",xl:"2"}},[n("v-card",{staticClass:"pa-4",attrs:{outlined:"",tile:"",to:e.groupLink(t.id)}},[e._v(" "+e._s(t.name)+" ")])],1)})),1)],1)],1)},le=[],de=(n("99af"),{name:"CourseCard",props:["course"],data:function(){return{groups:[]}},methods:{groupLink:function(e){return"".concat(this.courseLink(this.course.id),"/groups/").concat(e)},courseLink:function(e){return"/courses/".concat(e)}},mounted:function(){var e=this;return Object(Q["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.groups={1:[{id:6,name:"All students"},{id:7,name:"Group 1"},{id:8,name:"Group 2"},{id:9,name:"Group 3"},{id:10,name:"Group 4"},{id:11,name:"Group 5"},{id:12,name:"Group 6"},{id:13,name:"Group 7"},{id:14,name:"Group 8"},{id:15,name:"Group 9"}],2:[{id:16,name:"All students"},{id:17,name:"G1"},{id:18,name:"Grupa 2"},{id:19,name:"Sastav 3"},{id:20,name:"Skup 4"},{id:21,name:"Kategorija 5"},{id:22,name:"Sedam"},{id:23,name:"Sad sedam"},{id:24,name:"Devet"},{id:25,name:"Deset"}],3:[{id:26,name:"All students"},{id:27,name:"G1"},{id:28,name:"Grupa 2"},{id:29,name:"Sastav 3"},{id:30,name:"Skup 4"},{id:31,name:"Kategorija 5"},{id:32,name:"Sedam"},{id:33,name:"Sad sedam"},{id:34,name:"Devet"},{id:35,name:"Deset"}],4:[{id:36,name:"All students"},{id:37,name:"TK9"},{id:38,name:"RI1"},{id:39,name:"TK10"},{id:40,name:"TK11"},{id:41,name:"TK12"}],5:[{id:42,name:"All students"},{id:43,name:"EE22"},{id:44,name:"RI66"},{id:45,name:"ATE-5"}]}[e.course.id];case 1:case"end":return t.stop()}}),t)})))()}}),me=de,pe=n("62ad"),ve=n("0fd9"),fe=Object(l["a"])(me,ce,le,!1,null,null,null),he=fe.exports;m()(fe,{VCard:Z["a"],VCardTitle:ee["a"],VCol:pe["a"],VContainer:E["a"],VDivider:v["a"],VRow:ve["a"]});var be={name:"Courses",data:function(){return{courses:[]}},components:{CourseCard:he},mounted:function(){var e=this;return Object(Q["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.courses=[{id:1,name:"Course 1"},{id:2,name:"Course 2"},{id:3,name:"Course 3"},{id:4,name:"Course 4"},{id:5,name:"Course 5"}];case 1:case"end":return t.stop()}}),t)})))()}},ge=be,_e=Object(l["a"])(ge,se,ue,!1,null,null,null),we=_e.exports;m()(_e,{VContainer:E["a"]});var Ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h1",[e._v("Course "+e._s(e.$route.params.course_id))])])},xe=[],Ve={},ke=Ve,ye=Object(l["a"])(ke,Ce,xe,!1,null,null,null),je=ye.exports;m()(ye,{VContainer:E["a"]});var Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h1",[e._v("Statistics")])])},Se=[],Le={},Ie=Object(l["a"])(Le,Oe,Se,!1,null,null,null),$e=Ie.exports;m()(Ie,{VContainer:E["a"]});var Ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h1",[e._v("Group "+e._s(e.$route.params.group_id))])])},Ee=[],Ge={},De=Ge,Pe=Object(l["a"])(De,Ae,Ee,!1,null,null,null),Re=Pe.exports;m()(Pe,{VContainer:E["a"]});var Te=n("2f62"),Ke=n("5530"),Ne={state:{userId:1,sessionId:1,profile:{}},mutations:{setUserId:function(e,t){e.userId=t},setSessionId:function(e,t){e.sessionId=t},setProfile:function(e,t){e.profile=Object(Ke["a"])(Object(Ke["a"])({},e.profile),t)}},getters:{isAuthenticated:function(e){return void 0!==e.sessionId},userProfile:function(e){return e.profile}},actions:{login:function(){var e=Object(Q["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.username,a=n.password,t.commit("setUserId",1),t.commit("setSessionId",a),t.commit("setProfile",{username:r,realName:"Real name"}),e.abrupt("return",!0);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()}};r["a"].use(Te["a"]);var Fe=new Te["a"].Store({state:{},mutations:{},actions:{},modules:{AuthStore:Ne}});r["a"].use(I["a"]);var Me=[{path:"/dashboard",name:"Dashboard",component:M},{path:"/",name:"Dashboard",component:M},{path:"/about",name:"About",component:q},{path:"/login",name:"Login",component:oe},{path:"/courses",name:"Courses",component:we},{path:"/courses/:course_id",name:"Course",component:je},{path:"/courses/:course_id/groups/:group_id",name:"Group",component:Re},{path:"/statistics",name:"Statistics",component:$e},{path:"*",name:"NotFound",component:P}],Ue=new I["a"]({mode:"history",base:"/panel/",routes:Me});Ue.beforeEach((function(e,t,n){"Login"===e.name||Fe.getters.isAuthenticated?n():n(oe)}));var Be=Ue,Je=n("f309");r["a"].use(Je["a"]);var We=new Je["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:Be,store:Fe,vuetify:We,render:function(e){return e(L)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("7694"),a=n.n(r);a.a},7694:function(e,t,n){}});
//# sourceMappingURL=app.521dc7fc.js.map