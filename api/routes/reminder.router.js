const router = require('express').Router()
const {checkAdmin, checkAuth, checkTotal, checkMedium, checkRestricted} = require('../middlewares/auth')

const { getAllReminder, getOneReminder, createReminder, updateReminder, removeReminder } = require('../controllers/reminder.controller')

router.get('/get',checkTotal,getAllReminder)
router.get('/one/:id', checkTotal,getOneReminder)
router.post('/create',checkMedium,createReminder )
router.put('/mod/:id',checkMedium ,updateReminder)
router.delete('/rm/:id',checkRestricted, removeReminder)

module.exports = router

