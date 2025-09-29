const router = require('express').Router();
const { getGoals,setGoals,updateGoals,deleteGoals } = require('../controllers/goals.controller.js');


router.route("/").get(getGoals).post(setGoals);
router.route("/:id").put(updateGoals).delete(deleteGoals);

module.exports = router;