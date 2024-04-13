const AppointmentModel = require('../models/appointment.model')
const FamilyModel = require('../models/family.model')
const UserModel = require('../models/user.model')
const { Op } = require('sequelize')


const getAllAppointmentsUser = async (req, res) => {
    try {
        const appointment = await AppointmentModel.findAll()
        if (appointment) {
            return res.status(200).json(appointment)
        } else {
            res.status(404).send('No appointments found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getAllAppointmentsAdmin = async (req, res) => {
    try {
        const appointment = await AppointmentModel.findAll()
        if (appointment) {
            return res.status(200).json(appointment)
        } else {
            res.status(404).send('No appointments found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getOneAppointmentUser = async (req, res) => {
    try {
        //include 
        const user = await UserModel.findOne({
            where: {
                id: req.params.id
                , FamilyGroupId: res.locals.user.FamilyGroupId
            },
            attributes: { exclude: ["password", "email", "nss", "createdAt", "updatedAt"] },
            include: [{
                model: AppointmentModel,
            }]
        })

        if (user) {
            return res.status(200).json(user)
        } else {
            return res.status(404).send('Appointment not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getOneAppointmentAdmin = async (req, res) => {
    try {
        const appointment = await AppointmentModel.findByPk(req.params.id)
        if (appointment) {
            return res.status(200).json(appointment)
        } else {
            return res.status(404).send('Appointment not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}
const createAppointmentUser = async(req,res) => {
    try {
        if (!req.body.userId) {
           
            req.body.userId = res.locals.user.id;
        }
        const oldUser = await UserModel.findOne({ where: { id: req.body.userId } })
        
        if (res.locals.user.roleId !== 2 && res.locals.user.FamilyGroupId !== oldUser.dataValues.FamilyGroupId) return res.status(404).send('Unathorized')
        const appointment = await AppointmentModel.create(req.body)
        res.status(200).json(appointment)
    } catch (error) {
        res.status(500).send('Error to create a appointment. Try again later.')
    }
}

const createAppointmentAdmin = async (req, res) => {
    try {
        const appointment = await AppointmentModel.create(req.body)
        return res.status(200).json({ message: 'Appointment created', appointment: appointment })
    } catch (error) {
        res.status(500).send('Error creating a new appointment')
    }
}

const updateAppointment = async (req, res) => {
    try {
        const [appointmentExist, appointment] = await AppointmentModel.update(req.body,
            {
                returning: true,
                where: {
                    id: req.params.id
                }
            })
        if (appointmentExist !== 0) {
            return res.status(200).json({
                message: `Appointment updated by ${res.locals.user.name}`,

            })
        } else {
            return res.status(404).send('Appointment not found')
        }
    } catch (error) {
        return res.status(500).send('Error retrieving data')
    }
}

const deleteAppointment = async (req, res) => {
    try {
        const appointment = await AppointmentModel.destroy({
            where: {
                id: req.params.id
            }
        })
        if (appointment) {
            return res.status(200).send('Appointment deleted')
        } else {
            return res.status(404).send('Appointment not found')
        }
    } catch (error) {
        return res.status(500).send('Error ', error.message)
    }
}

const addUserAppointment = async (req, res) => {
    try {
        const user = await UserModel.findByPk(req.params.id)
        const appointment = await AppointmentModel.findByPk(req.params.aid)
        const newappointment = await user.addAppointment(appointment)
        res.status(200).send(`appointment linked to ${user.name}`)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to sync medication to user')
    }
}

const removeUserAppointment = async (req, res) => {
    try {
        const user = await UserModel.findByPk(req.params.id)
        const appointment = await AppointmentModel.findByPk(req.params.aid)
        const newappointment = await user.removeAppointment(appointment)
        res.status(200).send(`appointment unlinked to ${user.name}`)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to add a family')
    }
}

const getAppointmentToday = async (req, res) => {

    const currentDate = new Date();
    const startOfDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0);
    const endOfDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 23, 59, 59);
    
    try {
        const appointment = await AppointmentModel.findAll({
            where: {
                userId: res.locals.user.id,
                datetime: { [Op.between]: [startOfDay, endOfDay] }
            }
        })
        res.status(200).json(appointment)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to get appointment today')

    }
}

module.exports = {
    getAllAppointmentsUser,
    getAllAppointmentsAdmin,
    getOneAppointmentUser,
    createAppointmentUser,
    createAppointmentAdmin,
    updateAppointment,
    deleteAppointment,
    addUserAppointment,
    removeUserAppointment,
    getOneAppointmentAdmin,
    getAppointmentToday
}
