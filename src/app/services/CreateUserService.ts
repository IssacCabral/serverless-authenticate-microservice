import { CreateUserDTO } from "./dtos/CreateUserDTO";
import { User } from "../entities/User";
import dataSource from "../../database/data-source";

export class CreateUserService{
  async execute(data: CreateUserDTO): Promise<User>{
    const connection = await dataSource.initialize()
    const usersRepository = connection.getRepository(User)

    const user = usersRepository.create(data)
    await usersRepository.save(user)

    await connection.destroy()

    const userWithoutPassword: User = {...user, password: undefined as any}
    return userWithoutPassword
  }
}