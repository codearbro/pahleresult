const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'',
    database:'phleresult'
})

app.get('/users',(re,res)=>
{
    const sql = "SELECT * FROM posts";
    db.query(sql,(err,data)=>{
        if(err)
        return res.json(err);
        return res.json(data);
    })
})
app.get('/',(re,res) => {
return res.json("From backend site");
})
app.listen(8081,()=>{
    console.log("listening");
})
