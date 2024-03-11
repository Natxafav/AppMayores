const router = require('express').Router()

const {getAllFamiliesUser,
getAllFamiliesAdmin,
createFamily,
updateFamily,
deleteFamilyUser,
deleteFamilyAdmin} = require('../controllers/family.controller')
const { checkAdmin, checkMedium, checkTotal, checkRestricted } = require('../middlewares/auth')


router.get('/get', checkTotal,getAllFamiliesUser)
router.get('/admget',checkAdmin, getAllFamiliesAdmin)
router.post('/create', createFamily)
router.put('/mod/:id',checkRestricted ,updateFamily)
router.delete('/rm',checkRestricted ,deleteFamilyUser)
router.delete('/admrm/:id', checkAdmin, deleteFamilyAdmin)

module.exports = router