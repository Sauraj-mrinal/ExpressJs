// so what is use of nodemon?
// so if i change anything in my code and i want to see on it through website by typing localhost
// then first we need to terminate my first terminal and again run the code in turminal and then we have to refrash the
// web browser

// it is too much boring work 

// to solve this kind of problem we use nodemon

const express = require('express');
const app = express();//it is a express method 

app.get("/",function(req,res){//-> "/"-> it is a location of the get request
  res.send("welcom to new server 6000");
}) ;

app.get("/about",function(req,res){//-> "/"-> it is a location of the get request
    res.send("hii my name is mrinal sauraj i am a betichod ");
  }) ;


app.listen(6000, function(req,res){
    console.log('server is running at port number 6000 ');
 });
 