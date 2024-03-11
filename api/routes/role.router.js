const router = require('express').Router()
const {createRole, updateRole, removeRole, getallRoles, getOneRole} = require('../controllers/role.controller')
const { checkAdmin } = require('../middlewares/auth')


router.get('/admget',checkAdmin,getallRoles)
router.get('/admone/:id',checkAdmin, getOneRole)
router.post('/admcreate',createRole )
router.put('/admmod/:id',checkAdmin,updateRole)
router.delete('/admrm/:id',checkAdmin,removeRole)

module.exports = router