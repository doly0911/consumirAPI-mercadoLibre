const express = require('express');
const path = require('path');

const app = express();

//archivos estaticos del directorio dist
var dirPath = __dirname +'/dist/mercado-libre-angular';
app.use(express.static(__dirname+'/dist/mercado-libre-angular'));
console.error("Directorio:" +__dirname);
console.error("Directorio mecado libre:" +dirPath);

var dirPath = __dirname +'/dist/mercado-libre-angular';

//Enviar los requests al index.html
app.get('/',function(req,res){
  var indexPath = path.join(__dirname+'/dist/mercado-libre-angular/index.html');
  console.error("Index path:" + indexPath)
  res.sendFile(indexPath);
});

//Puerto para Heroku
app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`);
