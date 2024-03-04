const sequelize = require('../../database')
const { DataTypes } = require('sequelize')

const ReminderModel = sequelize.define('Reminders', {
    name : {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Date: {
        type: DataTypes.DATE,
        allowNull: false
    },
})

module.exports = ReminderModel 