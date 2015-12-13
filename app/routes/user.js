var express = require('express');
var models = require('../models');
var router = express.Router();

router.route('/')
  .get(function(req, res, next) {
    models.User.findAll().then(function(results) {
      res.json(results);
    }).catch(function(err) {
      next(1007);
    });
  })
  .post(function(req, res, next) {
    var options = req.fetchParameter(['username']);
    if (req.checkParamErr(options)) return next(options);

    models.User.create({username: options.username}).then(function(result) {
      res.json(result);
    }).catch(function(err) {
      console.log(err);
      next(1006);
    });
  });

module.exports = router;
