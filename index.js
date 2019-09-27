const express= require('express');
const app =express();
const mysql = require('mysql');
const connect =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'goos'
});
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1');
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
//  });
connect.connect();
app.get('/list',function(err,res){
    const sql='select * from uren';
    connect.query(sql,function(err,result){
        if(!err){
            res.json({
                status:200,
                data:result
           })
        }
    })
})
app.listen(3000)