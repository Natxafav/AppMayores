const UserModel = require('../api/models/user.model')
const FamilyModel = require('../api/models/family.model')
const UserFamilyModel = require ('../api/models/user_family.model')
const RoleModel = require('../api/models/role.model')
const ReminderModel = require('../api/models/reminder.model')

const createRelationShips = () => {
    UserModel.belongsToMany(FamilyModel,{ through: UserFamilyModel, as: 'family' })
    FamilyModel.belongsToMany(UserModel, { through: UserFamilyModel, as: 'family' })
    
    UserModel.hasMany(RoleModel)
    RoleModel.belongsTo(UserModel)

    UserModel.hasMany(ReminderModel)
    ReminderModel.belongsTo(UserModel)

}
module.exports = createRelationShips