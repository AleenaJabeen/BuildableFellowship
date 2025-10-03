const router = require('express').Router();
const {register,login,getProfile} = require('../controllers/user.controller.js');
const {verifyToken} = require('../middlewares/auth.middleware.js');


// You can require and use your routes here ;)
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile").get(verifyToken,getProfile);



module.exports = router;