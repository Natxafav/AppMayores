const router = require('express').Router()
const {createRole, updateRole, removeRole, getallRoles, getOneRole, addUserRole,removeUserRole} = require('../controllers/role.controller')
const { checkAdmin } = require('../middlewares/auth')

router.get("/get", getallRoles);
router.get("/one/:id", getOneRole);
router.post("/create", createRole);
router.put("/mod/:id", updateRole);
router.delete("/rm/:id", removeRole);
router.post("/:id/:roid", addUserRole);
router.delete("/rmro/:id/:roid/", removeUserRole);

router.get('/admget',checkAdmin,getallRoles)
router.get('/admone/:id',checkAdmin, getOneRole)
router.post('/admcreate',createRole )
router.put('/admmod/:id',checkAdmin,updateRole)
router.delete('/admrm/:id',checkAdmin,removeRole)

module.exports = router
