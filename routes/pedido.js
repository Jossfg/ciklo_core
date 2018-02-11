var express = require('express');
var router = express.Router();

var pedidoController = require('../controllers/pedido.controller');

router.post('/', pedidoController.create);
router.get('/', pedidoController.findAll);
router.get('/:id', pedidoController.findOne);
router.put('/:id', pedidoController.update);
router.delete('/:id', pedidoController.delete);
router.post('/:id/paquetes', pedidoController.addPaquetes)

module.exports = router;