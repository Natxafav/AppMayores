const sequelize = require('./index.js')
const UserModel = require('../api/models/user.model.js')
const FamilyGroup = require('../api/models/family.model.js')
const MedicationModel = require('../api/models/medication.model.js')
const AppointmentModel = require('../api/models/appointment.model.js')
const RoleModel = require('../api/models/role.model')
const ReminderModel = require('../api/models/reminder.model')
const UserRoles = require('../api/models/user_roles.model.js')


const dbSync = async () => {
    try {
        await FamilyGroup.sync({alter:false}) 
        await RoleModel.sync({alter:false})
        await UserModel.sync({alter:false})
        await MedicationModel.sync({alter: false})
        await AppointmentModel.sync({alter:false})
        await ReminderModel.sync({alter:false})
    } catch (error) {
        throw error
    }
}

module.exports = dbSync