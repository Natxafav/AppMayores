const router = require("express").Router();

const { 
    createMedicationUser,
    updateMedication,
    deleteMedication,
    addUserMedication,
removeUserMedication,
getAllMedicationsAdmin,
getAllMedicationsUser,
getOneMedicationUser,
getOneMedicationAdmin,
createMedicationAdmin} = require('../controllers/medication.controller')
const { checkTotal, checkMedium, checkRestricted, checkAdmin } = require('../middlewares/auth')

router.get('/get',checkTotal ,getAllMedicationsUser)
router.get('/admget',checkAdmin,getAllMedicationsAdmin)
router.get('/one/:id',checkTotal ,getOneMedicationUser)
router.get('/admone/:id',checkAdmin, getOneMedicationAdmin)
router.post('/create',checkRestricted ,createMedicationUser)
router.post('/admcreate', checkAdmin, createMedicationAdmin)
router.put('/mod/:id',checkMedium ,updateMedication)
router.delete('/rm/:id',checkRestricted ,deleteMedication)
router.post('/:id/:mid', checkRestricted,addUserMedication)
router.delete('/rmm/:id/:mid', checkRestricted,removeUserMedication)

module.exports = router;
