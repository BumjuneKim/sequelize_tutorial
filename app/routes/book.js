var express = require('express');
var models = require('../models');
var router = express.Router();

router.route('/')
  .get(function(req, res, next) {
    var options = req.fetchParameter(['pub_id']);
    if (req.checkParamErr(options)) return next(options);

    models.Publisher.find({
      where: {pub_id: options.pub_id},
      include: [{model: models.Books}]
    }).then(function(result) {
      res.json(result);
    }).catch(function(err){
      next(1005);
    });
  })
  .post(function(req, res, next) {
    var options = req.fetchParameter(['pub_id', 'title', 'author', 'stock']);
    if (req.checkParamErr(options)) return next(options);

    models.Books.create({
      pub_id: options.pub_id,
      title: options.title,
      author: options.author,
      stock: options.stock
    }).then(function(result) {
      res.json(result);
    }).catch(function(err) {
      next(1004);
    });
  });

router.route('/list')
  .get(function(req, res, next) {
    models.Books.findAll().then(function(results) {
      res.json(results);
    }).catch(function(err) {
      next(err);
    });
  });

router.route('/test')
  .get(function(req, res, next) {

    /*
    models.sequelize.query('SELECT * FROM books limit 1',
      {type: models.Sequelize.QueryTypes.SELECT}).then(function(results) {
      console.log(results);
    }); */

    /*models.sequelize.query('SELECT * FROM books where pub_id=? limit ? ', {replacements: [7, 2]}).then(function(results) {
      console.log(results);
    }); */

    models.sequelize.query('SELECT * FROM books WHERE pub_id=:pub_id limit :limit',
      {replacements: {pub_id: 7, limit: 2}
    }).then(function(results) {
      console.log(results);
    });
  });

module.exports = router;
