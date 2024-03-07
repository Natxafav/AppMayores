const router = require('express').Router()

const { 
    createMedication,
    updateMedication,
    deleteMedication,
    addUserMedication,
removeUserMedication,
getAllMedicationsAdmin,
getAllMedicationsUser,
getOneMedicationUser,
getOneMedicationAdmin} = require('../controllers/medication.controller')
const { checkTotal, checkMedium, checkRestricted, checkAdmin } = require('../middlewares/auth')

router.get('/get',checkTotal ,getAllMedicationsUser)
router.get('/admget',checkAdmin,getAllMedicationsAdmin)
router.get('/one/:id',checkTotal ,getOneMedicationUser)
router.get('/admone/:id',checkAdmin, getOneMedicationAdmin)
router.post('/create',checkRestricted ,createMedication)
router.put('/mod/:id',checkMedium ,updateMedication)
router.delete('/rm/:id',checkRestricted ,deleteMedication)
router.post('/:id/:mid', checkRestricted,addUserMedication)
router.delete('/rmm/:id/:mid', checkRestricted,removeUserMedication)

module.exports = router