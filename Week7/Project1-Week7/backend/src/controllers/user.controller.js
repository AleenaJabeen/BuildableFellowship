const User=require('../models/user.model.js');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRE});
}
const register=async(req,res)=>{
    const {username,email,password}=req.body;

    if(!username || !email || !password){
        return res.status(400).json({message:"All fields are required"});
    }
    const existingUser=await User.findOne({email});
    if(existingUser){
        return res.status(400).json({message:"User already exists"});
    }
    const hashedPassword=await bcrypt.hash(password,10);
    const user=await User.create({
           username,
           email,
           password:hashedPassword,
       });
   if(user){
        res.status(201).json({
            _id:user.id,
            username:user.username,
            email:user.email,
            token:generateToken(user._id)
        });
    }else{
        res.status(400);
        throw new Error("Invalid user data");
    }   
}

const login=async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(400).json({message:"All fields are required"});
    }
    const user=await User.findOne({email});
    if(!user){
        return res.status(400).json({message:"Invalid credentials"});
    }
    if(user && (await bcrypt.compare(password,user.password))){
        res.status(200).json({message:"Login successful",
             _id:user.id,    
            username:user.username,
            email:user.email,
            token:generateToken(user._id)});
    }else{
        res.status(400).json({message:"Invalid credentials"});
    }
}

const getProfile=async(req,res)=>{
   const {_id,username,email}=await User.findById(req.user.id);
      res.status(200).json({
          id:_id, 
          username,
          email
      });
      //
      res.status(200).json({message:"User data"});
}
module.exports={
    register,
    login,
    getProfile
}