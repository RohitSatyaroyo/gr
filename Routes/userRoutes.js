const express=require('express')
const userController=require('../Controller/UserController')
const router=express.Router()

router.get('/show',userController.getrec)
router.post('/reg',userController.registeruser)
router.post('/login',userController.authuser)
router.get('/getAllUser/:id',userController.getAllUser)
module.exports=router
