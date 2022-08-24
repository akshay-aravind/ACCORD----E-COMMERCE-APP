import express, { application } from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'
dotenv.config()

connectDB()

const app = express()

app.use(express.json())
const port = process.env.PORT || 9000

app.get('/', (req, res) => {
  res.send('API is Running')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () =>
  console.log(` ${port} in ${process.env.NODE_ENV} mode `.yellow.bold)
)
