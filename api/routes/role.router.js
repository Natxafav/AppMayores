const router = require("express").Router();
const {
  createRole,
  updateRole,
  removeRole,
  getallRoles,
  getOneRole,
  addUserRole,
  removeUserRole,
} = require("../controllers/role.controller");

router.get("/get", getallRoles);
router.get("/one/:id", getOneRole);
router.post("/create", createRole);
router.put("/mod/:id", updateRole);
router.delete("/rm/:id", removeRole);
router.post("/:id/:roid", addUserRole);
router.delete("/rmro/:id/:roid/", removeUserRole);

module.exports = router;
