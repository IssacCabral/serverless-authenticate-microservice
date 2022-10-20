import {Request, Response} from 'express'
import { CreateUserService } from '../services/CreateUserService'

export class CreateUserController{
  async handle(request: Request, response: Response){
    const {email, password} = request.body
    const createUserService = new CreateUserService()
    const user = await createUserService.execute({email, password})
    return response.status(201).json(user)
  }
}

