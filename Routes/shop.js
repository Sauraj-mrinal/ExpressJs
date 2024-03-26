// now same you have to import the admin here

// first step will be import the express 
const express = require('express')

// then create router object express.Router() - > as a function
const router = express.Router()

router.get('/', (req,res,next)=>{
    res.send('<h1>Hello from Express !</h1>');
})
module.exports= router;