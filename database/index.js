
const {Sequelize} = require('sequelize')

    const sequelize = new Sequelize(process.env.DB_URI1)
    const sequelize = new Sequelize(process.env.DB_URI)
module.exports = sequelize