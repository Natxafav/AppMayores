const UserModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signup = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALT))
        req.body.password = bcrypt.hashSync(req.body.password, salt)
        
        const user = await UserModel.create(req.body)

        const token = jwt.sign({
            email: user.email
        }, process.env.JWT_SECRET)
        res.status(200).json({ token , roleId: user.roleId})
  
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to create a user')
    }
}


const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({
            where: { email: req.body.email }
        })
   
        if (!user) return res.status(401).send('Email/password incorrect')
        const password = await bcrypt.compare(req.body.password, user.password)
        
        if (!password) return res.status(401).send('Email/password incorrect')
        
        const token = jwt.sign({
            email: user.email,
           
        }, process.env.JWT_SECRET)
        res.status(200).json({ token ,  roleId: user.roleId, email:user.email, FamilyGroupId:user.FamilyGroupId })

    } catch (error) {
        console.log(error)
        res.status(500).send('Error loggin')
    }
}

module.exports = {
    signup,
    login
}