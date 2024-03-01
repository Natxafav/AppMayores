const sequelize = require('./index.js')
const UserModel = require('../api/models/user.model.js')
const FamilyGroup = require('../api/models/family.model.js')
const UserFamilyModel = require('../api/models/user_family.model.js')

const dbSync = async () => {
    try {
        await FamilyGroup.sync({alter:true}) 
        await UserModel.sync({alter:true})
        await UserFamilyModel.sync({alter:true})
    } catch (error) {
        
    }
}

module.exports = dbSync