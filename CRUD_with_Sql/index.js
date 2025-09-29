const express=require("express");
const sequalize=require("sequelize");

const studentroute=require("/Routes/studentRoute");
const app=express();
const PORT=81;
app.use(express.json());

app.listen("/student",studentroute);

app.listen(PORT,()=>{
    console.log("Server is running:127.0.0.1:"+PORT);
});