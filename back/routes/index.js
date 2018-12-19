/**
 * @description 路由入口
 * @author weichaozhan
 */
'use strict';

import html from './html';

import admin from './admin';
import fileAction from './fileAction';

export default app => {
	// html 静态文件，不以 /api 开头的路由
	app.use(/^(?!(\/api))/, html);

	//接口 

	// 用户
	app.use('/api/admin', admin);
	// 文件上传下载
	app.use('/api/fileAction', fileAction);
}
