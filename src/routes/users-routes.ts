import { Router } from "express";
import { CreateUserController } from "../app/controllers/CreateUserController";
import { DeleteUserController } from "../app/controllers/DeleteUserController";

const usersRoutes = Router()

usersRoutes.post('/users', new CreateUserController().handle)
usersRoutes.delete('/users/:userEmail', new DeleteUserController().handle)

export default usersRoutes