const app  = require('express')



 const admin_rout = require('./Routes/admin');// here i am importing the admin routes here and 
// all the code which present inside admin rout 
// automatically will present here 

//----------------------
// again try to import the shops
const shopRout=require("./Routes/shop");


//app.use(bodyParser.urlencoded({ extended: true }))

// now admin_rout --> to use the admin routes we will one pre define method 
app.use(admin_rout)// so here admin_router is object 
app.use("/shops",shopRout);

app.use('/', (req,res,next)=>{
    res.send('')
})

app.listen(3000)








// here i am creating a variable name "router" and here express.Router(); is a mini express 

// const router  = express.Router();



// router.get('/add-product', (req, res , next)=>{
//     res.send(
//        '<form action ="/product" method="POST"><input>type= "text" name = "litle"><button type= "submit"></button></input> </form>'
//     )
    
// })
// router.post("/product" , (req, res, next)=>{
//     console.log(req.body);
//     res.redirect('/')
// })


// module.exports = router; 

// here i try to exports the router 