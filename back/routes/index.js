/**
 * @description 路由入口
 * @author weichaozhan
 */
'use strict';

import html from './html';

import graphqlHd from './graphql';

import admin from './admin';
import fileAction from './fileAction';

export default app => {
	// html 静态文件，不以 /api 开头的路由
	app.use(/^(?!(\/api|\/graphql))/, html);

	//接口 

	app.use('/graphql', graphqlHd);
	// 用户
	app.use('/api/admin', admin);
	// 文件上传下载
	app.use('/api/fileAction', fileAction);
}
