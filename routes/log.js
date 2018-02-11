var express = require('express');
var router = express.Router();

var logController = require('../controllers/log.controller');

router.get('/', logController.findAll);
router.get('/:id', logController.findOne);

module.exports = router;