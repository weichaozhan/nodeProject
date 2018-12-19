import express from 'express';

import FileAction from '../../controller/fileAction';

const router = express.Router();

router.get(/^\//, FileAction.getFile);
router.post('/', FileAction.uploadFile);

export default router;