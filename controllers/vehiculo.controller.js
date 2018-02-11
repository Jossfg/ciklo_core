var Vehiculo = require('../models/vehiculo');
var Usuario = require('../models/usuario');

exports.create = function(req, res) {
    if(!req.body.idUsuario) {
        res.status(400).send({message: "Nombre y idUsuario es obligatorio"});
    } 
    Usuario.findById(req.body.idUsuario, function (err, usuario) {
        var Vehiculo = new Vehiculo({
            tipo: req.body.tipo, 
            capacidad: req.body.capacidad,
            usuario: usuario,
            activo: true
        });
        Vehiculo.save(function(err, data) {
            if(err) {
                res.status(500).send({message: "Some error occurred while creating a Vehiculo."});
            } else {
                res.status(201).send(data);
            }
        });
    });
};

exports.findAll = function(req, res) {
    Vehiculo.find(function(err, data){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving Vehiculo."});
        } else {
            res.json(data);
        }
    });  
};

exports.findOne = function(req, res) {
    Vehiculo.findById(req.params.id, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve Vehiculo with id " + req.params.id});
        } else {
            res.json(data);
        }
    });
};

exports.update = function(req, res) {
    Vehiculo.findById(req.params.id, function(err, vehiculo) {
        if(err) {
            res.status(500).send({message: "Could not find a Vehiculo with id " + req.params.id});
        }

        Usuario.findById(req.body.idUsuario, function (err, usuario) {
            vehiculo.tipo = req.body.tipo;
            vehiculo.capacidad = req.body.capacidad;
            vehiculo.usuario = usuario;
            vehiculo.activo = req.body.activo;
    
            vehiculo.save(function(err, data){
                if(err) {
                    res.status(500).send({message: "Could not update Vehiculo with id " + req.params.id});
                } else {
                    res.status(200).send(data);
                }
            });
        });

    });
};