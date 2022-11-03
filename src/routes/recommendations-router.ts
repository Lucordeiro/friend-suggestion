import { Router } from 'express';

import { getRecommendationsController } from './../modules';

const recommendationsRouter = Router();

recommendationsRouter.get('/:cpf', (request, response)=>{getRecommendationsController.handle(request, response)});

export { recommendationsRouter }