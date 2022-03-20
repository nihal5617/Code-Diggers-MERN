import express from 'express';

import { signin,signuphere,getUser } from '../controllers/user.js';

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signuphere);
router.get('/alluser', getUser);

export default router;