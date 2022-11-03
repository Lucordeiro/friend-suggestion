import { Request, Response } from 'express';
import { GetPersonByDocumentService } from './../services/get-person-by-document-service';

export class GetPersonByDocumentController{
    constructor(private getPersonByDocumentService: GetPersonByDocumentService){ }
    async handle(request:Request, response:Response): Promise<Response>{

        const { cpf } = request.params;

        try {
            await this.getPersonByDocumentService.execute({ name:null,cpf:cpf});

            return response.status(200).send();
        }catch (err:any) {
            return response.status(400).json({ message: err.message || "Unexpected error.", });
        }
    }
}