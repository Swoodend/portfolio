const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.render('index', { msg: 'Hi, im a message'});
});

module.exports = router;