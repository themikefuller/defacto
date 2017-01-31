// Express app
var express = require('express');
var app = express();

// JSON Spacing
app.set('json spaces',2);

// View Engine - Pug
var pug = require('pug');
app.set('view engine','pug');

// Remove x-powered-by
app.set('x-powered-by',false);

// Pretty HTML
app.locals.pretty = true;

// Cross Origin Resource Sharing
var cors = require('cors');
app.use(cors());

// Serve static files from public/
app.use(express.static('public'));

// Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cookie Parser
var cookieParser = require('cookie-parser');
app.use(cookieParser());

module.exports = app;
