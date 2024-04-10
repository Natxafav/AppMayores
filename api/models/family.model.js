const sequelize = require('../../database')
const { DataTypes } = require('sequelize')

const FamilyModel = sequelize.define('FamilyGroup', {
    name: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique:true
    }
})

module.exports = FamilyModel