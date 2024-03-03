const router = require('express').Router()

router.use('/auth', require('../routes/auth.router'))
router.use('/meds', require('../routes/medication.router'))

module.exports = router