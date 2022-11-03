import { describe, expect, test } from '@jest/globals';

import { GetRecommendationsService } from './get-recommendations-service';

import { InMemoryPersonPersistence } from './../repositories/in-memory-persistence/in-memory-person';
import { InMemoryRelationshipPersistence } from './../repositories/in-memory-persistence/in-memory-relationship';

import { CreatePersonService } from './../services/create-person-service';
import { CreateRelationshipService } from './../services/create-relationship-service';

test('it should be able to get recommendations', () => {
    const inMemoryPersonPersistence = new InMemoryPersonPersistence();
    const inMemoryRelationshipPersistence = new InMemoryRelationshipPersistence();

    const createPerson = new CreatePersonService(inMemoryPersonPersistence);
    const person1 = createPerson.execute({name:'João da Silva',cpf:'70795522141'});
    const person2 = createPerson.execute({name:'Maria da Silva',cpf:'70795522142'});
    const person3 = createPerson.execute({name:'Pedro Pereira',cpf:'70795522143'});
    const person4 = createPerson.execute({name:'Júlia Moreira',cpf:'70795522144'});
    const person5 = createPerson.execute({name:'Matheus Araújo',cpf:'70795522145'});
    const person6 = createPerson.execute({name:'Cristiano Alves',cpf:'70795522146'});
    const person7 = createPerson.execute({name:'Livya Silva',cpf:'70795522147'});
    const person8 = createPerson.execute({name:'Paulo Miguel',cpf:'70795522148'});

    const createRelationship = new CreateRelationshipService(inMemoryRelationshipPersistence, inMemoryPersonPersistence);

    const relationship1 = createRelationship.execute({ "cpf1":"70795522145","cpf2":"70795522148" });
    const relationship2 = createRelationship.execute({"cpf1":"70795522148","cpf2":"70795522142"});
    const relationship3 = createRelationship.execute({"cpf1":"70795522146","cpf2":"70795522143"});
    const relationship4 = createRelationship.execute( {"cpf1":"70795522147","cpf2":"70795522143"});
    const relationship5 = createRelationship.execute({"cpf1":"70795522147","cpf2":"70795522144"});
    const relationship6 = createRelationship.execute({"cpf1":"70795522143","cpf2":"70795522142"});
    const relationship7 = createRelationship.execute({"cpf1":"70795522143","cpf2":"70795522141"});
    const relationship8 = createRelationship.execute({"cpf1":"70795522144","cpf2":"70795522142"});
    const relationship9 = createRelationship.execute({"cpf1":"70795522145","cpf2":"70795522144"});
    const relationship10 = createRelationship.execute({"cpf1":"70795522145","cpf2":"70795522143"});

    const getRecommendations = new GetRecommendationsService(inMemoryPersonPersistence, inMemoryRelationshipPersistence);
    
    expect( getRecommendations.execute('70795522145')).resolves.toEqual([
        {
            relationship: "70795522142",
            occurrence: 3
        },
        {
            relationship: "70795522147",
            occurrence: 2
        },
        {
            relationship: "70795522146",
            occurrence: 1
        },
        {
            relationship: "70795522141",
            occurrence: 1
        }
    ])
});