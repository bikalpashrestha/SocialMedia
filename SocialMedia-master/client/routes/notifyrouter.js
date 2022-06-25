const router=require("express").Router()
const auth=require('../middleware/auth')
const notifyCtrl=require('../controllers/notifyCtrl')
router.post('notify',auth,notifyCtrl.createNotify)


module.exports=router