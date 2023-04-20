
//Import http 
//const http =require('http');
const express=require('express');
const app=express();
app.use((req,res,next)=>
{
console.log('In the middleware');
next();
});
app.use((req,res,next)=>
{
console.log('In another middleware');
res.send('<h1>Hello from express</h1>');
});


//const server1= http.createServer(app); 
//set the port the server to listen at
app.listen(2000);


