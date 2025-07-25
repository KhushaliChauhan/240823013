// let http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// }).listen(8080);

const express=require('express')
const app=express()

app.get('/',(req,res)=>
{
    res.send("Hello World!!");
});
app.listen(80,()=>{
    console.log('server is running at ');
});