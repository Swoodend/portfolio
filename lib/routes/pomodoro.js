const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.render('project_partial', {
    project: { 
      title : 'pomodoro clock',
      img: 'http://res.cloudinary.com/ddbeeuyr4/image/upload/v1486764480/pomodoro_nb_x7043d.png', 
      desc: 'A pomodoro clock encourages productivity. The user sets their desired work/break times and lets \
      the timer\'s take care of the rest. A suble ding is played when time expires to let the user know it\'s \
      back to work or time to break',
      stack: 'HTML, CSS, JS, jQuery',
      link: 'http://codepen.io/Swoodend/full/WReWEx/'
    }
  });
});

module.exports = router;