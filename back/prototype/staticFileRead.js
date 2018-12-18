/**
 * @author weichaozhan
 * @description 读取静态资源
 */


import fs from 'fs';
import path from 'path';
import mime from 'mime';

let cache = {};

/**
 * @description 404 处理
 */
function send404(res, err) {
    res.writeHead(404, {
        'Content-Type': 'text/html'
    });
    res.end(JSON.stringify(err));
}

/**
 * @description 文件数据
 */
function sendFile(res, filePath, fileContents, isGzip) {
    const headers = {
        'Content-Type': mime.getType(path.basename(filePath)),
    }

    if (isGzip) {
        headers['Content-Encoding'] = 'gzip';
    }
    
    res.writeHead(200, headers);
    res.end(fileContents);
}

/**
 * @description 静态文件服务
 */
function serveStatic(res, cache, absPath, callback) {
    const gzPath = absPath + '.gz'
    
    fs.exists(gzPath, function(existsGZ) {
        if (existsGZ) {
            fs.readFile(gzPath, function(err, data) {
                if (err) {
                    send404(res, err);
                } else {
                    cache[gzPath] = data;
                    sendFile(res, gzPath, data, true);
                }
            });
        } else {
            fs.exists(absPath, function (exists) {
                // 检查 文件是否存在
                if (exists) {
                    fs.readFile(absPath, function(err, data) {
                        if (err) {
                            console.log(exists, absPath)
                            send404(res, err);
                        } else {
                            cache[absPath] = data
                            sendFile(res, absPath, data);
                        }
                    })
                } else {
                    // 找不到资源时返回 index.html
                    if (callback) {
                        callback()
                    } else {
                        console.log(exists, absPath)
                        send404(res, 'Not Found');
                    }
                }
            });
        }
    });

}

export default (res, absPath, callback) => {
    serveStatic(res, cache, absPath, callback);
};