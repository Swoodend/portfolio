const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.render('project_partial', {
    project: {
      title : 'fcc leaderboard',
      img: 'http://res.cloudinary.com/ddbeeuyr4/image/upload/v1489171436/fcc_leaderboard_qji9kd.png',
      desc: `A leaderboard showcasing some of the most active users at FreeCodeCamp.com. Users can sort by "All time" or "Recent" points`,
      stack: 'React',
      link: 'https://github.com/Swoodend/fcc_leaderboard'
    }
  });
});

module.exports = router;
