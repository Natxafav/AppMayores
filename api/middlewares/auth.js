const jwt = require('jsonwebtoken')
const UserModel = require('../models/user.model')

const checkAuth = (req, res, next) => {
    if (!req.headers.authorization) return res.status(401).send('Invalid token')

    jwt.verify(req.headers.authorization, process.env.JWT_SECRET, async (err, payload) => {
        try {
            if (err) return res.status(401).send('No user found')
            const user = await UserModel.findOne({
                where: {
                    email: payload.email
                }
            })
            if(!user) return res.status(401).send('Unauthorized')
            res.locals.user = user
            next()
        } catch (error) {
            res.status(500).send('Invalid user')
        }
    })
}

const checkAdmin = (req,res,next) => {
    if(res.locals.user.role != 'admin') return res.status(401).send('you are not a admin')
    next()
}

module.exports = {
    checkAuth,
    checkAdmin
}