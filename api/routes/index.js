const router = require('express').Router()

router.use('/user', require('../models/user.model.js'))

module.exports = router