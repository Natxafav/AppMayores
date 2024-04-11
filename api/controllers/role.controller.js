const RoleModel = require('../models/role.model')
const UserModel = require('../models/user.model')
const UserRoleModel = require('../models/user_roles.model')

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


const removeUserRole = async (req,res) => {
    try {
        console.log(req.params)
        const user =await UserModel.findByPk(req.params.id)
        const role =await RoleModel.findByPk(req.params.roid)
       
        const newroleuser = await user.removeUserRole(role)
        res.status(200).json(newroleuser)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to remove a role')
    }
}


const addUserRole = async (req,res) => {
    try {
        console.log(req.params)
        const user =await UserModel.findByPk(req.params.id)
        const role =await RoleModel.findByPk(req.params.roid)
        const newroleuser = await user.addUserRole(role)
        res.status(200).json(newroleuser)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to add a role')
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