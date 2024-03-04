const UserModel = require('../models/user.model')

const getUsers = async (req, res) => {
    try {
        const users = UserModel.findAll()
        res.status(200).json(users)    
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to get users')
    }
}

