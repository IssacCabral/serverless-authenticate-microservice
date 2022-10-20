import { User } from "../entities/User";
import dataSource from "../../database/data-source";

export class DeleteUserService{
  async execute(userEmail: string): Promise<Error | undefined>{
    const connection = await dataSource.initialize()
    const usersRepository = connection.getRepository(User)

    const user = await usersRepository.findOneBy({email: userEmail})
    console.log('userEmail: ' + userEmail)
    console.log('user: ' + user)

    if(!user){
      await connection.destroy()
      return new Error('user not found')
    }

    await usersRepository.remove(user)
    await connection.destroy()


  }
}