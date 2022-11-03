import { Router } from 'express';

import { cleanDataController } from './../modules';

const persistenceInteractionRouter = Router();

persistenceInteractionRouter.delete('', (request, response) => {cleanDataController.handle(request, response)});

export { persistenceInteractionRouter }