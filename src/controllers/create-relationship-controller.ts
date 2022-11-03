import { Request, Response } from 'express';
import { CreateRelationshipService } from './../services/create-relationship-service';

export class CreateRelationshipController{

    constructor(private createRelationshipService: CreateRelationshipService){ }

    async handle(request:Request, response:Response): Promise<Response> {
       
        const { cpf1, cpf2 } = request.body;
        
        try {
            await this.createRelationshipService.execute({ cpf1, cpf2 });
            return response.status(201).send();
        }catch (err: any) {
            return response.status(404).json({ message: err.message || "Unexpected error.", });
        }
    
    }
}