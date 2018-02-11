'use strict'

const config = require('../config');
const helpers = require('../helpers');

function signIn (req, res){
    
    if(!req.body.key) return res.status(401).send({ message: 'se requiere key para crear token'});
    
    if(req.body.key == config.key){
        res.status(201).send({ token: helpers.createToken(idAutomatizacion)});
    }else{
        res.status(401).send({message: 'key incorrecto'});
    }
}

module.exports = signIn