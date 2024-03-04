const router = require('express').Router()

const {getAllAppointments,
    getOneAppointment, 
    createAppointment, 
    updateAppointment, 
    deleteAppointment}= require('../controllers/appointment.controller')

router.get('/get', getAllAppointments)
router.get('/one/:id', getOneAppointment)
router.post('/create', createAppointment)
router.put('/mod/:id', updateAppointment)
router.delete('/rm/:id', deleteAppointment)

module.exports = router