var express = require('express');
var router = express.Router();

var vehiculo = require('../models/vehiculo');

var vehiculoController = require('../controllers/vehiculo.controller');

router.post('/', vehiculoController.create);
router.get('/', vehiculoController.findAll);
router.get('/:id', vehiculoController.findOne);
router.put('/:id', vehiculoController.update);

module.exports = router;