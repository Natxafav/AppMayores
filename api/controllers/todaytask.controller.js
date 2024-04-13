const UserModel = require('../models/user.model');
const ReminderModel = require('../models/reminder.model');
const MedicationModel = require('../models/medication.model');
const AppointmentModel = require('../models/appointment.model');
const { Op } = require("sequelize");
const { isSameDay } = require('date-fns');

const getAllTodayTask = async (req, res) => {
    const currentDate = new Date();
    const actualDay= `${currentDate.getFullYear()}-${(currentDate.getMonth()+1).toLocaleString().padStart(2, "0")}-${currentDate.getDate().toLocaleString().padStart(2, "0")}`
   
    try {
        const users = await UserModel.findAll({
            where: { FamilyGroupId: res.locals.user.FamilyGroupId },
            attributes: { exclude: ["password", "email", "createdAt", "updatedAt"] },
            include: [
                {
                    model: ReminderModel,                     
                },
                {
                    model: MedicationModel,                    
                },
                {
                    model: AppointmentModel,                     
                }
            ]
        });
        const usersWithTodayTasks = users.filter(user => {
            const tasksForToday = user.medications.concat(user.Reminders, user.appointments).filter(task => {
                return task.datetime && isSameDay(new Date(task.datetime), actualDay);
            });
            return tasksForToday.length > 0;
        });


        res.status(200).json(usersWithTodayTasks);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al obtener todas las tareas de hoy');
    }
}

module.exports = getAllTodayTask