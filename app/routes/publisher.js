var express = require('express');
var models = require('../models');
var router = express.Router();

router.route('/')
  .get(function(req, res, next) {
    models.Publisher.findAll().then(function(results) {
      res.json(results);
    }).catch(function(err) {
      next(1001);
    });

    /*
    models.Publisher.findAll({
      offset: 1,
      limit: 1
    }).then(function(result) {});

    /*
    models.Publisher.findAll({
      //order: 'pub_id DESC'
      order: [['pub_id', 'DESC']]
    }).then(function(results){});
    /*
    models.Publisher.findAll({
      where: {pub_id: 1}
    }).then(function(result) {
      //TODO: query결과가 담긴 result에 대한 처리 진행
    }); */

    //select * from publisher where pub_id > 1 and pub_id < 4;
    /*
    models.Publisher.findAll({
      where: {
        $and: [{pub_id: {$gt: 1}}, {pub_id: {$lt: 4}}]
      }
    }).then(function(results) {
      //TODO: query결과가 담긴 result에 대한 처리 진행
    }); */


    /*
    models.Publisher.findAll({
      attributes: ['pub_id', 'name']
    }).then(function(results) {
    }); */

    /*models.Publisher.findAll({
      attributes: {exclude: ['established_date']}
    }).then(function(results) {
      res.json(results);
    }); */
  })
  .post(function(req, res, next) {
    var options = req.fetchParameter(['name']);
    if (req.checkParamErr(options)) return next(options);

    models.Publisher.create({name: options.name}).then(function(result) {
      res.json(result);
    }).catch(function(err) {
      next(1000);
    });
  });

router.route('/:pub_id')
  .put(function(req, res, next) {
    var options = req.fetchParameter(['{pub_id}', 'name']);
    if (req.checkParamErr(options)) return next(options);

    var newName = options.name
      , pub_id = options.pub_id;

    models.Publisher.update({name: newName},
      {where: {pub_id: pub_id}, returning: true}).then(function(result) {
        res.json(result[1][0]);
      }).catch(function(err) {
        next(1002);
      });
  })
  .delete(function(req, res, next) {
    var options = req.fetchParameter(['{pub_id}']);
    if (req.checkParamErr(options)) return next(options);

    var pub_id = options.pub_id;

    models.Publisher.destroy({where: {pub_id: pub_id}}).then(function(result) {
      res.json({});
    }).catch(function(err) {
      next(1003);
    });
  });

module.exports = router;
