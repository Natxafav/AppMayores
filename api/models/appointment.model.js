const sequelize = require('../../database')
const {DataTypes}= require('sequelize')

const AppointmentModel = sequelize.define(
    'appointment',{
        locate: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        specialist: {
            type: DataTypes.STRING,
            allowNull:false
        },
        datetime:{
            type: DataTypes.DATE,
            allowNull:false
        }, 
        description: {
            type: DataTypes.STRING,

        },
        userId:{
            type: DataTypes.INTEGER,
            allowNull:false
        }
    }
)

module.exports = AppointmentModel
