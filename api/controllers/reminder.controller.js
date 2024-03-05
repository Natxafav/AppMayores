const ReminderModel = require('../models/reminder.model')
const UserModel = require('../models/user.model')

const getAllReminder = async(req,res) => {
    try {
        const reminder = await ReminderModel.findAll()
        res.status(200).json(reminder)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to get all reminders')
    }
}

const getOneReminder = async(req,res) => {
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

const removeReminder = async(req,res) => {
    try {
        const reminder = await ReminderModel.findByPk(req.params.id)
        await reminder.destroy()
        res.status(200).send('Reminder removed.')
    } catch (error) {
        console.log(error)
        res.status(500).send('error to remove a reminder')
        
    }
}

const updateReminder = async(req, res) => {
    try {
        const reminder = await ReminderModel.findByPk(req.params.id)
        await reminder.update(req.body)
        res.status(200).send('Reminder updated')
    } catch (error) {
        
    } 
}

const addUserReminder = async(req,res) => {
    try {
        const user =await UserModel.findByPk(req.params.id)
        const reminder =await ReminderModel.findByPk(req.params.reid)
        const newReminder = await user.addReminder(reminder)
        res.status(200).send(`Reminder linked to ${user.name}`)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to sync reminder to user')
    }
}

const removeUserReminder = async (req,res) => {
    try {
        const user =await UserModel.findByPk(req.params.id)
        const Reminder =await ReminderModel.findByPk(req.params.reid)
        const newReminder = await user.removeReminder(Reminder)
        res.status(200).send(`Reminder unlinked to ${user.name}`)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to add a family')
    }
}

module.exports = {
    getAllReminder,
    getOneReminder,
    createReminder,
    removeReminder,
    updateReminder,
    addUserReminder,
    removeUserReminder
}