import { describe, expect, test } from '@jest/globals';
import { Person } from './../entities/person';
import { CreatePersonService } from './create-person-service';
import { InMemoryPersonPersistence } from './../repositories/in-memory-persistence/in-memory-person';

test('it should be able to create an person', () => {
    const inMemoryPersonPersistence = new InMemoryPersonPersistence()
    const createPerson = new CreatePersonService(inMemoryPersonPersistence);

    expect( createPerson.execute( {name:'João da Silva',cpf:'11122233344'} ) ).resolves.toBeInstanceOf(Person)
});

test('it should not be able to create an person', () => {
    const inMemoryPersonPersistence = new InMemoryPersonPersistence()
    const createPerson = new CreatePersonService(inMemoryPersonPersistence);

    expect( createPerson.execute( {name:'João da Silva',cpf:'70795522142'} ) ).rejects.toBeInstanceOf(Error)
})