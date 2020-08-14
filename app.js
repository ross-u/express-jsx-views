var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const erv = require('express-react-views');

var app = express();

// SET THE JSX VIEW ENGINE
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', erv.createEngine());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Basic home route rendering a view
app.get('/', function (req, res, next) {
  res.render('Home', { name: 'You', list: ['React', 'Angular', 'NodeJS', 'SQL', 'MongoDB'] });
});


module.exports = app;
