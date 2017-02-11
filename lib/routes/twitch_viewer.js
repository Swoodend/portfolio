const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.render('project_partial', {
    project: { 
      title : 'twitch viewer',
      img: 'http://res.cloudinary.com/ddbeeuyr4/image/upload/v1486764480/twitch_viewer_nb_neyobf.png', 
      desc: 'A "mobile" app that allows the user to add their favourite twitch streamers and view \
      their stream, see the number of current viewers, online/offline status, etc',
      stack: 'HTML, CSS, JS, jQuery, Twitch API',
      link: 'http://codepen.io/Swoodend/full/oYKQyy/'
    }
  });
});

module.exports = router;