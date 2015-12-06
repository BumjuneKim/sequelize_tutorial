'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://sequelize:1234@localhost/sequelize');
/*var sequelize = new Sequelize('sequelize', 'sequelize', '1234', {
  host: 'localhost',
  dialect: 'postgres'
}); */
var db = {};

//db['Publisher'] = sequelize.import(path.join(__dirname, 'publisher.js'));

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js' && file !== 'association.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

//db.Publisher.sync();
//db.Publisher.drop();
//db.Publisher.sync({force: true});

/*
var association = require('./association');
association.init(db); */

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
