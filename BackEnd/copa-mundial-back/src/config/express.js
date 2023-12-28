const express = require('express');
require('dotenv').config();
const cors = require('cors');
//const jwt = require("jsonwebtoken")
//const bodyParser = require('body-parser')
//const bcrypt = require('bcrypt');
//const path = require('path');

const {
    seleccionRouter, sedeRouter, 
} = require('../modules/controller/routes') //Acceso a los Routers

const app = express();

app.set("port", process.env.PORT || 3000); //Pone como puerto el Definido en el archivo .env o 3000
app.use(cors({ origins: "*" })) //Permite recibir cualquier peticion con X origen
app.use(express.json({ limit: '50mb' })); //Permite peticiones hasta 50mb

//Ruta principal de Inicio
app.get('/', (req, res) => {
    res.send("Servicio NodeJS - Copa Mundial de la FIFA 2023 ");
})
//app.use('/uploads', express.static(path.join(__dirname, '../uploads')));


//Endpoint's
app.use('/copa-mundial/selecciones', seleccionRouter);
app.use('/copa-mundial/sedes', sedeRouter)

module.exports = { app };