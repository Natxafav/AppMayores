const router = require('express').Router()

router.use('/auth', require('../routes/auth.router'))
router.use('/meds', require('../routes/medication.router'))
router.use('/meet', require('../routes/appointment.router'))

module.exports = router