const fs = require('fs');
const chalk = require('chalk');

/* 复制目录、子目录，及其中的文件 @param src {String} 要复制的目录 @param dist {String} 复制到目标目录 */
function copyDir(src, dist, callback) {
    fs.access(dist, function (err) {
        if (err) {
            // 目录不存在时创建目录
            fs.mkdirSync(dist);
        }
        _copy(null, src, dist);
    });

    function _copy(err, src, dist) {
        if (err) {
            callback(err);
        } else {
            fs.readdir(src, function (err, paths) {
                if (err) {
                    callback(err)
                } else {
                    if (/node_modules/g.test(src)) return;

                    paths.forEach(function (path) {
                        var _src = src + '/' + path;
                        var _dist = dist + '/' + path;

                        if (!/node_modules/g.test(_src)) {
                            fs.stat(_src, function (err, stat) {
                                if (err) {
                                    callback(err);
                                } else {
                                    // 判断是文件还是目录
                                    if (stat.isFile()) {
                                        fs.writeFileSync(_dist, fs.readFileSync(_src));
                                    } else if (stat.isDirectory()) {
                                        // 当是目录是，递归复制
                                        copyDir(_src, _dist, callback)
                                    }
                                }
                            })
                        }
                    })
                }
            })
        }
    }
}

function deleteall(path) {
	var files = [];
	if(fs.existsSync(path)) {
		files = fs.readdirSync(path);
		files.forEach(function(file, index) {
			var curPath = path + "/" + file;
			if(fs.statSync(curPath).isDirectory()) { // recurse
				deleteall(curPath);
			} else { // delete file
				fs.unlinkSync(curPath);
			}
		});
		fs.rmdirSync(path);
	}
};

deleteall('./dist')
copyDir('./back', './dist')