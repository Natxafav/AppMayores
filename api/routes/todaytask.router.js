const router = require('express').Router();
const getAllTodayTask = require('../controllers/todaytask.controller');
const { checkTotal } = require('../middlewares/auth');




router.get('/today',checkTotal,getAllTodayTask)

module.exports = router;