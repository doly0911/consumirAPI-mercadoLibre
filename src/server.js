const express = require('express');
const path = require('path');

const app = express();

//archivos estaticos del directorio dist
app.use(express.static(__dirname+'/dist/mercado-libre-angular'));

//Enviar los requests al index.html
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/mercado-libre-angular/index.html'));
});

//Puerto para Heroku
app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`);
