/**
 * @description 路由入口
 * @author weichaozhan
 */
'use strict';

import html from './html';
import staticFiles from './staticFiles';

import admin from './admin';
import fileAction from './fileAction';

export default app => {
	// html 静态文件，不以 /api 开头的路由
	app.use(/^(?!(\/api|\/files))/, html);
	app.use(/^\/files/, staticFiles);

	app.use('/api/admin', admin);
	app.use('/api/fileAction', fileAction);
}
