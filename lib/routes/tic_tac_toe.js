const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.render('project_partial', {
    project: { 
      title : 'tic tac toe',
      img: 'http://res.cloudinary.com/ddbeeuyr4/image/upload/v1486764480/tic_tac_toe_nb_by5m14.png', 
      desc: 'It\'s tic tac toe. One or two players. Unbeatable AI via the minimax algorithm',
      stack: 'HTML, CSS, JS, jQuery',
      link: 'http://codepen.io/Swoodend/full/EZgvJz/'
    }
  });
});

module.exports = router;