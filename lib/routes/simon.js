const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.send('at the simon page');
});

module.exports = router;