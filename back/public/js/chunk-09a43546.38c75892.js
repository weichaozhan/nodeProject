(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-09a43546"],{1751:function(e,t,r){"use strict";r.r(t);r("84fb");var a=r("9224"),o={name:"",data:function(){var e=this;return{roleList:[],value:"",form:{Password:"",passwordReinput:"",nickname:"",rid:"",username:""},rules:{Password:[{validator:function(e,t,r){t.length<6?r(new Error("密码长度需大于等于六位")):r()},trigger:"blur"}],passwordReinput:[{validator:function(t,r,a){r?r!==e.form.Password?a(new Error("两次输入的密码不一致")):a():a(new Error("请再次输入密码"))},trigger:"blur"}]},loading:!1}},methods:{submitForm:function(){var e=this;this.$refs.formEdit.validate(function(t){if(t){var r={username:e.form.username,password:e.form.Password,phone:e.form.phone,nickname:e.form.nickname,rid:Number(e.value)};Object(a.a)(r).then(function(t){1e3===t.data.code?(e.$message({type:"success",message:"添加用户成功"}),e.backhtmls(),e.$emit("finish-action")):e.$message.error(t.data.msg)}).catch(function(e){})}})},getRoleList:function(){var e=this;Object(a.d)().then(function(t){var r=[];for(var a in t.data.data)r.push(t.data.data[a]);e.roleList=r}).catch(function(e){})},backhtmls:function(){this.$emit("close-form")}},mounted:function(){this.getRoleList()}},n=(r("5297"),r("048f")),s=Object(n.a)(o,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"formEdit",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"登录名",prop:"username"}},[r("el-input",{attrs:{type:"text"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("el-form-item",{attrs:{label:"用户名",prop:"nickname"}},[r("el-input",{attrs:{type:"text"},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),r("el-form-item",{attrs:{label:"联系方式",prop:"phone"}},[r("el-input",{attrs:{type:"text"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"Password"}},[r("el-input",{attrs:{type:"password"},model:{value:e.form.Password,callback:function(t){e.$set(e.form,"Password",t)},expression:"form.Password"}})],1),r("el-form-item",{attrs:{label:"重复密码",prop:"passwordReinput"}},[r("el-input",{attrs:{type:"password"},model:{value:e.form.passwordReinput,callback:function(t){e.$set(e.form,"passwordReinput",t)},expression:"form.passwordReinput"}})],1),r("el-form-item",{attrs:{label:"角色"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.roleList,function(e){return r("el-option",{key:e.rid,attrs:{label:e.name,value:e.rid}})}))],1),r("el-form-item",[r("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("立即提交")]),r("el-button",{on:{click:e.backhtmls}},[e._v("取消")])],1)],1)},[],!1,null,"3910ddb8",null);s.options.__file="AddUser.vue";t.default=s.exports},5297:function(e,t,r){"use strict";var a=r("fe2d");r.n(a).a},fe2d:function(e,t,r){}}]);