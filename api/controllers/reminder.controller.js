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



const createReminder = async (req, res) => {
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
    createReminder,
    removeReminder,
    updateReminder
}