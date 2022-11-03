import { Person } from './../entities/person';
import { PersonRepository } from '../repositories/person-repository';

export class CreatePersonService{
    constructor(private PersonRepository :PersonRepository){ }
    
    async execute(data: Person){
        
        const person = new Person(data);
        const overlappingPerson = await this.PersonRepository.getByDocument(data.cpf);

        if(overlappingPerson){
            throw new Error(' Esté número de CPF já está cadastrado :(');
        }
        await this.PersonRepository.create(person);
    }
}
