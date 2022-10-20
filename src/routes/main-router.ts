import { Router } from "express";
import usersRoutes from "./users-routes";
import authenticationRoutes from "./authentication-routes";

const mainRouter = Router()

mainRouter
  .use(usersRoutes)
  .use(authenticationRoutes)

export default mainRouter