'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');

function createToken(){
    const payload = {
        created_at: moment().unix()
    }
    return jwt.encode(payload, config.SECRET_TOKEN);
}

function decodeToken(token){
    
    const decode =  new Promise( (resolve, reject) => {
        try{
            const payload = jwt.decode(token, config.SECRET_TOKEN);
            resolve(payload);
        }catch(err){
            reject({
                status: 401,
                message: 'token invalido'
            }) 
        }
    })
    
    return decode
}

module.exports = {
    createToken,
    decodeToken
}