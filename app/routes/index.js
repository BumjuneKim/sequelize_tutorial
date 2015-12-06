var publisher = require('./publisher');

module.exports.routes = function(app) {
  var PREFIX = '/api/seq_ex';

  app.use(PREFIX + '/publisher', publisher);

  app.get('/', function(req, res) {
    res.render('index.html');
  });
};
