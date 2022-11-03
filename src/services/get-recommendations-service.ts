import { Relationship} from './../entities/relationship';
import { PersonRepository } from './../repositories/person-repository';
import { RelationshipRepository } from './../repositories/relationship-repository';


export class GetRecommendationsService{
    
    constructor(private PersonRepository :PersonRepository, private relationshipRepository :RelationshipRepository){ }
    
    async execute(cpf:string){

        const person = await this.PersonRepository.getByDocument(cpf);
        if(!person){
            throw new Error('Este número de CPF não está cadastrado :(');
        }
        /**Busca todas as relaçoes do user */
        let relationships = await this.relationshipRepository.getByPerson(cpf);
        if(!relationships){
            throw new Error('Está pessoa não tem nenhum relacionamento :(');
        }
        /**Busca todas as relaçoes de cada relação do user */
        let relationships_of_friends: any[] = [];
        await relationships.forEach(async (item:any) => {
            let result: any[] = await this.relationshipRepository.getByPerson(item.relationship);
           
            relationships_of_friends = relationships_of_friends.concat(result);
        });
        /**Retira as relações com o próprio user */
        relationships_of_friends = relationships_of_friends.filter(item => item.relationship != cpf);
        
        /**Orderna as relações por relevância */
        let recommendations: any[] = [];
        relationships_of_friends.forEach((item) => {
         
            if(recommendations.some(val => val.relationship == item.relationship )){

                recommendations.forEach( (relationship)=> {
                    if(relationship.relationship === item.relationship){ 
                        relationship.occurrence++
                    }
                })
                
            }else{
                let a:any = {}
                a.relationship = item.relationship
                a.occurrence = 1
                recommendations.push(a);
            }
        });
        
        
        return recommendations;
    }
}
