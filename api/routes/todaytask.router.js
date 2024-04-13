const router = require('express').Router()
const { checkTotal } = require('../middlewares/auth')
const { getAllTodayTask } = require('../controllers/medication.controller')

router.get('today', checkTotal, getAllTodayTask)