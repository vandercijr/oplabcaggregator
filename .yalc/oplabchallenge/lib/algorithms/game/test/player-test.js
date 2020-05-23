'use strict';
/**
 * Arquivo: player-test.js
 * Author: Vanderci Curvelo Junior
 * Description: test for the file : 'player.js'
 * Data: 16/05/2020
 *
 * Documentação: http://chaijs.com/guide/styles/#expect
 *
 */

var chai = require('chai');

var Player = require('../player');

var player = new Player('A Player');
var expect = chai.expect;
describe('Test player object, according to challenge definition', function () {
  it('Should return a player named A Player', function () {
    expect(player.name).to.be.equal('A Player');
  });
  it('Given 1 stones Should return 0 as a move', function () {
    expect(player.move(1)).to.be.equal(0);
  });
  it('Given 2 stones Should return 2 as a move', function () {
    expect(player.move(2)).to.be.equal(2);
  });
  it('Given 3 stones Should return 2 as a move', function () {
    expect(player.move(3)).to.be.equal(2);
  });
  it('Given 4 stones Should return 3 as a move', function () {
    expect(player.move(4)).to.be.equal(3);
  });
  it('Given 5 stones Should return 5 as a move', function () {
    expect(player.move(5)).to.be.equal(5);
  });
  it('Given 6 stones Should return 5 as a move', function () {
    expect(player.move(6)).to.be.equal(5);
  });
  it('Given 7 or more stones Should return 2,3 or 5 as a move', function () {
    expect([2, 3, 5]).to.include(player.move(7));
    expect([2, 3, 5]).to.include(player.move(10));
    expect([2, 3, 5]).to.include(player.move(20));
  });
});