require('dotenv').config(); // this will load the env file and make it available in process.env
// import express from "express";  //this is another way to use express as common js or module js
const  express = require('express');
// this app has many powers we can use to make backend 
const app=express();
const githubData={
  "message": "Not Found",
  "documentation_url": "https://docs.github.com/rest",
  "status": "404"
};
// if we want to deploy this app then we dont know which port user has so we download dot env file and store the port in it we dont want to share the pot and databse passowrds
const port=3000;
app.get('/',(req,res)=>{
    res.send('Hello World!');
});

// whenever we change something in our server we have to restart the server as hot reloading will load all the file and process it then if we change it we nned to again process it thats why we use nodeman 
app.get('/twitter',(req,res)=>{
    res.send('Hello Twitter!');
});

app.get('/facebook',(req,res)=>{
    res.send('<h1>Hello Facebook!</h1>');
});

app.get('/github',(req,res)=>{
    res.json(githubData);
});
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})

