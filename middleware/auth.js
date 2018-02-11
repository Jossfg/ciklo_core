'use strict'

const helpers = require('../helpers');
const Log = require('../models/log');

function isAuth(req, res, next) {
    
    if (!req.headers.authorization) return res.status(403).send({ message: "Sin autorización" })
    const token = req.headers.authorization;

    helpers.decodeToken(token)
    .then(response => {
        if (req.method != "GET") {
            var Log = new Log({
                accion: req.method + " " + req.path,
                usuario: req.headers.idUsuario
            });
            Log.save();
        }
        next();
    })
    .catch(response => {
        console.log(req.originalUrl);
        console.log(req.path);
        return res.status(response.status).send({ message: response.message })
    })
}

module.exports = isAuth