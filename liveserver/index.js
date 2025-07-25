// let http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// }).listen(8080);

const express=require('express')
const app=express()

app.get('/',(req,res)=>
{
    res.send("Shurbhi jha!");
});
app.listen(3000,()=>{
    console.log('server is running at 3000');
});