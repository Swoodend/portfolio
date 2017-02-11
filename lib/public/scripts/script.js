'use strict';

const imageHash = {
  
  ween_scraper : 'http://res.cloudinary.com/ddbeeuyr4/image/upload/c_scale,h_310,w_440/v1486518190/portfolio/Screen_Shot_2017-02-07_at_7.10.49_PM.png',

  automate_daily : 'http://res.cloudinary.com/ddbeeuyr4/image/upload/c_scale,h_310,w_440/v1486518190/portfolio/Screen_Shot_2017-02-07_at_7.10.49_PM.png',

  asteroids_ai : 'http://res.cloudinary.com/ddbeeuyr4/image/upload/c_scale,h_310,w_440/v1486518125/asteroids_hvwit5.png',

  twitch_viewer : 'http://res.cloudinary.com/ddbeeuyr4/image/upload/c_scale,h_340,w_250/v1486519101/portfolio/Screen_Shot_2017-02-07_at_8.43.42_PM.png',

  pomodoro_clock : 'http://res.cloudinary.com/ddbeeuyr4/image/upload/c_scale,h_310,w_440/v1486519723/portfolio/Screen_Shot_2017-02-07_at_8.45.05_PM.png',

  simon : 'http://res.cloudinary.com/ddbeeuyr4/image/upload/c_scale,h_310,w_440/v1486697387/Screen_Shot_2017-02-09_at_10.27.33_PM_x0u9re.png',

  wiki_view: 'http://res.cloudinary.com/ddbeeuyr4/image/upload/c_scale,h_200,w_420/v1486698392/Screen_Shot_2017-02-09_at_10.45.40_PM_s9hqek.png',

  tic_tac_toe: 'https://res.cloudinary.com/ddbeeuyr4/image/upload/c_scale,h_300,w_300/v1486698830/portfolio/Screen_Shot_2017-02-07_at_7.40.32_PM.png'



}

$(document).ready(function(){
  console.log(imageHash.simon);
  $('.carousel').carousel();
  $('.button-collapse').sideNav({
    menuWidth: 300,
    edge: 'right'
  });
});