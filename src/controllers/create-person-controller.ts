import { Request, Response } from 'express';
import { CreatePersonService } from './../services/create-person-service';

export class CreatePersonController{

    constructor(private createPersonService: CreatePersonService){ }

    async handle(request:Request, response:Response): Promise<Response> {
       
        const { name, cpf } = request.body;
        
        try {
            await this.createPersonService.execute({ name, cpf });
            return response.status(201).send();
        }catch (err: any) {
            return response.status(400).json({ message: err.message || "Unexpected error.", });
        }
    
    }
}