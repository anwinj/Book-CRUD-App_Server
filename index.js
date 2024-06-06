require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/routes')
require('./DB/connection')

const bkServer = express()
bkServer.use(cors())
bkServer.use(express.json())
bkServer.use(router)
bkServer.use('/uploads',express.static('./uploads'))

const PORT = 3000 || process.env.PORT

bkServer.listen(PORT,()=>{
    console.log(`Book Server Started at port: ${PORT}`);
})

bkServer.get('/',(req,res)=>{
    res.status(200).send("<h1>Book Server Started!!! Waiting for Client Request....</h1>")
})