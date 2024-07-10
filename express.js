const express=require('express')
const mysql=require('mysql2')
// const cors=require('cors')
const app=express()

// app.use(cors())
app.use(express.json())

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'aits'
})

db.connect(function(error){
    if(error){
        console.log("connection unsuccec");
        return;
    }
    else{
        console.log("connection success")
    }
})

app.get('/get-users',function(req,res){
    db.query('select * from employee',function(err,result){
        res.json(result)
    })
})
app.listen(8085)