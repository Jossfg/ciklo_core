'use strict'

const helpers = require('../helpers');

function isAuth(req, res, next) {
    
    if (!req.headers.authorization) return res.status(403).send({ message: 'sin autorizacion' })
    const token = req.headers.authorization;

    helpers.decodeToken(token)
    .then(response => {
        next();
    })
    .catch(response => {
        return res.status(response.status).send({ message: response.message })
    })
}

module.exports = isAuth