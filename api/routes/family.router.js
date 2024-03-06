const router = require('express').Router()

const {getAllFamiliesUser,
getAllFamiliesAdmin,
getOneFamilyUser,
getOneFamilyAdmin,
createFamily,
updateFamily,
deleteFamily} = require('../controllers/family.controller')
const { checkAdmin, checkMedium, checkTotal, checkRestricted } = require('../middlewares/auth')


router.get('/get', checkTotal,getAllFamiliesUser)
router.get('/admget',checkAdmin, getAllFamiliesAdmin)
//router.get('/one',checkTotal,getOneFamilyUser)
router.get('/admone/:id',checkAdmin,getOneFamilyAdmin)
router.post('/create', checkMedium, createFamily)
router.put('/mod/:id',checkMedium ,updateFamily)
router.delete('/rm/:id',checkRestricted ,deleteFamily)

module.exports = router