var publisher = require('./publisher');
var book = require('./book');

module.exports.routes = function(app) {
  var PREFIX = '/api/seq_ex';

  app.use(PREFIX + '/publisher', publisher);
  app.use(PREFIX + '/book', book);

  app.get('/', function(req, res) {
    res.render('index.html');
  });
};
