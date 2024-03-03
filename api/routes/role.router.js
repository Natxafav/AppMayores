const router = require('express').Router()
const {checkAdmin, checkAuth} = require('../middlewares/auth')
const {createRole, updateRole, removeRole} = require('../controllers/role.controller')

router.post('/add/:idRole',checkAdmin,createRole )
router.put('/update/:idRole',checkAdmin ,updateRole)
router.delete('/remove/:idRole',checkAdmin, removeRole)

module.exports = router