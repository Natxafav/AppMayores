const { checkAuth, checkAdmin } = require('../middlewares/auth')

const router = require('express').Router()

router.use('/auth', require('../routes/auth.router'))
router.use('/meds', checkAuth, require('../routes/medication.router'))
router.use('/meet', checkAuth, require('../routes/appointment.router'))
router.use('/role', checkAuth, checkAdmin, require('../routes/role.router'))
router.use('/reminder', checkAuth, require('../routes/reminder.router'))
router.use('/user', checkAuth, require('../routes/users.router'))
router.use('/family', checkAuth, require('../routes/family.router'))
/* router.use('/admin', checkAuth,checkAdmin ,require('./admin.route')) */
/* router.use('/apt', require('../routes/appointment.router')) */

module.exports = router