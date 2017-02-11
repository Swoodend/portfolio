const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.render('project_partial', {
    project: { 
      title : 'wiki view',
      img: 'http://res.cloudinary.com/ddbeeuyr4/image/upload/v1486764480/wiki_view_nb_si5smv.png', 
      desc: 'A wikipedia search abstraction. Users can enter a term and receive relevant wikipedia articles \
      as a result',
      stack: 'HTML, CSS, JS, jQuery, Wikipedia API',
      link: 'http://codepen.io/Swoodend/full/ENrNwp/'
    }
  });
});

module.exports = router;