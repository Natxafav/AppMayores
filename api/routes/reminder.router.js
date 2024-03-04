const router = require('express').Router()
const {checkAdmin, checkAuth} = require('../middlewares/auth')

const { getAllReminder, getOneReminder, createReminder, updateReminder, removeReminder } = require('../controllers/reminder.controller')

router.get('/get', getAllReminder)
router.get('/one/:id', getOneReminder)
router.post('/create',createReminder )
router.put('/mod/:id' ,updateReminder)
router.delete('/rm/:id', removeReminder)

module.exports = router

