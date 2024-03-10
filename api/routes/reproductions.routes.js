const router = require('express').Router()

const getAllRecordsForToday = require('../controllers/reproductions.controller')

router.get('/repr', getAllRecordsForToday)


module.exports = router