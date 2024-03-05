const express = require('express')
const cors = require('cors')
const {dbConnect} = require('./db/db')
const transactionsRouter = require('./routes/transactions')
const {readdirSync} = require('fs')

const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
)
readdirSync('./routes').map((route) => app.use('/api/v1', transactionsRouter))

const server = () => {
    dbConnect()
    app.listen(PORT, (req, res)=>{
        console.log(`listening to port ${PORT}`);
    })
}

server()