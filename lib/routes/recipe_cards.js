const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.render('project_partial', {
    project: {
      title : 'recipe cards',
      img: 'http://res.cloudinary.com/ddbeeuyr4/image/upload/v1489172215/recipe_cards_shxcv3.png',
      desc: `A simple recipe card application. Users can create a recipe card, add/delete and edit ingredients inline. Cards can also be hidden by clicking on the main header of the card`,
      stack: 'React',
      link: 'https://github.com/Swoodend/recipe_cards'
    }
  });
});

module.exports = router;
