// program to print Hello World using express 

// first we need to impert express 

const express  =  require('express'); // so heere express is a function which is written inside require
// whenever i call the function using any variable thn 
// we are able to access all the properties of the method 


// so here we will create a variable and call the express varible or we can say function 


const app  = express(); // here function is calling and
// now we can access all the properties of the express using the app variable




// so our task is to create our own server (small server)

// TO create a server we need to use some 
// http methods 
//      1) get
    //  2) post
    //  3) Put 
    //  4) delete




// i want to create a route :::: go and see handwritten notes 

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
})


// middleware 

// so here we will create a middleware function 
function loginMiddleware(req, res , next){
   console.log(" I am login middleware");
   next();
}




