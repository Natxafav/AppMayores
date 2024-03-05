const router = require("express").Router();

const {
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

router.get("/get", getAllUsers);
router.get("/one/:id", getOneUser);
router.put("/mod/:id", updateUser);
router.delete("/rm/:id", deleteUser);

module.exports = router;
