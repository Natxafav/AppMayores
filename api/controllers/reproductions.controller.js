const sequelize = require("sequelize");
const { Op } = require("sequelize");
const FamilyModel = require("../models/family.model");
const UserModel = require("../models/user.model");
const AppointmentModel = require("../models/appointment.model");
const MedicationModel = require("../models/medication.model");
const ReminderModel = require("../models/reminder.model")

const say = require("say");
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const getAllRecordsForToday = async (req, res) => {
  try {
  
    const currentDate = new Date();
    const startOfDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0);
    const endOfDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 23, 59, 59);

    const appointments = await AppointmentModel.findAll({
      where: {
        FamilyGroupId: res.locals.user.FamilyGroupId,
        datetime: { [Op.between]: [startOfDay, endOfDay] }
      },
    });

    for (const appointment of appointments) {
      const fullDate = appointment.datetime;
      
      const onlyDate = `at ${fullDate.getHours()} hours and  ${fullDate.getMinutes()}  minutes`;
      
      const message = `Medical appointment at ${appointment.locate} on ${onlyDate} with ${appointment.specialist}. The description includes ${appointment.description}`;
      

      say.speak(message)
      await delay(10000);
    }
    
    const medications = await MedicationModel.findAll({
      where: {
        FamilyGroupId: res.locals.user.FamilyGroupId,

        datetime: { [Op.between]: [startOfDay, endOfDay] }
      },
    });
    for (const medication of medications) {
      const fullDate = medication.datetime;
      const onlyDate = `${fullDate.getDate()}-${fullDate.getMonth() + 1}-${fullDate.getFullYear()} a las ${fullDate.getHours()} y ${fullDate.getMinutes()}`;
      const message = `you should take the ${medication.name} ${onlyDate}. The description includes ${medication.description}`;
      say.speak(message)
      await delay(10000);
    }
    const reminders = await ReminderModel.findAll({
      where: {
        FamilyGroupId: res.locals.user.FamilyGroupId,

        datetime: { [Op.between]: [startOfDay, endOfDay] }
      },
    });

    for (const reminder of reminders) {
      const fullDate = reminder.datetime;
      const onlyDate = `${fullDate.getDate()}-${fullDate.getMonth() + 1}-${fullDate.getFullYear()} a las ${fullDate.getHours()} y ${fullDate.getMinutes()}`;
      const message = `Reminder: ${reminder.name}  ${onlyDate} . The description includes ${reminder.description}`;
      say.speak(message)
      await delay(10000);
    }

    res.status(200).json({ appointments, medications, reminders });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getAllRecordsForToday;
