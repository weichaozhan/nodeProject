(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1f6a9de4"],{"1ff8":function(t,e,a){},aff6:function(t,e,a){"use strict";a.r(e);var s=a("f064"),r={name:"",data:function(){return{word:""}},components:{},methods:{addWord:function(){var t=this;if(""===this.word)this.$message.error("敏感词不能为空");else{var e={word:this.word};Object(s.a)(e).then(function(e){1e3===e.data.code?(t.$message({type:"success",message:"敏感词添加成功"}),t.$emit("close-form"),t.$emit("finish-action")):t.$message.error(e.data.msg)}).catch(function(t){})}}}},n=(a("d902"),a("048f")),o=Object(n.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{ref:"formEdit",attrs:{"label-width":"100px"}},[a("div",{staticClass:"headerbox"},[a("span",{staticClass:"headerlabel"},[t._v("新增敏感词")]),a("div",{staticClass:"headerBtn"},[a("el-button",{attrs:{type:"primary"},on:{click:t.addWord}},[t._v("保存")]),a("el-button",{attrs:{type:"primary"}},[t._v("取消")])],1)]),a("el-form-item",{attrs:{label:"敏感词名称"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{type:"text"},model:{value:t.word,callback:function(e){t.word=e},expression:"word"}})],1)],1)},[],!1,null,"4f994aaa",null);o.options.__file="addNewSensitiveWord.vue";e.default=o.exports},d902:function(t,e,a){"use strict";var s=a("1ff8");a.n(s).a}}]);