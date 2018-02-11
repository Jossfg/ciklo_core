var Log = require('../models/log');

exports.findAll = function(req, res) {
    log.find(function(err, data){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving log."});
        } else {
            res.json(data);
        }
    });  
};

exports.findOne = function(req, res) {
    log.findById(req.params.id, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve log with id " + req.params.id});
        } else {
            res.json(data);
        }
    });
};