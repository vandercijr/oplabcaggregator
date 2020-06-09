'use strict';
/**
 * Arquivo: gameofstones.js
 * Author: Vanderci Curvelo Junior
 * Description: implementation of gameofstones game challenge from https://www.hackerrank.com/challenges/game-of-stones-1/problem'
 * port from mine C++ implementation
 * run on nodejs
 * Data: 13/05/2020
 */

var Player = require('./player');

var events = require('events');

var game = function game(stones) {
  var eventEmitter = new events.EventEmitter();
  var p1 = new Player('First');
  var p2 = new Player('Second');
  var players = [];
  var turn = 1;
  players.push(p1);
  players.push(p2);
  var nplayers = players.length;

  var run = function run() {
    while (stones > 1) {
      eventEmitter.emit('game.turn', {
        turn: turn
      });

      for (var i = 0; i < nplayers; i++) {
        var _move = players[i].move(stones);

        eventEmitter.emit('player.move', {
          name: players[i].name,
          move: _move
        });
        stones -= _move;
        eventEmitter.emit('game.stone', {
          stones: stones
        });

        if (stones <= 1) {
          eventEmitter.emit('game.winner', {
            name: players[i].name
          });
          return true;
        }
      }

      turn++;
    }
  };

  return {
    run: run,
    events: eventEmitter
  };
};

module.exports = game;