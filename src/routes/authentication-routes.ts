import { Router } from "express";
import { CreateAuthUserController } from "../app/controllers/CreateAuthUserController";

const authenticationRoutes = Router()

authenticationRoutes.post('/auth', new CreateAuthUserController().handle)

export default authenticationRoutes