
import { InMemoryPersonPersistence } from './repositories/in-memory-persistence/in-memory-person';
import { InMemoryRelationshipPersistence } from './repositories/in-memory-persistence/in-memory-relationship';

import { CreatePersonController } from './controllers/create-person-controller';
import { GetPersonByDocumentController } from './controllers/get-person-by-document-controller';
import { CreateRelationshipController } from './controllers/create-relationship-controller';
import { GetRecommendationsController } from './controllers/get-recommendations-controller';

import { CreatePersonService } from './services/create-person-service';
import { GetPersonByDocumentService } from './services/get-person-by-document-service';
import { CreateRelationshipService } from './services/create-relationship-service';
import { GetRecommendationsService } from './services/get-recommendations-service';

const inMemoryPersonPersistence = new InMemoryPersonPersistence();
const inMemoryRelationshipPersistence = new InMemoryRelationshipPersistence();

const createPersonService = new CreatePersonService(inMemoryPersonPersistence);
const getPersonByDocumentService = new GetPersonByDocumentService(inMemoryPersonPersistence);
const createRelationshipService = new CreateRelationshipService(inMemoryRelationshipPersistence, inMemoryPersonPersistence);
const getRecommendationsService = new GetRecommendationsService(inMemoryPersonPersistence, inMemoryRelationshipPersistence);

const getPersonByDocumentController = new GetPersonByDocumentController(getPersonByDocumentService);
const createPersonController = new CreatePersonController(createPersonService);
const createRelationshipController = new CreateRelationshipController(createRelationshipService);
const getRecommendationsController = new GetRecommendationsController(getRecommendationsService);

export { createPersonController, getPersonByDocumentController, createRelationshipController, getRecommendationsController}