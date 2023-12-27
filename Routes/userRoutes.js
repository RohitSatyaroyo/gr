const express=require('express')
const userController=require('../Controller/UserController')
const router=express.Router()

router.get('/show',userController.getrec)

module.exports=router
