import { Router } from "express";
import { CreateUserController } from "../app/controllers/CreateUserController";

const usersRoutes = Router()

usersRoutes.post('/users', new CreateUserController().handle)

export default usersRoutes