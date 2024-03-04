const router = require('express').Router()

router.use('/auth', require('../routes/auth.router'))
router.use('/role', require('../routes/role.router'))
router.use('/reminder', require('../routes/reminder.router'))

module.exports = router