(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5f3950bb"],{"322b":function(e,t,n){"use strict";n.r(t);var o=n("efa4"),r=n("5120"),a={name:"",data:function(){return{loading:!1,form:{username:"",phone:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],phone:[{validator:function(e,t,n){t?/^1[34578]\d{9}$/.test(t)?n():n("请输入正确的手机号格式"):n("请输入手机号")},trigger:"blur"}]}}},methods:{submitForm:function(){var e=this;this.$refs.singleAddForm.validate(function(t){if(t){var n=Object(o.a)({},e.form);e.addSinglePatientUser(n)}})},addSinglePatientUser:function(e){var t=this;this.loading=!0,Object(r.c)(e).then(function(e){1e3===e.data.code?(t.$message({type:"success",message:"添加用户成功！"}),t.$emit("finish-add"),t.closeForm()):t.$message({type:"error",message:e.data.msg}),t.loading=!1}).catch(function(e){t.loading=!1})},closeForm:function(){this.$emit("close-form")}}},s=(n("f124"),n("048f")),i=Object(s.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"singleAddForm",attrs:{model:e.form,rules:e.rules,"label-width":"70px"}},[n("el-form-item",{attrs:{prop:"username",label:"用户名"}},[n("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),n("el-form-item",{attrs:{prop:"phone",label:"手机号"}},[n("el-input",{model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),n("el-form-item",{staticClass:"pt10"},[n("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确认")]),n("el-button",{on:{click:e.closeForm}},[e._v("取消")])],1)],1)},[],!1,null,"7371711c",null);i.options.__file="AddSingleForm.vue";t.default=i.exports},"64f6":function(e,t,n){},f124:function(e,t,n){"use strict";var o=n("64f6");n.n(o).a}}]);