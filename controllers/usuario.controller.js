var Usuario = require('../models/usuario');
var Rol = require('../models/rol');

exports.create = function(req, res) {
    if(!req.body.nombre || !req.body.idRol) {
        res.status(400).send({message: "Nombre y idRol es obligatorio"});
    } 
    Rol.findById(req.body.idRol, function (err, rol) {
        var usuario = new Usuario({
            nombre: req.body.nombre, 
            correo: req.body.correo,
            telefono: req.body.telefono,
            direccion: req.body.direccion,
            activo: true,
            rol: rol
        });
        usuario.save(function(err, data) {
            if(err) {
                res.status(500).send({message: "Some error occurred while creating a usuario."});
            } else {
                res.status(201).send(data);
            }
        });
    });
};

exports.findAll = function(req, res) {
    Usuario.find(function(err, data){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving usuario."});
        } else {
            res.json(data);
        }
    });  
};

exports.findOne = function(req, res) {
    Usuario.findById(req.params.id, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve usuario with id " + req.params.id});
        } else {
            res.json(data);
        }
    });
};

exports.update = function(req, res) {
    Usuario.findById(req.params.id, function(err, usuario) {
        if(err) {
            res.status(500).send({message: "Could not find a Usuario with id " + req.params.id});
        }

        Rol.findById(req.body.idRol, function (err, rol) {
            usuario.nombre = req.body.nombre;
            usuario.correo = req.body.descripcion;
            usuario.telefono = req.body.telefono;
            usuario.direccion = req.body.direccion;
            usuario.activo = req.body.activo;
            usuario.rol = rol;
    
            usuario.save(function(err, data){
                if(err) {
                    res.status(500).send({message: "Could not update Usuario with id " + req.params.id});
                } else {
                    res.status(200).send(data);
                }
            });
        });

    });
};