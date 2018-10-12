const express = require('express');

const app = express();

//permite obtener la informacion enviada por un html y lo pasa al formato json
const bodyParser = require('body-parser');
//siempre que se ve app.use significa que son midlewares
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json());

app.use(require('./login'));
app.use(require('./programadores'));
app.use(require('./proyectos'));

module.exports = app;