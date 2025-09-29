const asyncHandler = require('express-async-handler');
const Goal = require('../models/goals.model.js');
const User = require('../models/user.model.js');


const getGoals =asyncHandler(async (req, res) => {
    const goals=await Goal.find({user:req.user.id});
 res.status(200).json(goals);

});

const setGoals =asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400);
        throw new Error("Please add a text field");
    }
    const goals=await Goal.create({ text:req.body.text,user:req.user.id });
    res.status(200).json( { status: true, message: "Set goals" ,goals} );

    

})

const updateGoals =asyncHandler(async (req, res) => {
    const goal=await Goal.findById(req.params.id);
    if(!goal){
        res.status(400);
        throw new Error("Goal not found");
    }
    const user=await User.findById(req.user.id);
    // Check for user
    if(!user){
        res.status(401);
        throw new Error("User not found");
    }
    // Make sure the logged in user matches the goal user
    if(goal.user.toString()!==user.id){
        res.status(401);
        throw new Error("User not authorized");
    }
    const updatedGoal=await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true,});
 res.status(200).json( { status: true, message: "Update",updatedGoal } );

})

const deleteGoals =asyncHandler(async (req, res) => {
     const goal=await Goal.findById(req.params.id);
    if(!goal){
        res.status(400);
        throw new Error("Goal not found");
    }
    const user=await User.findById(req.user.id);
    // Check for user
    if(!user){
        res.status(401);
        throw new Error("User not found");
    }
    if(goal.user.toString()!==user.id){
        res.status(401);
        throw new Error("User not authorized");
    }
    await goal.remove;
 res.status(200).json( { status: true, message: "Delete goals",id:req.params.id } );

})
module.exports={ getGoals,setGoals,updateGoals,deleteGoals };