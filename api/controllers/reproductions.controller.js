
const sequelize = require('sequelize')
const {Op}  = require('sequelize')
const FamilyModel = require('../models/family.model')
const UserModel = require('../models/user.model')
const AppointmentModel = require('../models/appointment.model')
const MedicationModel = require('../models/medication.model')

const say = require('say');


const getAllRecordsForToday = async (req, res) => {
    try {
        // Obtenemos la fecha actual y establecemos el rango para el día actual
        const currentDate = new Date();
        const startOfDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0);
        const endOfDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 23, 59, 59);

     
       const appointments = await AppointmentModel.findAll({
            where: {
               //userId: res.locals.user.id
            }
        });


        const medications = await MedicationModel.findAll({
            where: {
                /*datetime: {
                    [Op.between]: [startOfDay, endOfDay] 
                }*/
               // userId: res.locals.user.id
           }
        });

        appointments.forEach( (appointment) => {           
       
           const message =  `Cita médica  
            a las ${appointment.datetime} en ${appointment.locate}.`;
            say.speak(message);
        });

        medications.forEach( (medication) => {
           
            const message = `Medicamento ${medication.name}`;
             say.speak(message);
        });

        res.status(200).json({ appointments, medications });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports =  getAllRecordsForToday
