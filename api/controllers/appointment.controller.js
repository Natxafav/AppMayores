const AppointmentModel = require('../models/appointment.model')
const UserModel = require('../models/user.model')


const getAllAppointments = async (req, res) => {
    try {
        
        const appointment = await AppointmentModel.findAll({
            where: req.query
            })
        if(appointment){
            return res.status(200).json(appointment)
        }else{
            res.status(404).send('No appointments found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }    
}

const getOneAppointment = async (req, res) =>{
    try {
        const appointment= await AppointmentModel.findByPk(req.params.id)
        if(appointment){
            return res.status(200).json(appointment)
        }else{
            return res.status(404).send('Appointment not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const createAppointment = async (req, res) => {
    try {
        const appointment = await AppointmentModel.create(req.body)
        return res.status(200).json({message: 'Appointment created',appointment: appointment})
    } catch (error) {
        res.status(500).send('Error creating a new appointment')
    }
}

const updateAppointment = async (req, res) =>{
    try { 
        const [appointmentExist, appointment] = await AppointmentModel.update(req.body,
            {
                returning: true,
                where:{
                    id: req.params.id
                }
            })
            if(appointmentExist !==0){
                return res.status(200).json({
                    message: 'Appointment updated',
                    appointment:appointment
                })
            } else{
                return res.status(404).send('Appointment not found')
            }           
    } catch (error) {
        return res.status(500).send('Error retrieving data')        
    }
}

const deleteAppointment = async (req, res) =>{
    try {
        const appointment = await AppointmentModel.destroy({
            where: {
                id:req.params.id
            }
        })
        if(appointment){
            return res.status(200).send('Appointment deleted')
        }else{
            return res.status(404).send('Appointment not found')
        }
    } catch (error) {
        return res.status(500).send('Error ', error.message)
    }
}

const addUserAppointment = async(req,res) => {
    try {
        const user =await UserModel.findByPk(req.params.id)
        const appointment =await AppointmentModel.findByPk(req.params.aid)
        const newappointment = await user.addAppointment(appointment)
        res.status(200).send(`appointment linked to ${user.name}`)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to sync medication to user')
    }
}

const removeUserAppointment = async (req,res) => {
    try {
        const user =await UserModel.findByPk(req.params.id)
        const appointment =await AppointmentModel.findByPk(req.params.aid)
        const newappointment = await user.removeAppointment(appointment)
        res.status(200).send(`appointment unlinked to ${user.name}`)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to add a family')
    }
}


module.exports = {
    getAllAppointments,
    getOneAppointment,
    createAppointment,
    updateAppointment,
    deleteAppointment,
    addUserAppointment,
    removeUserAppointment
}
