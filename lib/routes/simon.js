const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.render('project_partial', {
    project: { 
      title : 'simon',
      img: 'http://res.cloudinary.com/ddbeeuyr4/image/upload/v1486764480/simon_nb_yoqoh1.png', 
      desc: 'A new take on the old classic.',
      stack: 'HTML, CSS, JS, jQuery',
      link: 'http://codepen.io/Swoodend/full/XpRBbo/'
    }
  });
});

module.exports = router;