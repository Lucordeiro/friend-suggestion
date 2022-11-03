import { describe, expect, test } from '@jest/globals';

import { Relationship } from './../entities/relationship';
import { InMemoryPersonPersistence } from './../repositories/in-memory-persistence/in-memory-person';
import { InMemoryRelationshipPersistence } from './../repositories/in-memory-persistence/in-memory-relationship';

import { CreatePersonService } from './../services/create-person-service';
import { CreateRelationshipService } from './../services/create-relationship-service';

test('it should be able to create an relationship', () => {

    const inMemoryPersonPersistence = new InMemoryPersonPersistence();
    const inMemoryRelationshipPersistence = new InMemoryRelationshipPersistence();

    const createPerson = new CreatePersonService(inMemoryPersonPersistence);
    const person1 = createPerson.execute({name:'João da Silva',cpf:'12345678911'});
    const person2 = createPerson.execute({name:'Maria da Silva',cpf:'12345678912'});

    const createRelationship= new CreateRelationshipService(inMemoryRelationshipPersistence, inMemoryPersonPersistence);


    expect( createRelationship.execute( {cpf1:'12345678911',cpf2:'12345678912'} ) ).resolves.toBeInstanceOf(Relationship)
});
test('it should not be able to create an relationship', () => {

    const inMemoryPersonPersistence = new InMemoryPersonPersistence();
    const inMemoryRelationshipPersistence = new InMemoryRelationshipPersistence();

    const createRelationship= new CreateRelationshipService(inMemoryRelationshipPersistence, inMemoryPersonPersistence);


    expect( createRelationship.execute( {cpf1:'12345678911',cpf2:'12345678912'} ) ).rejects.toBeInstanceOf(Error)
});
