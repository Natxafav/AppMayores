const router = require('express').Router()

const { getAllMedications,
    getOneMedication,
    createMedication,
    updateMedication,
    deleteMedication,
    addUserMedication,
removeUserMedication} = require('../controllers/medication.controller')
const { checkTotal, checkMedium, checkRestricted } = require('../middlewares/auth')

router.get('/get',checkTotal ,getAllMedications)
//
router.get('/one/:id',checkTotal ,getOneMedication)
//
router.post('/create',checkMedium ,createMedication)
router.put('/mod/:id',checkMedium ,updateMedication)
router.delete('/rm/:id',checkRestricted ,deleteMedication)
router.post('/:id/:mid', checkRestricted,addUserMedication)
router.delete('/rmm/:id/:mid', checkRestricted,removeUserMedication)

module.exports = router