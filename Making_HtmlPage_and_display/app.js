const express = require('express')
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

console.log(__dirname );

app.use(express.static(publicPath));

app.listen(6000)

// path module help us to acces the filder 
// static method is used to LODE static modules 
