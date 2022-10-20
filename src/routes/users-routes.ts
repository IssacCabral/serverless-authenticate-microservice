import { Router } from "express";
import { CreateUserController } from "../app/controllers/CreateUserController";
import { DeleteUserController } from "../app/controllers/DeleteUserController";
import { UpdateAuthUserController } from "../app/controllers/UpdateAuthUserController";

const usersRoutes = Router()

usersRoutes.post('/users', new CreateUserController().handle)
usersRoutes.patch('/users/:userEmail', new UpdateAuthUserController().handle)
usersRoutes.delete('/users/:userEmail', new DeleteUserController().handle)

export default usersRoutes