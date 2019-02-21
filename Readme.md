# Express + MongoDB + Vue

## 工具版本

```javascript
// node 版本 8.0 以上
node v8.*

// npm 版本 6.0 以上
npm v6.*
```

## 目录

```javascript
+ back  // 后端代码 
    + config // config-lite 配置
    + controller // 业务逻辑
    + graphql // graphql 接口
    + middleware // 自定义中间件
    + models // 数据
    + mogondb
    + prototype // 公用
    + public
        + html // 编译后的前端
        + files // 上传的文件
    + routes // 路由
    - app.js // 应用入口
    - index.js // 入口，babel 转译

+ front  // 前端代码
build.js  // 将 back 文件夹复制命名为 dist 用于部署
```

## 整体项目 nodeProject

**注意：** 在项目执行全局的命令前，请确保 back、front 文件夹下已经都执行过 npm install 安装依赖。

### 命令
```javascript

// 启动开发，执行后会启动前后端开发服务，请确保 Mongo 已经启动
npm run dev

// 构建，会执行 front 下的 npm run build，前端 build 结束后，会将后端 back 文件夹复制为dist 文件夹 
npm run build

```

### 生产部署

一、安装 node， MongoDB；

二、上传 /nodeProject/dist 文件夹；

三、切换到 dist 目录，安装依赖，执行 npm install；

四、启动 Mongo，dist 下执行 npm run deploy 启动服务。

浏览器访问服务器 3000 端口。



## 后端 back

### 命令

```javascript

// 启动开发
npm run start

// 部署 后端
npm run deploy

```

### 注意

不管开发还是部署，请确保 Mongo 已经启动

## 前端 front

### 命令

```javascript

// 启动开发
npm run serve

// 构建
npm run build

// 构建分析
npm run analyz 

```

### 注意

构建后代码会被打包到后端 /back/public/html 文件夹下。

```javascript

// vue.config.js
module.exports = {
    ...
    ...
    ...,
    outputDir: path.resolve(__dirname, '../back/public/html'),
    ...
    ...
    ...,
}

```