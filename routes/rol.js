var express = require('express');
var router = express.Router();

var rolController = require('../controllers/rol.controller');

router.post('/', rolController.create);
router.get('/', rolController.findAll);
router.get('/:id', rolController.findOne);
router.put('/:id', rolController.update);

module.exports = router;