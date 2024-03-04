const sequelize = require('../../database')
const {DataTypes} = require('sequelize')

const UserModel = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull:false
    },
    nss: {
        type: DataTypes.STRING,
    },
    date_birth:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    dni: {
        type: DataTypes.STRING,
        unique: true,
        allowNull:false
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password: {
            type: DataTypes.STRING,
            allowNull:false
    },
    phone:  {
            type: DataTypes.STRING,
            allowNull:false,
        },
    
})

module.exports = UserModel