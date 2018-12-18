import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/files'))
    },
    filename: function (req, file, cb) {
        const nemeArr = file.originalname.split('.');
        cb(null, `${nemeArr[0]}${Date.now()}.${nemeArr[1]}`);
    }
})
const upload = multer({
    storage: storage,
});

class FileAction {
    getFile(req, res, next) {
        res.send({
			status: '1000000',
			message: '获取成功！',
		})
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
            });
        });
    }
};

export default new FileAction();