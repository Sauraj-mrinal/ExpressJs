// in case of java we use -> include keyword 
// but here we just use require keyword 



const express = require('express');
// to use express in our application we need to require the express module
const bodyParser = require('body-parser');
// to

const app = express();//it is a express method 

app.use(bodyParser.urlencoded({ extended: false }))// to use it we have to write like 

// to create a server we can use --> listen
// app.listen(port number -> 3000,// callback function);
// this callbsck function will take two arguments one for response and one for request

// app.listen(3000, function(req,res){
//    console.log('server is running ');
// })

// app.get(//location of the get request)--> it will take as a argunment. and also take a callback function 


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

// to create a new server we need 

// in above case we are just sending the response now we will send a file 
app.get("/calculator", function(req,res){
  console.log(__dirname);
   //res.sendFile("./index.html");// relative file path
   //it is not correct way to do 

   // so what we do here 
   // we can do like 
   res.sendFile(__dirname+"/index.html");
})

app.post("/calculator", function(req,res){
 //  res.send("thank you for your love")
   let n1 = Number(req.body.v1);
   let n2 = Number(req.body.v2);
  let sum = n1+n2;
  res.send(" the sum is "+sum)
});
 let v = 6000;
app.listen(v, function(req,res){
    console.log('server is running at port number '+v);
 });
 

//  To handle HTTP POST request in Express js version 4 and above , we need to install middleware
// module called bkody-parser

// body - parser extract the entire body portion of an incoming request steam and exposes it on req body.
// The middleware was a part of Express.js earlier but now you have to install it separately


// the body - parser module parse the JSON , buffer string and URL encoded data submitted using HTTP post request


// install body-parser using NPM 




















