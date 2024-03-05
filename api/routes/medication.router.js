const router = require('express').Router()

const { getAllMedications,
    getOneMedication,
    createMedication,
    updateMedication,
    deleteMedication,
    addUserMedication,
removeUserMedication} = require('../controllers/medication.controller')

router.get('/get', getAllMedications)
router.get('/one/:id', getOneMedication)
router.post('/create', createMedication)
router.put('/mod/:id', updateMedication)
router.delete('/rm/:id', deleteMedication)
router.post('/:id/:mid', addUserMedication)
router.delete('/rmm/:id/:mid', removeUserMedication)

module.exports = router