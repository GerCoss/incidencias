const express = require('express');
const bcrypt = require('bcryptjs');
const mysqlConnection = require('../mysql/conexionABaseDeDatos.js');

const app = express();

app.post('/programadores', (req, res) => {
    let body = req.body;

    programador = {
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10)
    }

    const sql = `insert into programadores (nombre,email,password,imagen) values ("${programador.nombre}","${programador.email}","${programador.password}","fdaf")`;
    mysqlConnection.query(sql, function(err, res) {
        if (err) throw err;
        console.log("1 record inserted");
    });

});

module.exports = app;