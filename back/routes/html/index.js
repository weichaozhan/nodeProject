/**
 * @author weichaozhan
 * @description 请求 html 网页静态资源
 */
import path from 'path';

import serveStatic from '../../prototype/staticFileRead';

export default (req, res, next) => {
    let filePath = false;
    // index 路径
    let indexPath = path.resolve(__dirname, `../../public/html/index.html`);

    if (req.url === '/') {
        filePath = indexPath;
    } else {
        if (!/\.\S*$/.test(req.url)) {
            filePath = indexPath;
        } else {
            filePath = path.resolve(__dirname, `../../public/${/^\/html/.test(req.url) ? '' : 'html'}${req.url}`);
        }
    }

    let absPath = filePath.replace(/\?+\S*/, '');

    

    serveStatic(res, absPath, () => {
        serveStatic(res, indexPath.replace(/\?+\S*/, ''))
    });
};