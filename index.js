
require('dotenv').config()
const morgan = require('morgan')
const createRelationShips = require('./database/relationships.js')
const express = require('express')
const api = express()

const sequelize = require('./database')
const dbSync = require('./database/dbSync')

api.use(morgan('dev'))
api.use(express.json())

api.get('/', (req,res) => {
    res.status(200).send('All ok')
})

api.use('/api', require('./api/routes'))


const dbCheck = async (req, res) => {
try {
    await sequelize.authenticate();
    await createRelationShips()
    //await dbSync();
    
} catch (error) {
    throw new Error(error)
}
}

api.listen(process.env.PORT, (err) => {
    if (err) throw new Error('Database failed')
    console.log('*'.repeat(50))
    console.log(`API connected to ${process.env.PORT}`)
    console.log('*'.repeat(50))
    dbCheck()
}
)