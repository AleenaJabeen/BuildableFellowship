const router = require('express').Router();


// You can require and use your routes here ;)
router.route("/register").post();
router.route("/login").post();
router.route("/logout").post();
router.route("/profile").get();



module.exports = router;