const router = require('express').Router()

const getAllRecordsForToday = require('../controllers/reproductions.controller')

router.get('/play', getAllRecordsForToday)


module.exports = router