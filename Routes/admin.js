const express  = require('express');
const { route } = require('../app2');

const router = express.Router()
// now we can use Router to do some worrkn


router.get('/add-product', (req,res,next)=>{
    req.send(
        '<form action="/product" method = "POST"><input type = "text" name="title"> <button type ="submit"</button></input></form> '
    );

})
router.post('/product', (req,res,next)=>{
   console.log(req.body);
   res.redirect('/')
})
module.exports