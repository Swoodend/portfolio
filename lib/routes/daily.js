const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.render('project_partial', {
    project: { 
      title : 'automate daily reports',
      img: 'http://res.cloudinary.com/ddbeeuyr4/image/upload/v1486764480/generic_code_nb_e3pil6.png', 
      desc: 'This is a script I wrote to automate a daily report I had to run at work. The script will \
      search through my inbox to find an generated email with todays date as well as a specific subject line \
      and sender. It then downloads the attached spreadsheet, formats the file name, and uploads \
      the file to it\'s proper location on sharepoint. The most difficult part of this project was \
      interacting with MS Outlook using the win32com client as there was very little documentation.',
      stack: 'Python, win32com, bcrypt',
      link: 'https://github.com/Swoodend/automate_daily'
    }
  });
});

module.exports = router;