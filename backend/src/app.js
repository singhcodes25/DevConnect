const express = require('express')
const authRoutes = require('./routes/auth.routes')
const cors = require('cors')
const cookieParser = require("cookie-parser")
const dotenv = require('dotenv');
const sellerRoutes = require('./routes/seller.routes')
const checkIfSellerRoutes = require('./routes/checkIfSeller.routes')


dotenv.config();
const app = express()

app.use(cors({
   origin: "http://localhost:5173",
   credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api/auth', authRoutes)

app.use('/api/sellers', sellerRoutes)

app.use('/api/check-seller', checkIfSellerRoutes)


module.exports = app
