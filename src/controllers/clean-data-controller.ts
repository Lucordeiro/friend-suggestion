import { Request, Response } from 'express';
import { CleanDataService } from '../services/clean-data-service';
export class CleanDataController{
    constructor(private cleanDataService:CleanDataService){ }
    async handle(request:Request, response:Response):Promise<Response>{
       try{
            await this.cleanDataService.execute();

            return response.status(200).send();
       }catch(err:any){
            return response.status(400).json({ message: err.message || "Unexpected error.", });
       }

    }
}
