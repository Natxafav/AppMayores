<<<<<<< HEAD
const UserModel = require("../api/models/user.model");
const FamilyModel = require("../api/models/family.model");
const UserFamilyModel = require("../api/models/user_family.model");
const MedicationModel = require("../api/models/medication.model");
const AppointmentModel = require("../api/models/appointment.model");
const RoleModel = require("../api/models/role.model");
const ReminderModel = require("../api/models/reminder.model");
const UserRoleModel= require("../api/models/user_roles.model")

const createRelationShips = () => {
  UserModel.belongsToMany(FamilyModel, {
    through: UserFamilyModel,
    as: "family",
  });
  FamilyModel.belongsToMany(UserModel, {
    through: UserFamilyModel,
    as: "family",
  });
=======
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
>>>>>>> Alberto

  UserModel.hasMany(MedicationModel);
  MedicationModel.belongsTo(UserModel);

  UserModel.hasMany(AppointmentModel);
  AppointmentModel.belongsTo(UserModel);

<<<<<<< HEAD
  /*
  UserModel.hasMany(RoleModel)
    RoleModel.belongsTo(UserModel)
   
   RoleModel.hasMany(UserModel);
   UserModel.belongsTo(RoleModel); */
=======
    RoleModel.hasMany(UserModel)
    UserModel.belongsTo(RoleModel)
>>>>>>> Alberto

  RoleModel.belongsToMany(UserModel, { through: UserRoleModel,as: 'userRole'});
  UserModel.belongsToMany(RoleModel, { through: UserRoleModel,as: 'userRole' });

  UserModel.hasMany(ReminderModel);
  ReminderModel.belongsTo(UserModel);
};
module.exports = createRelationShips;
