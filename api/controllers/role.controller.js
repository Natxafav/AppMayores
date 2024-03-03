const RoleModel = require('../models/role.model')

const getRoles = async(req,res) => {
    try {
        const roles = RoleModel.findAll()
        res.status(200).json(roles)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to get all roles')
    }
}
const createRole = async (req, res) => {
    try {
        const newrole = RoleModel.create('req.body')
        res.status(200).json(newrole)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to add a new role.')
    }
}

const removeRole = async(req,res) => {
    try {
        const selectRole = await RoleModel.findOne({where: {id: req.query.idRole}})
        await RoleModel.destroy(selectRole)
        res.status(200).send('Role removed.')
    } catch (error) {
        
    }
}

const updateRole = async(req, res) => {
    try {
        const selectRole = await RoleModel.findOne({where: {id: req.query.idRole}})
        await RoleModel.update(selectRole, req.body)
        res.status(200).send('Role updated')
    } catch (error) {
        
    }
}

module.exports = {
    createRole,
    removeRole,
    updateRole
}