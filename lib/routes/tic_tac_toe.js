const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.send('at the tic tac toe page');
});

module.exports = router;