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
    if(res.locals.user.roleId != '1') return res.status(401).send('you are not a admin')
    next()
}

const checkTotal = (req, res, next) => {
    //cambiar en base de datos las ID de los roles.
    if(res.locals.user.roleId == '1' ||res.locals.user.roleId == '2' || res.locals.user.roleId == '3' || res.locals.user.roleId == '4') {
        next()
    }
    else{
        return res.status(401).send('Unauthorized 1')
    }
}

const checkMedium = (req, res, next) => {
    if(res.locals.user.roleId == '1' ||res.locals.user.roleId == '2' || res.locals.user.roleId == '3') {
        next()
    }
    else{
        return res.status(401).send('Unauthorized 2')
    }
}

const checkRestricted = (req, res, next) => {
    if(res.locals.user.roleId == '1' ||res.locals.user.roleId == '2') {
        next()
    }
    else{
        return res.status(401).send('Unauthorized 3')
    }
}

/* const checkResp = (req,res,next) => {
    if(res.locals.user.roleId != '2') return res.status(401).send('Unauthorized 2')
    next()
}

const checkDep = (req,res,next) => {
    if(res.locals.user.roleId != '3') return res.status(401).send('Unauthorized 3')
    next()
}
const checkUser = (req,res,next) => {
    if(res.locals.user.roleId != '4') return res.status(401).send('Unauthorized 4')
    next()
}
 */

module.exports = {
    checkAuth,
    checkAdmin,
    checkTotal,
    checkMedium,
    checkRestricted
}