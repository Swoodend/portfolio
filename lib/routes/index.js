const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.send('Made it to the landing page');
});

module.exports = router;