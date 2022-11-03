import { describe, expect, test } from '@jest/globals';
import { Person } from './person';

    test('create person',()=>{
        const person = new Person({
            name:'João da Silva',
            cpf:'11122233345'
        });
        expect(person).toBeInstanceOf(Person);
        expect(person.name).toEqual('João da Silva');
        expect(person.cpf).toEqual('11122233345');
    });
    test('cannot create person with invalid characters in cpf',() => {
        expect( () => {
            return new Person({
                name:'João da Silva',
                cpf:'1112223334a'
            });
        }).toThrow();
    });
    test('cannot create person with lower quantity numbers in cpf',() => {
        expect( () => {
            return new Person({
                name:'João da Silva',
                cpf:'1112223'
            });
        }).toThrow();
    });