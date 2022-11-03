import { PersonRepository } from '../repositories/person-repository';
import { RelationshipRepository } from './../repositories/relationship-repository';

export class CleanDataService{
    constructor(private PersonRepository :PersonRepository, private RelationshipRepository:RelationshipRepository){ }
    
    async execute(){
        this.PersonRepository.clean();
        this.RelationshipRepository.clean();
    }
}
