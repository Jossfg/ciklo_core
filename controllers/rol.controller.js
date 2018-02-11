var Rol = require('../models/rol');

exports.create = function(req, res) {
    if(!req.body.nombre) {
        res.status(400).send({message: "Nombre es obligatorio"});
    }
    var rol = new Rol({
        nombre: req.body.nombre, 
        descripcion: req.body.descripcion,
        activo: true
    });
    
    rol.save(function(err, data) {
        if(err) {
            res.status(500).send({message: "Some error occurred while creating a rol."});
        } else {
            res.status(201).send(data);
        }
    });
};

exports.findAll = function(req, res) {
    Rol.find(function(err, data){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving roles."});
        } else {
            res.json(data);
        }
    });  
};

exports.findOne = function(req, res) {
    Rol.findById(req.params.id, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve note with id " + req.params.id});
        } else {
            res.json(data);
        }
    });
};

exports.update = function(req, res) {
    Rol.findById(req.params.id, function(err, rol) {
        if(err) {
            res.status(500).send({message: "Could not find a rol with id " + req.params.id});
        }

        rol.nombre = req.body.nombre;
        rol.descripcion = req.body.descripcion;
        rol.activo = req.body.activo;

        rol.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update rol with id " + req.params.id});
            } else {
                res.status(200).send(data);
            }
        });
    });
};