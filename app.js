'use strict';
const express = require('express');
const app = express();
const path = require('path');


const index = require('./lib/routes/index.js');
const twitchViewer = require('./lib/routes/twitch_viewer');
const wikiView = require('./lib/routes/wiki_view');
const simon = require('./lib/routes/simon');
const ticTacToe = require('./lib/routes/tic_tac_toe');
const pomodoro = require('./lib/routes/pomodoro');
const asteroidsAi = require('./lib/routes/asteroids_ai');
const ween = require('./lib/routes/ween_scraper');
const daily = require('./lib/routes/daily');
const gameOfLife = require('./lib/routes/game_of_life');
const recipeCards = require('./lib/routes/recipe_cards');
const fccLeaderBoard = require('./lib/routes/fcc_leaderboard');


app.set('view engine', 'pug');
app.set('views', path.join(__dirname + '/lib/public/views'));

app.use(express.static(path.join(__dirname, '/lib/public')));


app.use('/', index);
app.use('/projects/twitch_viewer', twitchViewer);
app.use('/projects/wiki_view', wikiView);
app.use('/projects/simon', simon);
app.use('/projects/tic_tac_toe', ticTacToe);
app.use('/projects/pomodoro', pomodoro);
app.use('/projects/asteroids_ai', asteroidsAi);
app.use('/projects/ween_scraper', ween);
app.use('/projects/automate_daily_reports', daily);
app.use('/projects/game_of_life', gameOfLife);
app.use('/projects/recipe_cards', recipeCards);
app.use('/projects/fcc_leaderboard', fccLeaderBoard);





app.listen(process.env.PORT || 8080, function(){
  let port = process.env.PORT || 8080;
  console.log('app listening on port', port);
});
