const router = require('express').Router()

const {getAllMedications,
    getOneMedication,
    createMedication,
updateMedication,
deleteMedication} = require('../controllers/medication.controller')
                         
router.get('/get', getAllMedications)
router.get('/one/:id', getOneMedication)
router.post('/create', createMedication)
router.put('/mod/:id', updateMedication)
router.delete('/rm/:id', deleteMedication)

module.exports = router