import "reflect-metadata"
import express, {json} from 'express'
import corsConfig from './config/corsConfig'
import mainRouter from './routes/main-router'

const app = express()

app.use(json())
app.use(corsConfig)
app.use(mainRouter)

app.listen(3000, () => {
  console.log('server is running')
})

// export default app