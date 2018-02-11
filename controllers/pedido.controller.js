var Pedido = require('../models/pedido');
var Vehiculo = require('../models/vehiculo');

exports.create = function(req, res) {
    if(!req.body.idVehiculo) {
        res.status(400).send({message: "Nombre y idvehiculo es obligatorio"});
    } 
    Vehiculo.findById(req.body.idVehiculo, function (err, vehiculo) {
        var Pedido = new Pedido({
            origen: req.body.origen, 
            destino: req.body.destino,
            total: 0,
            vehiculo: vehiculo,
            estado: false
        });
        Pedido.save(function(err, data) {
            if(err) {
                res.status(500).send({message: "Some error occurred while creating a Pedido."});
            } else {
                res.status(201).send(data);
            }
        });
    });
};

exports.findAll = function(req, res) {
    Pedido.find(function(err, data){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving Pedido."});
        } else {
            res.json(data);
        }
    });  
};

exports.findOne = function(req, res) {
    Pedido.findById(req.params.id, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve Pedido with id " + req.params.id});
        } else {
            res.json(data);
        }
    });
};

exports.update = function(req, res) {
    Pedido.findById(req.params.id, function(err, pedido) {
        if(err) {
            res.status(500).send({message: "Could not find a Pedido with id " + req.params.id});
        }

        Vehiculo.findById(req.body.idvehiculo, function (err, vehiculo) {
            pedido.origen = req.body.origen;
            pedido.destino = req.body.destino;
            pedido.total = req.body.total;
            pedido.vehiculo = vehiculo;
            pedido.estado = req.body.estado;
    
            pedido.save(function(err, data){
                if(err) {
                    res.status(500).send({message: "Could not update Pedido with id " + req.params.id});
                } else {
                    res.status(200).send(data);
                }
            });
        });

    });
};

exports.delete = function(req, res) {
    Pedido.remove({_id: req.params.id}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete Pedido with id " + req.params.id});
        } else {
            res.send({message: "Pedido deleted successfully!"})
        }
    });
};

exports.addPaquetes = function(req, res) {
    Pedido.findById(req.params.id, function(err, pedido) {
        pedido.paquetes = req.body.paquetes;
        pedido.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update paquetes with id Pedido " + req.params.id});
            } else {
                res.status(200).send(data);
            }
        });
    });
};