const router = require('express').Router()


const {getAllUsers,
getOneUser,
updateUser,
deleteUser,
addUserFamily,
removeUserFamily,
} = require('../controllers/user.controller')

router.get('/get', getAllUsers)
router.get('/one/:id', getOneUser)
router.put('/mod/:id', updateUser)
router.delete('/rm/:id', deleteUser)
router.put('/fm/:id/:fmid', addUserFamily)
router.put('/rfm/:id/:fmid', removeUserFamily)

module.exports = router