const router = require('express').Router()

router.use('/auth', require('../routes/auth.router'))

module.exports = router