const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const port = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());

//MySQL connection setup
const pool = mysql.createPool({
    connectionLimit : 10,
    host :          'localhost',
    user :          'root',
    password :      'barsanjay_1',
    database :      'CRUD_APP'
})


//EndPoints
//All data from DB
app.get('/',(req,res) => {

    pool.getConnection((err,connection)=>{
        if(err) throw err
        console.log(`connected is ${connection.threadId}`);
        
        connection.query('SELECT * FROM crud;', (err, rows)=>{
            connection.release()

            if(!err){
                res.send(rows)
            }
            else{

                console.log(err)
            }
        })
    })

})

//Data by ID(Continue from here)

// Server setup
app.listen(port, ()=>{
    console.log("Server is RUNNING YOU BITCH");
})