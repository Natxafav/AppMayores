const UserModel = require('../api/models/user.model')
const FamilyModel = require('../api/models/family.model')
const UserFamilyModel = require('../api/models/user_family.model')
const MedicationModel = require('../api/models/medication.model')
const AppointmentModel = require('../api/models/appointment.model')
const RoleModel = require('../api/models/role.model')
const ReminderModel = require('../api/models/reminder.model')

const createRelationShips = () => {
    UserModel.belongsToMany(FamilyModel, { through: UserFamilyModel, as: 'family' })
    FamilyModel.belongsToMany(UserModel, { through: UserFamilyModel, as: 'family' })

    UserModel.hasMany(MedicationModel)
    MedicationModel.belongsTo(UserModel)

    UserModel.hasMany(AppointmentModel)
    AppointmentModel.belongsTo(UserModel)

    UserModel.hasMany(RoleModel)
    RoleModel.belongsTo(UserModel)

    UserModel.hasMany(ReminderModel)
    ReminderModel.belongsTo(UserModel)

}
module.exports = createRelationShips