const sequelize = require('../../database')
const {DataTypes} = require('sequelize')
const UserRoles = sequelize.define('UserRole', {},
{
    timestamps:false

})
module.exports = UserRoles
