const express=require('express');
const router=express.Router();
const {registerUser, loginUser,getMe}=require('../controllers/user.controller.js');
const {protect}=require('../middlewares/auth.middleware.js');

router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.route("/me").get(protect,getMe);

module.exports=router;