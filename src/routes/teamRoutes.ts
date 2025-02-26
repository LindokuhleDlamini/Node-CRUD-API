import express from 'express';
import { getByLeague, getById } from '../controllers/teamController';

const router = express.Router();

router.get('/teams', getByLeague);
router.get('/team', getById);

export default router;