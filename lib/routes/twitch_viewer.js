const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.send('at the twitch viewer page');
});

module.exports = router;