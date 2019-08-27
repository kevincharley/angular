var express = require('express');
var path = require('path');
var body = require('body-parser');
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(body.urlencoded({ extended: false }));
app.use(function (req, res, next) {   

  res.setHeader('Access-Control-Allow-Origin', '*');  

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');  

  res.setHeader('Access-Control-Allow-Credentials', true);

  next();

});
app.listen(8000,()=>{
    console.log("Listening");
  })
  app.get("/data",function(req,res){
res.send({msge:"data"})
  })

  






  