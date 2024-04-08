const router = require('express').Router()


const {
getOneUser,
updateUser,
deleteUser,
addUserFamily,
removeUserFamily,
getAllUsers,
getAllUsersAdmin,
getOneUserAdmin,
} = require('../controllers/user.controller')
const { checkTotal, checkMedium, checkRestricted, checkAdmin } = require('../middlewares/auth')
router.get('/get/byEmail, getUserByEmail')
router.get('/get',checkTotal,getAllUsers)
router.get('/admget',checkAdmin,getAllUsersAdmin)
router.get('/one/:id',checkTotal, getOneUser)
router.get('/admone/:id', checkAdmin, getOneUserAdmin)
router.put('/mod/:id',checkMedium, updateUser)
router.delete('/rm/:id',checkRestricted, deleteUser)
router.put('/fm/:id/:fmid',checkRestricted, addUserFamily)
router.put('/rfm/:id/:fmid',checkRestricted,removeUserFamily)

module.exports = router