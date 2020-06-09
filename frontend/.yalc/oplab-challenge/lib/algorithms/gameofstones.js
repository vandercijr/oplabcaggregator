"use strict";

//game console runner 
var Game = require('./game/game.js');

var argv = process.argv.slice(2);

(function () {
  if (!(argv[0] > 0)) {
    console.log('Inválid Parameter. Should be a number greated than 0');
    return false;
  }

  if (parseInt(argv[0]) != argv[0]) {
    console.log('Inválid Parameter. Should be a integer number');
    return false;
  }

  var game = Game(parseInt(argv[0]));
  game.events.on('game.start', function (e) {
    console.log('Game started');
  });
  game.events.on('game.turn', function (e) {
    console.log("Turn #" + e.turn);
  });
  game.events.on('game.stone', function (e) {
    console.log(e.stones + ' stone(s) left');
  });
  game.events.on('player.move', function (e) {
    console.log('Player ' + e.name + " removed " + e.move + " stones");
  });
  game.events.on('game.winner', function (e) {
    console.log('The winner is ' + e.name);
  });
  game.run();
})();