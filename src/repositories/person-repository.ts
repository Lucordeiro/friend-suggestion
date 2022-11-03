import { Person } from '../entities/person';

export interface PersonRepository{
    create(person:Person): Promise<void>;
    getByDocument(cpf:string):Promise<Person>;
    clean():Promise<void>;
}