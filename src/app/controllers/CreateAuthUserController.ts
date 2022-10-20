import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dataSource from "../../database/data-source";
import { User } from "../entities/User";
import validateCreateAuthUserInputs from "../helpers/validate-create-auth-user-inputs";
import env from "../../config/env";

export class CreateAuthUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;
    const validateInputsResult = validateCreateAuthUserInputs(request)

    if (validateInputsResult.length > 0) return response.status(400).json(validateInputsResult);

    const connection = await dataSource.initialize();
    const usersRepository = connection.getRepository(User);

    const userExists = await usersRepository.findOne({ where: { email } });
    if(!userExists) {
      await connection.destroy()
      return response.status(400).json({message: 'invalid credentials'})
    }

    const correctPass = bcrypt.compareSync(password, userExists.password);
    if(!correctPass) {
      await connection.destroy()
      return response.status(400).json({message: 'invalid credentials'})
    }

    await connection.destroy()
    const accessToken = jwt.sign({email}, env.SECRET_JWT_KEY!, {expiresIn: '3d'})

    return response.status(200).json({
      accessToken,
      userEmail: email
    })

  }
}
