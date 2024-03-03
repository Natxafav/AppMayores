const sequelize = require('../../database')
const {DataTypes} = require('sequelize')

const MedicationModel = sequelize.define (
    'medication' , {
        name: {
            type: DataTypes.STRING,
        allowNull:false
        },
        fechaHora:{
            type: DataTypes.DATE,
            allowNull:false
        },
        posology:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        end:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        description: {
            type: DataTypes.STRING
        }
    }
)
module.exports = MedicationModel