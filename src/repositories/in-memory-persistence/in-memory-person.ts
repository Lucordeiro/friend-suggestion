import { Person } from './../../entities/person';
import { PersonRepository } from './../person-repository';

export class InMemoryPersonPersistence implements PersonRepository{

    public items: Person[] = [
        {
            "name":"Lucas",
            "cpf":"70795522141"
        },
        {
            "name":"Lucas",
            "cpf":"70795522142"
        },
        {
            "name":"Lucas",
            "cpf":"70795522143"
        },
        {
            "name":"Lucas",
            "cpf":"70795522144"
        },
        {
            "name":"Lucas",
            "cpf":"70795522145"
        },
        {
            "name":"Lucas",
            "cpf":"70795522146"
        },{
            "name":"Lucas",
            "cpf":"70795522147"
        },
        {
            "name":"Lucas",
            "cpf":"70795522148"
        },
    ];

    async create(person: Person): Promise<void> {

        this.items.push(person);
    }
    async getByDocument(cpf: string): Promise<any> {
        return this.items.find( (item) => item.cpf === cpf);
    }
}