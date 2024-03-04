const sequelize = require('./index.js')
const UserModel = require('../api/models/user.model.js')
const FamilyGroup = require('../api/models/family.model.js')
const UserFamilyModel = require('../api/models/user_family.model.js')
const MedicationModel = require('../api/models/medication.model.js')
const AppointmentModel = require('../api/models/appointment.model.js')
const RoleModel = require('../api/models/role.model')
const ReminderModel = require('../api/models/reminder.model')


const dbSync = async () => {
    try {
        await FamilyGroup.sync({alter:true}) 
        await UserModel.sync({alter:true})
        await UserFamilyModel.sync({alter:true})
        await MedicationModel.sync({alter: true})
        await AppointmentModel.sync({alter:true})
        await RoleModel.sync({alter:true})
        await ReminderModel.sync({alter:true})
    } catch (error) {
        throw error
    }
}

module.exports = dbSync