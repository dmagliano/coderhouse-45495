import express, { urlencoded } from'express'
import cors from 'cors'
import dotenv from 'dotenv'
import stripeRouter from './router/stripe-router.js'

dotenv.config({ path: '../.env' })
const app = express()
const port = 8080

app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api/payments', stripeRouter)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
console.log(process.env.REACT_APP_STRIPE_KEY);
