'use strict'

const app = require('./app');
const config = require('./config');

app.listen(3000, () => {
    console.log("App escuchando en el puerto: 3000");
})