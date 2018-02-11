var express = require('express');
var router = express.Router();

var rol = require('./rol');
var usuario = require('./usuario');
var vehiculo = require('./vehiculo');
var pedido = require('./pedido');
var log = require('./log');

router.get('/', function(req, res, next) {
  res.send("Home");
});

router.use('/rol', rol);
router.use('/usuario', usuario);
router.use('/vehiculo', vehiculo);
router.use('/pedido', pedido);
router.use('/log', log);

module.exports = router;
