const UserModel = require('../models/user.model')
const FamilyModel = require('../models/family.model')


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

            const userupdated = await UserModel.findByPk(req.params.id)    

            if (userExist !== 0) {
                return res.status(200).json({
                    message: `User id: ${userupdated.id} updated `,
                    
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
        const family = await FamilyModel.findByPk(req.params.fmid)
        const newuserfamily = family.removeUser(user)
        res.status(200).send(`User ${user.name} removed from ${family.name}`)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to remove user')
    }
}


const addUserFamily = async (req,res) => {
    try {
        const user =await UserModel.findByPk(req.params.id)
        const family = await FamilyModel.findByPk(req.params.fmid)
        const newuserfamily = family.addUser(user)
        res.status(200).send(`User ${user.name} added to ${family.name}`)
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
    removeUserFamily,
    addUserFamily
}

