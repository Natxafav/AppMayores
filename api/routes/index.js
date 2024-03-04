const router = require('express').Router()

router.use('/auth', require('../routes/auth.router'))
router.use('/meds', require('../routes/medication.router'))
router.use('/meet', require('../routes/appointment.router'))
router.use('/role', require('../routes/role.router'))
router.use('/reminder', require('../routes/reminder.router'))
router.use('/user', require('../routes/users.router'))

module.exports = router