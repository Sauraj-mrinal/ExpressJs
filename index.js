const express = require('express');
// to use express in our application we need to require the express module

const app = express();//it is a express method 

// to create a server we can use --> listen
// app.listen(port number -> 3000,// callback function);
// this callbsck function will take two arguments one for response and one for request

// app.listen(3000, function(req,res){
//    console.log('server is running ');
// })

// app.get(//location of the get request)--> it will take as a argunment.

app.get("/",function(req,res){//-> "/"-> it is a location of the get request
  res.send("welcom to new server");
}) ;


//to make aboutus page 
//-----------------------

// first we need a address so in my case my address is /about
app.get("/about",function(req,res){//-> "/about"-> it is a location of the get request
    res.send("hii my name is mrinal sauraj i am a betichod ");
  }) ;
// ----------------------------------
// again if you want to make a contack page then 
// first find address /contactUs

app.get("/contactUs",function(req,res){//-> "/about"-> it is a location of the get request
    res.send("name:-Mrinal ,  mob-:7546533564 ");
  }) ;


app.listen(5000, function(req,res){
    console.log('server is running at port number 3000 ');
 });
 




















