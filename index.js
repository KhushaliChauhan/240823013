const express=require('express')
const app=express()

app.use(express.json());

app.get('/bca',(req,res)=>{
    res.send("hello,bca students!\n");
});
app.get('/show/:id', (req, res) => {
    res.send(`hello welcome! ${req.params.id}`);
});

app.get('/shore', (req, res) => {
    res.send(`hello welcome! ${req.params.name}${req.params.city}`);
});
app.listen(3000,()=>{
    console.log('server is running at 3000');
});