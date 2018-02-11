var express = require('express');
var router = express.Router();

var usuarioController = require('../controllers/usuario.controller');

router.post('/', usuarioController.create);
router.get('/', usuarioController.findAll);
router.get('/:id', usuarioController.findOne);
router.put('/:id', usuarioController.update);

module.exports = router;
