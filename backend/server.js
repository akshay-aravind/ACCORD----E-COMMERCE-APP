import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()
const port = process.env.PORT || 9000

app.get('/', (req, res) => {
  res.send('API is Running')
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () =>
  console.log(` ${port} in ${process.env.NODE_ENV} mode `.yellow.bold)
)
