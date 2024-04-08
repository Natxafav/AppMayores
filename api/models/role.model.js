const sequelize = require('../../database')
const { DataTypes } = require ('sequelize')

const RoleModel = sequelize.define('role', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = RoleModel