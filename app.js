
const express = require('express');
const app = express();

app.use(express.static('public'));

const path = require('path');

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'./views/home.html'));
});
app.get('/login.html', (req,res)=>{
    res.sendFile(path.join(__dirname,'./views/login.html'));
});

// Se levanta el servidor
app.listen( 3000,console.log("El Servidor esta funcionando"));
