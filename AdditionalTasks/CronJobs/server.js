const express=require("express");
const dotenv=require("dotenv");
// require('./schedular1.js')
// require('./schedular2.js')
// require('./schedular3.js')
const port=process.env.PORT ||   3000;
const app=express();
app.use(express.json());



app.listen(port,()=>{
  console.log("Sever running at port",port);
})
