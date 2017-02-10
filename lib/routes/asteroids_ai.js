const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.send('at the asteroids page');
});

module.exports = router;