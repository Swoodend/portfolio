const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.render('project_partial', {
    project: {
      title : 'game of life',
      img: 'http://res.cloudinary.com/ddbeeuyr4/image/upload/v1489163339/game_of_life_mz3yml.png',
      desc: `My take on Conway\'s game of life. A "cellular automaton" where each individual cell is birthed or dies based on the
      amount of living neighbouring cells. User\'s can generate a random state at anytime, start and pause the simulation when they
      please, view the number of generations passed and draw their own patterns to watch unfold`,
      stack: 'React',
      link: 'https://github.com/Swoodend/game_of_life'
    }
  });
});

module.exports = router;
