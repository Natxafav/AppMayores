const UserModel = require('../api/models/user.model')
const FamilyModel = require('../api/models/family.model')
const MedicationModel = require('../api/models/medication.model')
const AppointmentModel = require('../api/models/appointment.model')
const RoleModel = require('../api/models/role.model')
const ReminderModel = require('../api/models/reminder.model')

const createRelationShips = () => {

    FamilyModel.hasMany(UserModel)
    UserModel.belongsTo(FamilyModel)

    /* UserModel.belongsToMany(FamilyModel, { through: UserFamilyModel, as: 'family' })
    FamilyModel.belongsToMany(UserModel, { through: UserFamilyModel, as: 'family' }) */

    UserModel.hasMany(MedicationModel)
    MedicationModel.belongsTo(UserModel)

    UserModel.hasMany(AppointmentModel)
    AppointmentModel.belongsTo(UserModel)

    RoleModel.hasMany(UserModel)
    UserModel.belongsTo(RoleModel)

    UserModel.hasMany(ReminderModel)
    ReminderModel.belongsTo(UserModel)

}
module.exports = createRelationShips