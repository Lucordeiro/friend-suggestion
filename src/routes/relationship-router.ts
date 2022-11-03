import { Router } from 'express';

import { createRelationshipController } from './../modules';


const relationshipRouter = Router();

relationshipRouter.post('', (request, response) =>{ createRelationshipController.handle(request, response)} );

export { relationshipRouter }