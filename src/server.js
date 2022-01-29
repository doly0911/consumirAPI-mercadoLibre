const express = require('express');
const path = require('path');

const app = express();

//archivos estaticos del directorio dist
var dirPath =  './dist/mercado-libre-angular';
app.use(express.static(dirPath));
//Enviar los requests al index.html
app.get('/*',function(req,res){
  res.sendFile('index.html',{root:'dist/mercado-libre-angular/'});
});

//Puerto para Heroku
app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`);
