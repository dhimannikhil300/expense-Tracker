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
        "version": 2,
        "builds": [
          {
            "src": "./index.js",
            "use": "@vercel/node"
          }
        ],
        "routes": [
          {
            "src": "/(.*)",
            "dest": "./index.js",
            "methods": ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
            "headers": {
              "Access-Control-Allow-Origin": "*"
            }
          }
        ]
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