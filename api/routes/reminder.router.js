const router = require("express").Router();
const { checkAdmin, checkAuth } = require("../middlewares/auth");

const {
  getAllReminder,
  getOneReminder,
  createReminder,
  updateReminder,
  removeReminder,
  addUserReminder,
  removeUserReminder,
} = require("../controllers/reminder.controller");

router.get("/get", getAllReminder);
router.get("/one/:id", getOneReminder);
router.post("/create", createReminder);
router.put("/mod/:id", updateReminder);
router.delete("/rm/:id", removeReminder);
router.post("/:id/:reid", addUserReminder);
router.delete("/rmre/:id/:reid", removeUserReminder);

module.exports = router;
