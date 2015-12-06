var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fetcher = require('express-param');
var models = require('./models');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

function configApp() {
  app.use(bodyParser.json({type: 'application/json'}));
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(fetcher());
  app.use(cookieParser());
  require('./routes').routes(app);
  app.use(express.static(path.join(__dirname, '/../public')));
  app.use(require('./error').handler);
}

configApp();

app.listen(4000, function() {
  console.log('Server is listening on port 4000');
});

module.exports = app;
