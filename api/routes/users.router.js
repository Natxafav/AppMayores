const router = require('express').Router()


const {getAllUsers,
getOneUser,
updateUser,
deleteUser,
addUserFamily,
removeUserFamily,
} = require('../controllers/user.controller')
const { checkTotal, checkMedium, checkRestricted } = require('../middlewares/auth')

router.get('/get',checkTotal,getAllUsers)
//
router.get('/one/:id',checkTotal, getOneUser)
//
router.put('/mod/:id',checkMedium, updateUser)
router.delete('/rm/:id',checkRestricted, deleteUser)
router.put('/fm/:id/:fmid',checkRestricted, addUserFamily)
router.put('/rfm/:id/:fmid',checkRestricted,removeUserFamily)

module.exports = router