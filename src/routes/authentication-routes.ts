import { Router } from "express";
import { CreateAuthUserController } from "../app/controllers/CreateAuthUserController";
import { VerifyAccessTokenController } from "../app/controllers/VerifyAccessTokenController";

const authenticationRoutes = Router()

authenticationRoutes.post('/auth', new CreateAuthUserController().handle)
authenticationRoutes.post('/tokens/verify', new VerifyAccessTokenController().handle)

export default authenticationRoutes