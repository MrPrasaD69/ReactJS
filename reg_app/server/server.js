const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
app.use(cors());
app.use(bodyParser.json());

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'prasaddb'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysqli Connected...');
});

app.get('/', (req, res) => {
    res.send('Welcome to my server');
});

app.post('/store-data',(req,res)=>{
    let data = {name:req.body.first_name};
    let sql = "INSERT INTO users SET ?";
    let query = conn.query(sql, data, (err, results)=>{
        if(err) throw err;
        res.send(JSON.stringify({"status":200, "error":null}))
    });
});
app.listen(4000, ()=>{
    console.log("Server Running on 4000");
});