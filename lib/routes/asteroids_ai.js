const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.render('project_partial', {
    project: { 
      title : 'asteroids ai',
      img: 'http://res.cloudinary.com/ddbeeuyr4/image/upload/v1486764480/asteroids_ai_nb_ibulb5.png', 
      desc: 'Foray into machine learning. Asteroids game slowly learns how to play itself. \
      includes a joystick to visualize the AI\'s decisions, and a chart updated in real time to \
      visualize the AI\'s points',
      stack: 'HTML, CSS, JS, jQuery, Highcharts',
      link: 'https://github.com/Swoodend/asteroids_ai'
    }
  });
});
module.exports = router;