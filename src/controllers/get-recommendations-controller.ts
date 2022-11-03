import { Request, Response } from 'express';

import { GetRecommendationsService } from './../services/get-recommendations-service';

export class GetRecommendationsController{
    constructor(private getRecommendationsService:GetRecommendationsService){ }

    async handle(request:Request, response:Response): Promise<Response>{

        const { cpf } = request.params;

        try {
            const recommendations = await this.getRecommendationsService.execute(cpf);
            
            return response.status(200).json({recommendations});
        }catch (err:any) {
            return response.status(404).json({ message: err.message || "Unexpected error.", });
        }
    }
}
