import { Relationship } from './../../entities/relationship';
import { RelationshipRepository } from './../relationship-repository';

export class InMemoryRelationshipPersistence implements RelationshipRepository{

    public items: Relationship[] = [
        {
            "cpf1":"70795522145",
            "cpf2":"70795522148",
        },
        {
            "cpf1":"70795522148",
            "cpf2":"70795522142",
        },
        {
            "cpf1":"70795522146",
            "cpf2":"70795522143",
        },
        {
            "cpf1":"70795522147",
            "cpf2":"70795522143",
        },
        {
            "cpf1":"70795522147",
            "cpf2":"70795522144",
        },
        {
            "cpf1":"70795522143",
            "cpf2":"70795522142",
        },
        {
            "cpf1":"70795522143",
            "cpf2":"70795522141",
        },
        {
            "cpf1":"70795522144",
            "cpf2":"70795522142",
        },
        {
            "cpf1":"70795522145",
            "cpf2":"70795522144",
        },
        {
            "cpf1":"70795522145",
            "cpf2":"70795522143",
        },
        
    ];
    
    async create(relationship: Relationship): Promise<void> {
        this.items.push(relationship);
    }
    async hasOverlapping(relationship: Relationship): Promise<any> {
        const { cpf1, cpf2 } = relationship
        return this.items.find( (item) => item.cpf1 === cpf1 && item.cpf2 === cpf2 || item.cpf1 === cpf2 && item.cpf2 === cpf1);
    }
    async getByPerson(cpf: string): Promise<any> {
        //return this.items.filter( (item) => item.cpf1 === cpf || item.cpf2 === cpf);

        let relationships : any[];
        relationships = this.items.filter( (item) => item.cpf1 === cpf || item.cpf2 === cpf);

        relationships = relationships.map( (item:any) => {
            const relationship = cpf == item.cpf1 ? item.cpf2 : item.cpf1;
            return {
                user:cpf,
                relationship:relationship
            }
           
        });
        return relationships
    }
}