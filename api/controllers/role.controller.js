    const RoleModel = require('../models/role.model')

const getallRoles = async(req,res) => {
    try {
        const rols = await RoleModel.findAll()
        res.status(200).json(rols)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to get all roles')
    }
}

const getOneRole = async(req, res) => {
    try {
        const roles = await RoleModel.findByPk(req.params.id)
        res.status(200).json(roles)
    } catch (error)  {
        console.log(error)
        res.status(500).send('Error to find this id')
    }
}
const createRole = async (req, res) => {
    try {
        const newrole = await RoleModel.create(req.body)
        res.status(200).json(newrole)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to add a new role.')
    }
}

const removeRole = async(req,res) => {
    try {
        const selectRole = await RoleModel.findByPk(req.params.id)
        await selectRole.destroy()
        res.status(200).send('Role removed.')
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to remove a role')
        
    }
}

const updateRole = async(req, res) => {
    try {
        const selectRole = await RoleModel.findByPk(req.params.id)
        await selectRole.update(req.body)
        res.status(200).json(selectRole)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to modify role')
    }
}

module.exports = {
    getallRoles,
    getOneRole,
    createRole,
    removeRole,
    updateRole
}