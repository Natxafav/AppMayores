<<<<<<< HEAD
const router = require("express").Router();
const { checkAdmin, checkAuth } = require("../middlewares/auth");

const {
  getAllReminder,
  getOneReminder,
  createReminder,
  updateReminder,
  removeReminder,
  addUserReminder,
  removeUserReminder,
} = require("../controllers/reminder.controller");

router.get("/get", getAllReminder);
router.get("/one/:id", getOneReminder);
router.post("/create", createReminder);
router.put("/mod/:id", updateReminder);
router.delete("/rm/:id", removeReminder);
router.post("/:id/:reid", addUserReminder);
router.delete("/rmre/:id/:reid", removeUserReminder);
=======
const router = require('express').Router()
const {checkAdmin, checkAuth, checkTotal, checkMedium, checkRestricted} = require('../middlewares/auth')

const { createReminderUser, updateReminder, removeReminder, getOneReminderAdmin, getAllReminderUser, getOneReminderUser, getAllReminderAdmin, createReminderAdmin } = require('../controllers/reminder.controller')

router.get('/get',checkTotal,getAllReminderUser)
router.get('/admget', checkAdmin, getAllReminderAdmin)
router.get('/one/:id', checkTotal,getOneReminderUser)
router.get('/admone/:id', checkAdmin, getOneReminderAdmin)
router.post('/create',checkTotal,createReminderUser )
router.post('/admcreate', checkAdmin, createReminderAdmin)
router.put('/mod/:id',checkMedium ,updateReminder)
router.delete('/rm/:id',checkRestricted, removeReminder)

module.exports = router
>>>>>>> Alberto

module.exports = router;
