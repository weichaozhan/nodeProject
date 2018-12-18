# Express + MongoDB + Vue

**node v8.\***

**npm v6.\***

## 目录

```javascript
+ back  // 后端代码 
    + config // config-lite 配置
    + controller // 业务逻辑
    + middleware // 自定义中间件
    + models // 数据
    + mogondb
    + public
        + html // 编译后的前端
        + files // 上传的文件
    + routes // 路由
    - app.js // 应用入口
    - index.js // 入口，babel 转译

+ front  // 前端代码
build.js  // 将 back 文件夹复制命名为 dist 用于部署
```