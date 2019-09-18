const express=require('express');
const app=express();
const path=require('path');

console.log(path.join(__dirname+'/public'));

app.use('/',express.static(path.join(__dirname+'/public')));
//Body Parsers
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//Require will automatically find index file in api folder
app.use('/api',require('./routes/api').route);

app.listen(1738,()=>console.log("Server started at http://localhost:1738 "));