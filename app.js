// const express = require('express')
// const app = express()// to make it executable 


// app.get(' ', function(req, res) {
//     console.log("data sent by browser ",req.query.name);
//     res.send(" hello this is home page!")
// });

// app.get('/about', function(req, res) {
//     res.send(" hii this is about us page!")
// });


// app.listen(3000)




//render html code 

const express = require('express')
const app = express()// to make it executable 


app.get('', function(req, res) {
    
    res.send(" <h1>hello this is home page!</h1>")
});

app.get('/input', function(req, res) {
    
    res.send(`
      <input type ="text" placeholder "User name" value="${req.query.name}" />
      <button >submit </ button>
    `)
});

app.get('/help', function(req, res) {
    res.send(`
       <input type="text" palceholde = "useName" />
       <button >submit </ button>

    `)
})


    app.get('/name', function(req, res) {
        res.send([
            {
                name: 'Mj',
                age: 34,
                sex : 'Female'
            },
            {
                name: 'parteek',
                age: 16,
                sex: 'gay'
            }
        ])
    

        });

app.listen(4000);


// How to make a html page and display it usng node js 

//----------------------------------------------------------------






