const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')
const cors = require('cors')

const app = express();

// DOTENV
dotenv.config()

// CONNECT TO MONGODB
mongoose.set('useUnifiedTopology', true)

mongoose.connect(process.env.MONGODB_URI || process.env.DB_CONNECT,
    { useNewUrlParser: true }
    , () => console.log('Connected to DB'))

// ROUTES MIDDLEWARES
app.use(express.json())
app.use(cors())

// ROUTES
// Home
app.get('/', (req, res) => {
    res.send('Working')
})
// Register - Login
app.use('/user', authRoute)

// CONNECT TO PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server listening in port ${PORT}`);
})