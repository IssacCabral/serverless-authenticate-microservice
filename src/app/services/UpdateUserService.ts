import { UpdateUserDTO } from "./dtos/UpdateUserDTO";
import { User } from "../entities/User";
import dataSource from "../../database/data-source";

export class UpdateUserService{
  async execute(userEmail: string, data: UpdateUserDTO): Promise<User | Error>{
    const connection = await dataSource.initialize()
    const usersRepository = connection.getRepository(User)

    const user = await usersRepository.findOneBy({email: userEmail})
    
    if(!user){
      await connection.destroy()
      return new Error('user not found')
    }

    await usersRepository.update({email: userEmail}, {...data})

    const updatedUser = usersRepository.create({...user, ...data})
    const userWithoutPassword: User = {...updatedUser, password: undefined as any}
    
    await connection.destroy()
    return userWithoutPassword
  }
}