import { describe, expect, test } from '@jest/globals';
import { Relationship } from './relationship';

describe('create an relationship', () => {
    test('create relationship',() => {
        const relationship = new Relationship({
            cpf1:'55544433321',
            cpf2:'11122233345'
        });
        expect(relationship).toBeInstanceOf(Relationship);
        expect(relationship.cpf1).toEqual('55544433321');
        expect(relationship.cpf2).toEqual('11122233345');
    });
    
})