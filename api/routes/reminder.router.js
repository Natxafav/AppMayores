const router = require('express').Router()
const {checkAdmin, checkAuth, checkTotal, checkMedium, checkRestricted} = require('../middlewares/auth')

const { createReminder, updateReminder, removeReminder, getOneReminderAdmin, getAllReminderUser, getOneReminderUser, getAllReminderAdmin } = require('../controllers/reminder.controller')

router.get('/get',checkTotal,getAllReminderUser)
router.get('/admget', checkAdmin, getAllReminderAdmin)
router.get('/one/:id', checkTotal,getOneReminderUser)
router.get('/admone/:id', checkAdmin, getOneReminderAdmin)
router.post('/create',checkTotal,createReminder )
router.put('/mod/:id',checkMedium ,updateReminder)
router.delete('/rm/:id',checkRestricted, removeReminder)

module.exports = router

