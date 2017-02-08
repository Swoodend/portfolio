'use strict';
const express = require('express');
const app = express();
const path = require('path');


const index = require('./lib/routes/index.js');


app.set('view engine', 'pug');
app.set('views', path.join(__dirname + 'lib/views'));


app.use('/', index);












app.listen(process.env.PORT || 8080, function(){
  let port = process.env.PORT || 8080;
  console.log('app listening on port', port);
});