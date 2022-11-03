import { Relationship } from './../../entities/relationship';
import { RelationshipRepository } from './../relationship-repository';

export class InMemoryRelationshipPersistence implements RelationshipRepository{

    public items: Relationship[] = [];
    
    async create(relationship: Relationship): Promise<void> {
        this.items.push(relationship);
    }

    async hasOverlapping(relationship: Relationship): Promise<any> {
        const { cpf1, cpf2 } = relationship
        return this.items.find( (item) => item.cpf1 === cpf1 && item.cpf2 === cpf2 || item.cpf1 === cpf2 && item.cpf2 === cpf1);
    }
}