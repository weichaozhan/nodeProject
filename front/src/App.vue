<template>
  <div id="app">
    <input type="file" ref="file" @change="fileChange" />
    <button @click="handleClick">提交</button>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import axios from 'axios';
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      file: null,
    };
  },
  methods: {
    fileChange(e) {
      this.file = e.currentTarget.files[0];
    },
    handleClick() {
      const form = new FormData();

      form.append('file', this.file);
      axios.post('/api/fileAction', form);
    }
  },
  mounted() {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
