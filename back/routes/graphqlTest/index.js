import express from 'express';

import GraphqlTest from '../../controller/graphqlTest';

const router = express.Router();

router.post('/', GraphqlTest.add);

export default router;