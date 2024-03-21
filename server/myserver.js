var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const details=require('./userData')
const url=require('url')
const cors=require('cors')
app.use(cors())


app.get('/', function(req, res){
   console.log(url.parse(req.url))
   // res.send("Hello world!");
   // console.log(req.body)
   // if(req.body.aname==details[0].aname){
   //    if(req.body.password===details[0].password){
   //       res.send(req.body)
   //    }
   // }
});

app.listen(4500,()=>console.log('server running at 4500'));