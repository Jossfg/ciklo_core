'use strict'

const cors = require("cors");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const auth = require('./middleware/auth');
const app = express();
const api = require('./routes');
const authCtrl = require('./controllers/auth');

mongoose.connect('mongodb://127.0.0.1:27017/ciklo').then(function(data){
    console.log("conexion realizada");
}, function(err) {
    console.log(err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.post('/signin', authCtrl);
app.use('/api', api);

module.exports = app;