import { Person } from './../entities/person';
import { PersonRepository } from '../repositories/person-repository';

export class GetPersonByDocumentService{
    constructor(private PersonRepository :PersonRepository){ }
    
    async execute(data: Person){
        
        const person = await this.PersonRepository.getByDocument(data.cpf);

        if(!person){
            throw new Error(' Esté número de CPF não está cadastrado :(');
        }
        return person;
    }
}