import {Request, Response} from 'express'
import { UpdateUserService } from '../services/UpdateUserService'

export class UpdateAuthUserController{
  async handle(request: Request, response: Response){
    const userEmail = request.params['userEmail']

    const updateUserService = new UpdateUserService()
    const result = await updateUserService.execute(userEmail, request.body)

    return result instanceof Error ? 
      response.status(404).json(result.message) :
      response.status(200).json({result})
  }
}