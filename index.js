require('dotenv').config()
const express = require('express')
const api = express()
const morgan = require('morgan')
api.use(express.json())

api.use(morgan('dev'))

api.listen(3000,(req,res) => {
    
})