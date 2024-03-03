const router = require('express').Router()

router.use('/auth', require('../routes/auth.router'))
router.use('/role', require('../routes/role.router'))

module.exports = router