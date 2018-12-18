/**
 * @author weichaozhan
 * @description 请求上传的文件
 */
import path from 'path';

import serveStatic from '../../prototype/staticFileRead';

export default (req, res, next) => {
    let filePath = path.resolve(__dirname, `../../public/files${req.url}`);
    let absPath = filePath.replace(/\?+\S*/, '');
console.log(absPath)
    serveStatic(res, absPath);
};