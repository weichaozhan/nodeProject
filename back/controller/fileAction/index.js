import multer from 'multer';
import path from 'path';

import serveStatic from '../../prototype/staticFileRead';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/files'))
    },
    filename: function (req, file, cb) {
        const nemeArr = file.originalname.split('.');
        cb(null, `${nemeArr.slice(0, -1).join('.')}_${Date.now()}.${nemeArr[nemeArr.length - 1]}`);
    }
})
const upload = multer({
    storage: storage,
});

class FileAction {
    getFile(req, res, next) {
        if (req.url === '/') {
            res
                .status(404)
                .end(new Error('Not Found').toString());
        } else {
            let filePath = path.resolve(__dirname, `../../public/files${req.url}`);
            let absPath = filePath.replace(/\?+\S*/, '');
    
            serveStatic(res, absPath);
        }
    }

    uploadFile(req, res, next) {
        upload.single('file')(req, res, function(err) {
            if (err instanceof multer.MulterError) {
                console.log(err);
                res.end('multer.MulterError');
            } else if (err) {
                console.log(err);
                res.end('Node Error');
            }
            
            res.send({
                filename: req.file.filename,
                path: `${process.env.ENV_ORIGIN}/api/fileAction/${req.file.filename}`,
            });
        });
    }
};

export default new FileAction();