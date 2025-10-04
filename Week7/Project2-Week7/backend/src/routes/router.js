const router = require('express').Router();
const { getGoals,setGoals,updateGoals,deleteGoals } = require('../controllers/goals.controller.js');
const { protect } = require('../middlewares/auth.middleware.js');


router.route("/").get(protect,getGoals).post(protect,setGoals);
router.route("/:id").put(protect,updateGoals).delete(protect,deleteGoals);

module.exports = router;