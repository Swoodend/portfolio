const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.send('at ween scraper');
});

module.exports = router;