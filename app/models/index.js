'use strict';

var fs = require('fs');
var path = require('path');
var config = require('./config');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://sequelize:1234@localhost/sequelize');
/*var sequelize = new Sequelize('postgres://sequelize:1234@localhost/sequelize', {
  define: {
    hooks: {
      beforeCreate: function() {
        console.log('global hooks');
        //TODO: global hooks before create
      }
    }
  }
}); */

/*var sequelize = new Sequelize('sequelize', 'sequelize', '1234', {
  host: 'localhost',
  dialect: 'postgres'
}); */
var db = {};

//db['Publisher'] = sequelize.import(path.join(__dirname, 'publisher.js'));

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js' && file !== 'config.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

config.initAssociations(db);
//config.initHooks(db); hooks설정시 주석을 제거한다

//db.Publisher.sync();
//db.Publisher.drop();
//db.Publisher.sync({force: true});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
