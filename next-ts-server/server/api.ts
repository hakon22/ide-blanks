import express from 'express';
import Market from './market/Market.js';

const router = express.Router();

const apiPath = '/api';

router.get(`${apiPath}/market/getall`, Market.getAll);

export default router;
