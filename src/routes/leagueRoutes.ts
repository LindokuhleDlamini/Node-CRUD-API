import express from 'express';
import { getByName, getAll } from '../controllers/leagueController';

const router = express.Router();

router.get('/leagues', getAll);
router.get('/league', getByName);

export default router;