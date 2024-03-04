const sequelize = require('../../database')
const {DataTypes} = require('sequelize')

const MedicationModel = sequelize.define (
    'medication' , {
        name: {
            type: DataTypes.STRING,
        allowNull:false
        },
        datetime:{
            type: DataTypes.DATE,
            allowNull:false
        },
        posology:{
            type: DataTypes.TIME,
            allowNull:false
        },
        end:{
            type: DataTypes.DATE, 
            allowNull:false
        },
        description: {
            type: DataTypes.STRING
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
)
module.exports = MedicationModel