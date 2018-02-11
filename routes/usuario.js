var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('lista usuarios');
});

router.get('/:id', function(req, res, next) {
  res.send(req.params.id);
});

module.exports = router;
