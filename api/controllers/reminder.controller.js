const ReminderModel = require('../models/reminder.model')

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

module.exports = {
    getAllReminder,
    getOneReminder,
    createReminder,
    removeReminder,
    updateReminder
}