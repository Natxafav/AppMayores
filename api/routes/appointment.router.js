const router = require('express').Router()

const {
    createAppointment, 
    updateAppointment, 
    deleteAppointment,
    addUserAppointment,
    removeUserAppointment,
    getAllAppointmentsUser,
    getAllAppointmentsAdmin,
    getOneAppointmentUser,
    }= require('../controllers/appointment.controller')
const { checkTotal, checkMedium, checkRestricted, checkAdmin } = require('../middlewares/auth')

router.get('/get' ,checkTotal, getAllAppointmentsUser)
router.get('/admget' ,checkAdmin, getAllAppointmentsAdmin)
router.get('/one/:id',checkTotal, getOneAppointmentUser)
router.post('/create',checkMedium, createAppointment)
router.put('/mod/:id',checkMedium, updateAppointment)
router.delete('/rm/:id',checkRestricted, deleteAppointment)
router.post('/:id/:aid',checkRestricted, addUserAppointment)
router.delete('/arm/:id/:aid',checkRestricted, removeUserAppointment)

module.exports = router