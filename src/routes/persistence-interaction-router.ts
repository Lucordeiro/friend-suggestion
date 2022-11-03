import { Router } from 'express';

import { cleanData } from './../controllers/clean-data-controller';

const persistenceInteractionRouter = Router();

persistenceInteractionRouter.delete('clean', () => {});

export { persistenceInteractionRouter }