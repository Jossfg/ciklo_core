var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('lista log');
});

router.get('/:id', function(req, res, next) {
  res.send(req.params.id);
});

module.exports = router;