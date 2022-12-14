import { Request, Response } from "express";
import { DeleteUserService } from "../services/DeleteUserService";

export class DeleteUserController{
  async handle(request: Request, response: Response){
    const {userEmail} = request.params

    const deleteUserService = new DeleteUserService()
    const result = await deleteUserService.execute(userEmail)

    return result instanceof Error ? 
      response.status(404).json(result.message) :
      response.status(200).json({message: 'successfully deleted'})
  }
}