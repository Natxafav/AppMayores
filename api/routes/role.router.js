const router = require('express').Router()
const {createRole, updateRole, removeRole, getallRoles, getOneRole} = require('../controllers/role.controller')


router.get('/get', getallRoles)
router.get('/one/:id', getOneRole)
router.post('/create',createRole )
router.put('/mod/:id',updateRole)
router.delete('/rm/:id',removeRole)

module.exports = router