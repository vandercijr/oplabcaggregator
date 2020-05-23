'use strict';
/**
 * Arquivo: game-test.js
 * Author: Vanderci Curvelo Junior
 * Description: test for the file : 'game.js'
 * Data: 19/05/2020
 *
 * Documentação: http://chaijs.com/guide/styles/#expect
 *
 */

var chai = require('chai');

var Game = require('../game.js');

var expect = chai.expect;
describe('Test game of stones', function () {
  it('Give 2 stones Should return First player as a winner', function () {
    var game = Game(2);
    game.events.on('game.winner', function (e) {
      expect(e.name).to.be.equal('First');
    });
    game.run();
  });
  it('Give 3 stones Should return First player as a winner', function () {
    var game = Game(3);
    game.events.on('game.winner', function (e) {
      expect(e.name).to.be.equal('First');
    });
    game.run();
  });
  it('Give 4 stones Should return First player as a winner', function () {
    var game = Game(4);
    game.events.on('game.winner', function (e) {
      expect(e.name).to.be.equal('First');
    });
    game.run();
  });
  it('Give 5 stones Should return First player as a winner', function () {
    var game = Game(5);
    game.events.on('game.winner', function (e) {
      expect(e.name).to.be.equal('First');
    });
    game.run();
  });
  it('Give 6 stones Should return First player as a winner', function () {
    var game = Game(6);
    game.events.on('game.winner', function (e) {
      expect(e.name).to.be.equal('First');
    });
    game.run();
  });
  it('Give 7 stones Should return Second player as a winner', function () {
    var game = Game(7);
    game.events.on('game.winner', function (e) {
      expect(e.name).to.be.equal('Second');
    });
    game.run();
  });
  it('Give 8 stones Should return Second player as a winner', function () {
    var game = Game(8);
    game.events.on('game.winner', function (e) {
      expect(e.name).to.be.equal('Second');
    });
    game.run();
  });
  it('Give 9 stones Should return First or Second players as winners', function () {
    var game = Game(9);
    game.events.on('game.winner', function (e) {
      expect(['First', 'Second']).to.include(e.name);
    });
    game.run();
  });
});