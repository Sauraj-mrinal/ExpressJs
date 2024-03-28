// routing 
const express  = require('express');
// import express  from 'express'
const app = express()

const port  = process.env.PORT || '4000'


// Routes 
app.get ('/', (req, res)=>{
    res.send('Get method ')
})

// 
// app.all('*' , (req, res)=>{
//   res.send('page not found !!!'   )
// })



// how we can write diff diff path 
app.get('/about', (req, res)=>{ //  This is string path
   res.send('About page'    )

});

app.get('/contact', (req, res)=>{ //  This is string path 'string'
    res.send('contact page'    )
 
 });


 //----------------------------------------------------------------
 // string pattern making 

 app.get('/ab?cd', (req, res)=>{
   res.send("this rout path will match for acd and abcd -> for both")
 });


 // regular Expression path 
 app.get('/a/' , (req, res)=>{ // it will find a into any word or latter or character of a is present then it will execute 
    res.send('there is a present  ')
    
    
// example based on callback 

app.get('cbexample1' , (req, res)=>{
   res.send('One callback ')

})


// if more than one callback 
app.get('cbexample2' , (req, res)=>{
    console.log("first callback");
    // to call next callback function
    next();
},(req,res)=> {

    console.log("this is second callback");
    res.send("more than one callback")
 
 })
 
 // Array of callback functions
const cb1 = (req,res)=>{
   console.log( "callback 1" );
   next();
}
const cb2 = (req,res) =>{
   console.log ("callback 2 ") ;
   next();
}
const cb3 = (req,res) =>{
   console.log ("callback 3 ");
   res.send("callback 3")
   res.send('an array of callback functions')
   next();
}

app.get('/cbexample3', [cb1,cb2,cb3])




 })
app.listen(port, ()=>{
    console.log(`server listening at http://localhost:${port}`);
})

