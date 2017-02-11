const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.render('project_partial', {
    project: { 
      title : 'ween scraper',
      img: 'http://res.cloudinary.com/ddbeeuyr4/image/upload/v1486764480/generic_code_nb_e3pil6.png', 
      desc: 'I wanted to know when the band Ween was coming to Toronto. This program scrapes a tour date site \
      to find ween shows in Toronto. When a show is found an email is sent to myself. I saw Ween Sept 17 2016. \
      Tasty, dude.',
      stack: 'Python, BeautifulSoup',
      link: 'https://github.com/Swoodend/ween_scraper'
    }
  });
});
module.exports = router;