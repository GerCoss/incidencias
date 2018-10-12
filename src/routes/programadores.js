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
    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Usuario guardado' });
        } else {
            console.log("Hubo problema al crear usuario", err);
        }
    });

});

app.delete('/programadores', function(req, res) {
    let email = req.body.email;
    const sql = `delete from programadores where email="${email}"`;
    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Usuario borrado' });
        } else {
            console.log("Hubo problema al borrar usuario", err);
        }
    });
});

module.exports = app;