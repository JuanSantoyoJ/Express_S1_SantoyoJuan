const express = require('express');
const app = express();



require('dotenv').config();

const PORT = process.env.PORT;

app.get('/',(req,res) => {
    res.send('holaa\n');
});

app.get('/mensaje1',(req,res) => {
    res.send('otro hola ma bacano\n');
});

app.get('/mensaje2',(req,res) => {
    res.json({
        "mensaje":"tolon tolon\n"
    });
    res.json(jsonsito)
});

app.get('/mensaje3',(req,res) => {
    res.send('otro hola ma bacano\n');
});

app.get('/mensajePersonalizado/:nombre',(req,res)=>{
    const nombre = req.params.nombre;
    res.send(`Hola ${nombre}`);
});

app.post('/mensajeJSON',(req,res)=>{
    const menJson = req.body;
    res.send(`Hola ${menJson["nombre"]}, el cual tiene ${menJson["edad"]} edad!!`)
})

app.listen(PORT,()=>{
    console.log("Servidor Iniciado!!");
    console.log(PORT)
});