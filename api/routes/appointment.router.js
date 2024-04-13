const router = require('express').Router()

const {
    createAppointmentUser, 
    updateAppointment, 
    deleteAppointment,
    addUserAppointment,
    removeUserAppointment,
    getAllAppointmentsUser,
    getAllAppointmentsAdmin,
    getOneAppointmentUser,
    getOneAppointmentAdmin,
    createAppointmentAdmin,
    getAppointmentToday,
    }= require('../controllers/appointment.controller')
const { checkTotal, checkMedium, checkRestricted, checkAdmin } = require('../middlewares/auth')

router.get('/get' ,checkTotal, getAllAppointmentsUser)
router.get('/today', checkTotal, getAppointmentToday)
router.get('/admget' ,checkAdmin, getAllAppointmentsAdmin)
router.get('/one/:id',checkTotal, getOneAppointmentUser)
router.get('/admone/:id',checkAdmin, getOneAppointmentAdmin)
router.post('/create',checkMedium, createAppointmentUser)
router.post('/admcreate', checkAdmin, createAppointmentAdmin)
router.put('/mod/:id',checkMedium, updateAppointment)
router.delete('/rm/:id',checkRestricted, deleteAppointment)
router.post('/:id/:aid',checkRestricted, addUserAppointment)
router.delete('/arm/:id/:aid',checkRestricted, removeUserAppointment)

module.exports = router