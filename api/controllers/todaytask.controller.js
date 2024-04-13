import UserModel from "../models/user.model";
import ReminderModel from "../models/reminder.model";
import MedicationModel from "../models/medication.model";
import AppointmentModel from "../models/appointment.model";
import { Op } from "sequelize";

const getAllTodayTask = async (req, res) => {

    const currentDate = new Date();
    const startOfDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0);
    const endOfDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 23, 59, 59);

    try {

        const user = await UserModel.findAll({
            where: { FamilyGroupId: res.locals.user.FamilyGroupId },
            attributes: { exclude: ["password", "email", "createdAt", "updatedAt"] },
            include: [{
                model: ReminderModel,
                model: MedicationModel,
                model: AppointmentModel,
                where: { datetime: { [Op.between]: [startOfDay, endOfDay] } }
            }]
        })

        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to get all reminders')
    }
}

module.exports = {
    getAllTodayTask
  };