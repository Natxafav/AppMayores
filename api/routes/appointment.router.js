const router = require('express').Router()

const {getAllAppointments,
    getOneAppointment, 
    createAppointment, 
    updateAppointment, 
    deleteAppointment,
    addUserAppointment,
    removeUserAppointment}= require('../controllers/appointment.controller')

router.get('/get', getAllAppointments)
router.get('/one/:id', getOneAppointment)
router.post('/create', createAppointment)
router.put('/mod/:id', updateAppointment)
router.delete('/rm/:id', deleteAppointment)
router.post('/:id/:aid', addUserAppointment)
router.delete('/arm/:id/:aid', removeUserAppointment)

module.exports = router