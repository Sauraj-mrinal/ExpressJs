const express  = require('express')

// here i am creating a variable name "router" and here express.Router(); is a mini express 

const router  = express.Router();



router.get('/add-product', (req, res , next)=>{
    res.send(
       '<form action ="/product" method="POST"><input>type= "text" name = "litle"><button type= "submit"></button></input> </form>'
    )
    
})
router.post("/product" , (req, res, next)=>{
    console.log(req.body);
    res.redirect('/')
})


module.exports = router; 

// here i try to exports the router 