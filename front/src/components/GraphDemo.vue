<template>
    <div class="wrapper">
        <div class="file-upload">
            <input type="file" ref="file" @change="fileChange" />
            <button @click="handleClick">提交</button>
        </div>
        <from>
            <label>
                姓名：<input v-model="form.name" />
            </label>
            <label>
                性别：<input v-model="form.sex" />
            </label>
        </from>
        <button @click="addDemo">添加</button>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>操作{{demos.length}}</th>
                </tr>
            </thead>
            <tbody v-if="demos.length > 0">
                <tr v-for="item in demos" :key="item.id">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.sex}}</td>
                    <td>
                        <button @click="removeDemo(item)">删除</button>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td :colspan="4">暂无数据</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
import {
    addDemoAPI,
    getDemosAPI,
    removeDemoAPI,
} from '@/api/graphDemoAPI';

export default {
    name:'',
    data() {
        return {
            demos: [],
            file: null,
            form: {
                name: 'default',
                sex: 'male',
            }
        };
    },
    methods: {
        addDemo() {
            addDemoAPI({
                ...this.form
            })
                .then(res => {
                    alert(res.addDemo.msg);
                    this.getDemos();
                });
        },
        getDemos() {
            getDemosAPI()
                .then(res => {
                    this.demos = res.demos;
                });
        },
        removeDemo(msg) {
            removeDemoAPI(msg.id)
                .then(res => {
                    // alert(res.removeDemo.msg);
                    this.getDemos();
                });
        },
        /**
         * 上传文件
         */
        fileChange(e) {
            this.file = e.currentTarget.files[0];
        },
        handleClick() {
            const form = new FormData();

            form.append('file', this.file);
            axios.post('/api/fileAction', form)
            .then(res => {
                alert('上传完毕！');
            });
        },
    },
    mounted() {
        this.getDemos();
    }
};
</script>

<style scoped lang="less">
.wrapper {
    margin: 50px auto;
    padding: 20px;
    width: 500px;
    line-height: 2;
    border: 1px solid royalblue;
    border-radius: 10px;

    table {
        width: 100%;
        border-collapse: collapse;

        th, td {
            line-height: 2.2;
            border: 1px solid #e8e8e8;
        }
    }
}
.file-upload {
    padding: 10px;
    margin: 20px auto;
    border: 1px solid orange;
    border-radius: 10px;
}
</style>