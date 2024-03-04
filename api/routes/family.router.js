const router = require('express').Router()

const {getAllFamilies,
getOneFamily,
createFamily,
updateFamily,
deleteFamily} = require('../controllers/family.controller')


router.get('/get', getAllFamilies)
router.get('/one/:id',getOneFamily)
router.post('/create', createFamily)
router.put('/mod/:id', updateFamily)
router.delete('/rm/:id', deleteFamily)

module.exports = router