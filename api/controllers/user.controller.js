const UserModel = require('../models/user.model')
const FamilyModel = require('../models/family.model')
const UserFamilyModel = require('../models/user_family.model')

const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.findAll({ attributes: { exclude: ['email', 'password'] } })
        if (users.length === 0) {
            return res.status(404).send('User not found')
        }
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
        return res.status(500).send('Error to get users')
    }
}
const getOneUser = async (req, res) => {
    try {
        const user = await UserModel.findByPk(req.params.id, { attributes: { exclude: ['email', 'password'] } })
        if (user) {
            return res.status(200).json(user)
        } else {
            return res.status(404).send('User not found')
        }
    } catch (error) {
        return res.status(500).send('Error', error.message)
    }
}


const updateUser = async (req, res) => {
    try {
        if(req.body.email || req.body.password || req.body.id){
            return res.status(403).send('Error to overwrite email, password or id')
        }
        const [userExist, user] = await UserModel.update(
            req.body,
            {
                returning: true,
                where: {
                    id: req.params.id
                },
                fields:['name','lastname','nss','date_birth','dni','phone']
            })

            
            if (userExist !== 0) {
                return res.status(200).json({
                    message: 'User updated',
                    user: user
                })
            } else {
                return res.status(404).send('User not found')
            }

        } catch (error) {
            return res.status(500).send('Error retrieving data')
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await UserModel.destroy({
            where: {
                id: req.params.id
            }
        })
        if (user) {
            return res.status(200).send('User deleted')
        } else {
            return res.status(404).send('User not found')
        }
    } catch (error) {
        return res.status(500).send('Error', error.message)
    }
}


const removeUserFamily = async (req,res) => {
    try {
        const user =await UserModel.findByPk(req.params.id)
        const family =await FamilyModel.findByPk(req.params.fmid)
        console.log(family, user)
        const newfamilyuser = await user.removeFamily(family)
        res.status(200).json(newfamilyuser)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to add a family')
    }
}


const addUserFamily = async (req,res) => {
    try {
        const user =await UserModel.findByPk(req.params.id)
        const family =await FamilyModel.findByPk(req.params.fmid)
        const newfamilyuser = await user.addFamily(family)
        res.status(200).json(newfamilyuser)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to add a family')
    }
}


module.exports = {
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
    addUserFamily,
    removeUserFamily
}

