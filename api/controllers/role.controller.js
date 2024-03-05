const RoleModel = require('../models/role.model')
const UserModel = require('../models/user.model')

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

const addUserRole = async(req,res) => {
    try {
        const user =await UserModel.findByPk(req.params.id)
        const Role =await RoleModel.findByPk(req.params.roid)
        const newRole = await user.addRole(Role)
        res.status(200).send(`Role linked to ${user.name}`)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to sync Role to user')
    }
}

const removeUserRole = async (req,res) => {
    try {
        const user =await UserModel.findByPk(req.params.id)
        const Role =await RoleModel.findByPk(req.params.roid)
        const newRole = await user.removeRole(Role)
        res.status(200).send(`Role unlinked to ${user.name}`)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to add a family')
    }
}

module.exports = {
    getallRoles,
    getOneRole,
    createRole,
    removeRole,
    updateRole,
    addUserRole,
    removeUserRole
}