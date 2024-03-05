const router = require('express').Router()


const {getAllUsers,
getOneUser,
updateUser,
deleteUser,
addUserFamily,
removeUserFamily} = require('../controllers/user.controller')

router.get('/get', getAllUsers)
router.get('/one/:id', getOneUser)
router.put('/mod/:id', updateUser)
router.delete('/rm/:id', deleteUser)
router.post('/:id/:fmid', addUserFamily)
router.delete('/rmf/:id/:fmid/', removeUserFamily)

module.exports = router