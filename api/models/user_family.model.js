const sequelize = require('../../database')
const { DataTypes } = require('sequelize')

const UserFamilyModel = sequelize.define('user_family', {
},
{
    timestamps:false
})

module.exports = UserFamilyModel