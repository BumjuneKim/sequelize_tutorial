var express = require('express');
var models = require('../models');
var router = express.Router();

router.route('/')
  .get(function(req, res, next) {
    models.RentHistory.findAll({
      include: [{model: models.User}, {model: models.Books}]
    }).then(function(results) {
      res.json(results);
    }).catch(function(err) {
      next(1008);
    });
  })
  .post(function(req, res, next) {
    var options = req.fetchParameter(['user_id', 'book_id']);
    if (req.checkParamErr(options)) return next(options);

    var t;
    var retJSON;

    models.sequelize.transaction().then(function(transaction) {
      t = transaction;

      return models.RentHistory.create({
        book_id: options.book_id,
        user_id: options.user_id
      }, {transaction: t});
    }).then(function(result) {
      retJSON = result;

      return models.Books.update({stock: models.sequelize.literal('stock - 1')},
        {where: {book_id: options.book_id}, transaction: t});
    }).then(function() {
      return t.commit();
    }).then(function() {
      res.json(retJSON);
    }).catch(function(err) {
      if (t)
        t.rollback();

      next(err);
    });
  });

module.exports = router;
