const router = require('express').Router()
const {createRole, updateRole, removeRole, getallRoles, getOneRole} = require('../controllers/role.controller')
const { checkAdmin } = require('../middlewares/auth')


router.get('/amdget',checkAdmin,getallRoles)
router.get('/admone/:id',checkAdmin, getOneRole)
router.post('/amdcreate',checkAdmin,createRole )
router.put('/mod/:id',checkAdmin,updateRole)
router.delete('/admrm/:id',checkAdmin,removeRole)

module.exports = router