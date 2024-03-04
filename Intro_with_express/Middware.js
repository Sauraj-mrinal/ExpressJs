const express = require('express')

const app = express();

let name = "Mrinal"
let password  = 123456


app.get('/', (req, res) => {
    res.send("home page ")
})

app.use(loginMiddleware());

// we can create another route 

app.get('/name', (req,res) =>{

  res.send("my name is Mrinal Sauraj ");
})


app.get('/profilePage', (req,res) =>{

  res.send("this is profilePage " );
})

app.get('/feedBack', (req,res) =>{

  res.send("this is feedback page  ");
})


// to run this route we need a port ::
// :: what is route and what is port :: go to my handwritten notes 

port =8000;
app.listen(port , ()=>{
    console.log(" port is starting at 8000 :: Thank you :) ");
  if (name === 'Mrinal' && password === 123456){ // if they match then it will allow to next login

    next(); 
  }else{
    res.send(" password and name mismatch")
  }
 
})


// middleware 

// so here we will create a middleware function 
function loginMiddleware(req, res , next){
   console.log(" I am login middleware");
   next();
}




