import { Router } from "express";

const mainRouter = Router()

mainRouter.get('/', (req, res) => {
  return res.json({message: 'Olá amegan'})
})

export default mainRouter