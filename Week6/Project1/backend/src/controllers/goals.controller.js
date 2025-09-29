const asyncHandler = require('express-async-handler');


const getGoals =asyncHandler(async (req, res) => {
 res.status(200).json( { status: true, message: "API is working" } );

});

const setGoals =asyncHandler(async (req, res) => {
    console.log(req.body);
    if(!req.body.text){
        res.status(400);
        throw new Error("Please add a text field");
    }else{
    res.status(200).json( { status: true, message: "Set goals" } );

    }

})

const updateGoals =asyncHandler(async (req, res) => {
 res.status(200).json( { status: true, message: "Update" } );

})

const deleteGoals =asyncHandler(async (req, res) => {
 res.status(200).json( { status: true, message: "Delete goals" } );

})
module.exports={ getGoals,setGoals,updateGoals,deleteGoals };