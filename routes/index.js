var express = require('express');
var router = express.Router();
var users = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Home");
});

router.use('/usuario', users);

module.exports = router;
