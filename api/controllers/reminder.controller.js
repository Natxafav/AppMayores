const ReminderModel = require('../models/reminder.model')
const UserModel = require('../models/user.model')

const getAllReminderUser = async (req, res) => {
    try {
        const user = await UserModel.findAll({
            where: { FamilyGroupId: res.locals.user.FamilyGroupId },
            attributes: { exclude: ["password", "email", "createdAt", "updatedAt"]},
            include: [{
                model: ReminderModel,
            }]
        })

        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to get all reminders')
    }
}

const getAllReminderAdmin = async (req, res) => {
    try {
        const reminder = await ReminderModel.findAll()
        res.status(200).json(reminder)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to get all reminders')
    }
}

const getOneReminderUser = async (req, res) => {
    try {
        const user = await UserModel.findOne({
            where: {
                 FamilyGroupId: res.locals.user.FamilyGroupId
            },
            attributes: { exclude: ["password", "email", "nss", "createdAt", "updatedAt"] },
            include: [{
                model: ReminderModel,
                where: {id: req.params.id}
            },
            
        ]
        })
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to get this reminder')
    }
}

const getOneReminderAdmin = async (req, res) => {
    try {
        const reminder = await ReminderModel.findByPk(req.params.id)
        res.status(200).json(reminder)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to get this reminder')
    }
}

const createReminderUser = async ( req,res) => {
    try {
        const oldUser = await UserModel.findOne({ where: { id: req.body.userId } })
        
        if (res.locals.user.roleId !== 2 && res.locals.user.FamilyGroupId !== oldUser.dataValues.FamilyGroupId) return res.status(404).send('Unathorized')
        const newreminder = await ReminderModel.create(req.body)
        res.status(200).json(newreminder)
    } catch (error) {
        res.status(500).send('Error to create a reminder. Try again later.')
    }
}

const createReminderAdmin = async (req, res) => {
    try {
        const newreminder = await ReminderModel.create(req.body)
        res.status(200).json(newreminder)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to add a new reminder.')
    }
}

const removeReminder = async (req, res) => {
    try {
        const oldReminder = await ReminderModel.findByPk(req.params.id);
        const oldUser = await UserModel.findByPk(oldReminder.userId)
        if (res.locals.user.roleId !== 1 &&  res.locals.user.FamilyGroupId !== oldUser.FamilyGroupId) return  res.status(404).send('Unathorized  23')
        const reminder = await ReminderModel.findByPk(req.params.id)
        await reminder.destroy()
        res.status(200).send('Reminder removed.')
    } catch (error) {
        console.log(error)
        res.status(500).send('error to remove a reminder')

    }
}

const updateReminder = async (req, res) => {
    try {
        const oldReminder = await ReminderModel.findByPk(req.params.id);
        const oldUser = await UserModel.findByPk(oldReminder.userId)
        if (res.locals.user.roleId !== 1 && res.locals.user.FamilyGroupId !== oldUser.FamilyGroupId) return  res.status(404).send('Unathorized')

        const reminder = await ReminderModel.findByPk(req.params.id)
        await reminder.update(req.body)
        res.status(200).send('Reminder updated')
    } catch (error) {

    }
}

module.exports = {
    getAllReminderUser,
    getAllReminderAdmin,
    getOneReminderUser,
    getOneReminderAdmin,
    createReminderUser,
    createReminderAdmin,
    removeReminder,
    updateReminder
}