// routing 
const express  = require('express');
// import express  from 'express'
const app = express()

const port  = process.env.PORT || '4000'


// Routes 
app.get ('/', (req, res)=>{
    res.send('Get method ')
})

app.listen(port, ()=>{
    console.log(`server listening at http://localhost:${port}`);
})

