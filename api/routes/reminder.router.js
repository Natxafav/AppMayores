const router = require('express').Router()
const {checkAdmin, checkAuth, checkTotal, checkMedium, checkRestricted} = require('../middlewares/auth')

const { createReminderUser, updateReminder, removeReminder, getOneReminderAdmin, getAllReminderUser, getOneReminderUser, getAllReminderAdmin, createReminderAdmin, getReminderToday } = require('../controllers/reminder.controller')

router.get('/get',checkTotal,getAllReminderUser)
router.get('/admget', checkAdmin, getAllReminderAdmin)
router.get('/today', checkTotal, getReminderToday)
router.get('/one/:id', checkTotal,getOneReminderUser)
router.get('/admone/:id', checkAdmin, getOneReminderAdmin)
router.post('/create',checkTotal,createReminderUser )
router.post('/admcreate', checkAdmin, createReminderAdmin)
router.put('/mod/:id',checkMedium ,updateReminder)
router.delete('/rm/:id',checkRestricted, removeReminder)

module.exports = router

module.exports = router;
