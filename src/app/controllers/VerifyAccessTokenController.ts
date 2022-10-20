import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import env from "../../config/env";

export class VerifyAccessTokenController{
  async handle(request: Request, response: Response){
    const {authToken} = request.body

    if(authToken === undefined || authToken === "Bearer"){
      return response.status(401).json({message: "Token not provided"})
    }
    
    const token = authToken.split(' ')[1]

    jwt.verify(token, env.SECRET_JWT_KEY!, (error, data) => {
      if(error) return response.status(400).json({message: 'Invalid token'})
      return response.status(200).json(data)
    })

  }
}