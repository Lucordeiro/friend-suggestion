import { Router } from "express";

import { personRouter } from './routes/person-router';
import { relationshipRouter } from './routes/relationship-router';
import { recommendationsRouter } from './routes/recommendations-router';
import { persistenceInteractionRouter } from './routes/persistence-interaction-router';


const router = Router();

router.use('/person', personRouter);
router.use('/relationship', relationshipRouter);
router.use('/recommendations', recommendationsRouter);
router.use('/clean', persistenceInteractionRouter);

export { router }