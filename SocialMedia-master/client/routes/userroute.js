const router=require('express').Router()
const auth=require("../middleware/auth")
const userCtrl=require("../controllers/userCtrl")

router.get('/search',auth,userCtrl.searchUser)
router.get('/Search',auth,userCtrl.searchUser)

module.experts=router