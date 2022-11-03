import { Router } from 'express';

import { createPersonController, getPersonByDocumentController } from './../modules';

const personRouter = Router();

personRouter.get('/:cpf', (request, response) => { getPersonByDocumentController.handle(request, response) });
personRouter.post('', (request, response) => { createPersonController.handle(request, response)});

export { personRouter }