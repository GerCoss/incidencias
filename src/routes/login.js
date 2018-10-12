const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mysqlConnection = require('../mysql/conexionABaseDeDatos.js');

const app = express();

app.post('/login', (req, res) => {
    let body = req.body;

});

module.exports = app;