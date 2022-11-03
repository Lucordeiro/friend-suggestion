import { Relationship } from './../entities/relationship';
import { RelationshipRepository } from './../repositories/relationship-repository';
import { PersonRepository } from '../repositories/person-repository';
export class CreateRelationshipService{
    constructor(private RelationshipRepository :RelationshipRepository, private personRepository :PersonRepository){ }
    
    async execute(data: Relationship){
    
        const relationship = new Relationship(data);
        const overlappingRelationship = await this.RelationshipRepository.hasOverlapping(relationship);
        if(overlappingRelationship){
            throw new Error('Esta relação já existe :(');
        }

        const cpf1_exists = await this.personRepository.getByDocument(data.cpf1);
        const cpf2_exists = await this.personRepository.getByDocument(data.cpf2);
        if(!cpf1_exists || !cpf2_exists){
            throw new Error('Para criar uma relação os 2 usuários devem existir :(');
        }
        
        await this.RelationshipRepository.create(relationship);
    }
}
