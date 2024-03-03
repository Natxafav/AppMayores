const sequelize = require('../../database')
const {DataTypes}= require('sequelize')

const AppointmentModel = sequelize.define(
    'appointment',{
        lugar: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        especialista: {
            type: DataTypes.STRING,
            allowNull:false
        },
        fechaHora:{
            type: DataTypes.DATE,
            allowNull:false
        }, 
        descripcion: {
            type: DataTypes.STRING,

        }
    }
)

module.exports = AppointmentModel
