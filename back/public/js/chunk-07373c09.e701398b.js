(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-07373c09"],{4088:function(e,n,t){"use strict";t.d(n,"a",function(){return a}),t.d(n,"b",function(){return i}),t.d(n,"c",function(){return o}),t.d(n,"d",function(){return c});var a="http://819operationapi.j7w5.net",i=[{id:1,name:"审核管理",icon:"el-icon-message",children:[{id:11,name:"医生审核管理",icon:"el-icon-news",path:"/reviewDoctorManage"},{id:12,name:"医院审核管理",icon:"el-icon-date",path:"/reviewHospitalManage"},{id:13,name:"医生签名审核管理",icon:"el-icon-bell",path:"/reviewSignatureManage"}]},{id:2,name:"用户管理",icon:"el-icon-time",children:[{id:21,name:"医生用户管理",icon:"el-icon-service",path:"/doctorUserManage"},{id:22,name:"患者用户管理",icon:"el-icon-view",path:"/patientUserManage"}]},{id:3,name:"数据管理",icon:"el-icon-printer",children:[{id:31,name:"资讯管理",icon:"el-icon-news",path:"/informationManage"},{id:32,name:"儿童疫苗管理",icon:"el-icon-news",path:"/childrenVaccine"},{id:33,name:"行为标签管理",icon:"el-icon-tickets",path:"/labelPage"},{id:34,name:"接诊设置管理",icon:"el-icon-time",path:"/doctorPrice"},{id:35,name:"科室数据管理",icon:"el-icon-news",path:"/contentManage"},{id:36,name:"义诊管理",icon:"el-icon-date",path:"/freeClinicManage"}]},{id:4,name:"医生社区管理",icon:"el-icon-view",children:[{id:41,name:"话题管理",icon:"el-icon-star-on",path:"/topicManage"},{id:42,name:"小组管理",icon:"el-icon-picture-outline",path:"/groupManage"},{id:43,name:"动态管理",icon:"el-icon-news",path:"/trendManage"},{id:44,name:"举报管理",icon:"el-icon-time",path:"/reportManage"},{id:45,name:"敏感词管理",icon:"el-icon-sold-out",path:"/sensitiveWord"}]},{id:5,name:"财务管理",icon:"el-icon-star-off",children:[{id:51,name:"用户交易管理",icon:"el-icon-refresh",path:"/accountUserDeal"},{id:52,name:"结算管理",icon:"el-icon-edit-outline",path:"/accountSettleManage"},{id:53,name:"退款审核管理",icon:"el-icon-bell",path:"/refundReviewManage"}]},{id:6,name:"系统管理",icon:"el-icon-location",children:[{id:61,name:"账号管理",icon:"el-icon-news",path:"/userAdmin"},{id:62,name:"协议管理",icon:"el-icon-news",path:"/agreementManage"},{id:63,name:"科室数据展示",icon:"el-icon-star-off",path:"/departmentDataDisplay"},{id:64,name:"APP审核管理",icon:"el-icon-star-on",path:"/appReviewManage"}]}],o={1:"支持/反对",2:"正确/错误",3:"喜欢/不喜欢"},c={0:"周日",1:"周一",2:"周二",3:"周三",4:"周四",5:"周五",6:"周六"}},"4edd":function(e,n,t){"use strict";t.r(n);var a=t("efa4"),i=(t("25d7"),t("dc2a"),t("ca91")),o={name:"",data:function(){return{tableData:[{platform:1,version:"1.0.0",isAuditing:1,updateTime:"2018-08-16",createTime:"2018-01-20"}],rowSelected:{},modelForm:!1,loading:!1}},components:{FormEdit:function(){return Promise.all([t.e("chunk-72e6ea24"),t.e("chunk-56d4f3c8")]).then(t.bind(null,"9d48"))}},methods:{getAppReviewList:function(){var e=this;this.loading=!0,Object(i.b)().then(function(n){var t=n.data;e.tableData=Object.keys(t.data).map(function(e){return t.data[e]||[]}),e.loading=!1}).catch(function(n){e.loading=!1})},editPlatform:function(e){this.rowSelected=Object(a.a)({},e),this.modelForm=!0}},mounted:function(){this.getAppReviewList()}},c=(t("554d"),t("048f")),r=Object(c.a)(o,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"wrapper--app-review"},[t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,size:"medium ",border:"","max-height":"460"}},[t("el-table-column",{attrs:{prop:"platform",label:"平台",fixed:"",width:"200"},scopedSlots:e._u([{key:"default",fn:function(n){return[e._v("\n                "+e._s({1:"IOS",2:"Android"}[n.row.platform])+"\n            ")]}}])}),t("el-table-column",{attrs:{prop:"version",label:"app版本号","min-width":"200"}}),t("el-table-column",{attrs:{prop:"isAuditing",label:"是否审核中","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(n){return[e._v("\n                "+e._s(["否","是"][n.row.isAuditing])+"\n            ")]}}])}),t("el-table-column",{attrs:{label:"操作",fixed:"right",width:"100"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.editPlatform(n.row)}}},[e._v("修改")])]}}])})],1),t("el-dialog",{attrs:{title:"修改 "+{1:"IOS",2:"Android"}[e.rowSelected.platform],"append-to-body":!0,visible:e.modelForm,width:"500px"},on:{"update:visible":function(n){e.modelForm=n}}},[e.modelForm?t("form-edit",{attrs:{"msg-selected":e.rowSelected},on:{"close-form":function(n){e.modelForm=!1}}}):e._e()],1)],1)},[],!1,null,"45cfbdbd",null);r.options.__file="Index.vue";n.default=r.exports},"554d":function(e,n,t){"use strict";var a=t("916e");t.n(a).a},"5bf4":function(e,n,t){"use strict";t("20a2"),t("5a09");var a=t("efa4"),i=t("7f43"),o=t.n(i),c=t("0e4f"),r=t.n(c),d=t("329b"),l=t("a18c"),u=t("4587"),s=t("4088");d.default.prototype.$message=u.Message;n.a=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t={};t.Authorization="".concat(localStorage.getItem("token")),n||(t["Content-Type"]="application/json"),e.headers&&(t=Object(a.a)({},t,e.headers));var i=null;return i="[object FormData]"!==Object.prototype.toString.call(e.data)?t["Content-Type"]&&"application/x-www-form-urlencoded"!==t["Content-Type"]?e.data||"":r.a.stringify(e.data):e.data,new Promise(function(n,a){o()(Object.assign({},e,{baseURL:s.a,url:e.url,method:e.method||"get",headers:t,data:i,params:e.params||"",timeout:e.timeout||0})).then(function(e){1002===e.data.code?(d.default.prototype.$message({type:"error",message:"登录信息过期！请重新登录"}),a("登录信息过期！请重新登录"),l.a.push("/login")):n(e)}).catch(function(e){console.log(e),a(e)})})}},"916e":function(e,n,t){},ca91:function(e,n,t){"use strict";t.d(n,"b",function(){return i}),t.d(n,"c",function(){return o}),t.d(n,"a",function(){return c});var a=t("5bf4"),i=function(){return Object(a.a)({url:"/content/appExamine",method:"get"})},o=function(e){return Object(a.a)({url:"content/appExamine/detail/".concat(e),method:"get"})},c=function(e,n){return Object(a.a)({url:"content/appExamine/modify/".concat(e),method:"put",data:n})}}}]);