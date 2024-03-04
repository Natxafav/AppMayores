const UserModel = require('../models/user.model')

const getAllUsers = async (req, res) => {
    try {
        const users = UserModel.findAll()
        if(users.length === 0){
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
        const user = await UserModel.findByPk(req.params.id)
        if(user){
          return  res.status(200).json(user)
        }else {
          return  res.status(404).send('User not found')
        }
    } catch (error) {
       return res.status(500).send('Error', error.message)
    }
}


const updateUser = async (req, res) => {
    try {
        const [userExist, user]= await UserModel.update(
            req.body, 
            {
                returning: true,
                where:{
                    id: req.params.id
                }
            })
        if(userExist !== 0 ) {
            return res.status(200).json({
                message: 'User updated',
                user: user
            })
        }else {
            return res.status(404).send('User not found')
        }
    } catch (error) {
        return res.status(500).send('Error retrieving data')
    }
}

const deleteUser = async(req,res) => {
    try {
        const user = UserModel.destroy({
            where:{
                id:req.params.id
            }
        })
        if(user){
            return res.status(200).send('User deleted')
        }else{
            return res.status(404).send('User not found')
        }
    } catch (error) {
        return res.status(500).send('Error', error.message)
    }
}


module.exports = {
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
}