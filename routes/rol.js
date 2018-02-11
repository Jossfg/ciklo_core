var express = require('express');
var router = express.Router();
var Rol = require('../models/rol');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //var rol = new Rol({ nombre: 'Silence' });
  //rol.save(function (err) {if (err) console.log ('Error on save!')});
  Rol.find(function (err, roles) {
    if (err) return console.error(err);
    res.json(roles);
  })
  //res.send("lista roles");
});

module.exports = router;