const http = require('http');
const express = require('express');
const app = express();

app.use(function(req, res, next){
     console.log("In the middleware");
     next(); // Allow the request to continue to the next middleware
});

app.use(function(req, res, next){
  console.log("In the middleware and it is second middleware"); 
  //to send the response we use send here 

  res.send('<h1> Hello from Express </h1>') // it is a utility function , it allows us to sen
  // here we are sending a html code 
  
})

const server = http.createServer(app);
server.listen(3000);
