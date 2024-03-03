const sequelize = require('../../database')
const { DataTypes } = require ('sequelize')

const RoleModel = sequelize.define('roles', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = RoleModel