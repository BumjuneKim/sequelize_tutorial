var publisher = require('./publisher');
var book = require('./book');
var user = require('./user');
var rent = require('./rent');

module.exports.routes = function(app) {
  var PREFIX = '/api/seq_ex';

  app.use(PREFIX + '/publisher', publisher);
  app.use(PREFIX + '/book', book);
  app.use(PREFIX + '/user', user);
  app.use(PREFIX + '/rent', rent);

  app.get('/', function(req, res) {
    res.render('index.html');
  });
};
