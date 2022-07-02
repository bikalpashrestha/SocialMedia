const router = require('express').Router()
const commentCtrl = require('../controllers/commentCtrl')
const auth = require('../middleware/auth')

router.get('/comment', auth, commentCtrl.getComments)
router.post('/comment', auth, commentCtrl.createComment)

router.patch('/comment/:id', auth, commentCtrl.updateComment)



module.exports = router