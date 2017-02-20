# Defacto
Defacto is an express app with some additional middleware and basic configurations. It can be useful as a boilerplate or basic reference for a test application.

## Middleware Used:
* cors
* express.static
* body-parser
* cookie-parser
* multer
* method-override
* compression

## Features
* Express app
* JSON spacing set to 2
* View engine set to pug
* x-powered-by removed from responses
* HTML rendered "pretty"
* Default CORS support (from npm cors package)
* Static file access from a public/ directory
* Request body parsed for URL-Encoded and JSON request bodies
* HTTP Method override
* deflat and gzip support

## Basic Usage
    var app = require('defacto');
    app.use(function(req,res,next){
      res.send('Home Page');
    });
    app.listen(4000);
