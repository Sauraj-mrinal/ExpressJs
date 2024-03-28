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
app.all('*' , (req, res)=>{
  res.send('page not found !!!'   )
})



// how we can write diff diff path 
app.get('/about' , (req, res)=>{ //  This is string path
   res.send('About page'    )

});

app.get('/contact' , (req, res)=>{ //  This is string path 'string'
    res.send('contact page'    )
 
 });


 //----------------------------------------------------------------
 // string pattern making 

 app.get('/ab?cd' , (req, res)=>{
   res.send("this rout path will match for acd and abcd -> for both")
 });


 // regular Expression path 
 app.get('/a/' , (req, res)=>{ // it will find a into any word or latter or character of a is present then it will execute 
    res.send('there is a present  ')
    
    



    
 })
app.listen(port, ()=>{
    console.log(`server listening at http://localhost:${port}`);
})

