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
    const appointments = await AppointmentModel.findAll({
      where: {
        userId: res.locals.user.id,
      },
    });

    for (const appointment of appointments) {
      const fullDate = appointment.datetime;
      const onlyDate = `${fullDate.getDate()}-${fullDate.getMonth()}-${fullDate.getFullYear()} a las ${fullDate.getHours()} y ${fullDate.getMinutes()}`;
      const message = `Cita medica en ${appointment.locate} el dia ${onlyDate} con el ${appointment.specialist} . La descripcion del evento incluye ${appointment.description}`;
      say.speak(message)
      await delay(10000);
    }
    const medications = await MedicationModel.findAll({
      where: {
        userId: res.locals.user.id,
      },
    });
    for (const medication of medications) {
        const fullDate = medication.datetime;
        const onlyDate = `${fullDate.getDate()}-${fullDate.getMonth()}-${fullDate.getFullYear()} a las ${fullDate.getHours()} y ${fullDate.getMinutes()}`;
        const message = `Tienes que tomarte ${medication.name} el dia ${onlyDate}. La descripcion del evento incluye ${medication.description}`;
        say.speak(message)
        await delay(10000);
      }
      const reminders = await ReminderModel.findAll({
        where: {
          userId: res.locals.user.id,
        },
      });
  
      for (const reminder of reminders) {
        const fullDate = reminder.Date;
        const onlyDate = `${fullDate.getDate()}-${fullDate.getMonth()}-${fullDate.getFullYear()} a las ${fullDate.getHours()} y ${fullDate.getMinutes()}`;
        const message = `Recordatorio ${reminder.name} el dia ${onlyDate} . La descripcion del evento incluye ${reminder.description}`;
        say.speak(message)
        await delay(10000);
      }

    res.status(200).json({ appointments, medications, reminders });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getAllRecordsForToday;
