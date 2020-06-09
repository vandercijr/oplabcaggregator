'use strict';
/**
 * Arquivo: gamerule-test.js
 * Author: Vanderci Curvelo Junior
 * Description: test for the file : 'gamerule.js'
 * Data: 16/05/2020
 *
 * Documentação: http://chaijs.com/guide/styles/#expect
 *
 */

var chai = require('chai');

var GameRule = require('../gamerule');

var gameRule = new GameRule();
var expect = chai.expect;
describe('Test game of stones rules, according to challenge definition', function () {
  it('Adjust valid moves Should return true', function () {
    expect(gameRule.adjustValidMove(2)).to.be.equal(true);
  });
  it('Given 2 stones Should return 2 as valid game moves', function () {
    gameRule.adjustValidMove(2);
    expect(gameRule.validMoves).to.deep.equal([2]);
  });
  it('Given 3 stones Should return 2 as valid game moves', function () {
    gameRule.adjustValidMove(3);
    expect(gameRule.validMoves).to.deep.equal([2]);
  });
  it('Given 4 stones Should return 3 as valid game moves', function () {
    gameRule.adjustValidMove(4);
    expect(gameRule.validMoves).to.deep.equal([3]);
  });
  it('Given 5 stones Should return 5 as valid game moves', function () {
    gameRule.adjustValidMove(5);
    expect(gameRule.validMoves).to.deep.equal([5]);
  });
  it('Given 6 stones Should return 5 as valid game moves', function () {
    gameRule.adjustValidMove(6);
    expect(gameRule.validMoves).to.deep.equal([5]);
  });
  it('Given 7 or more stones Should return 2,3 or 5 as valid game moves', function () {
    gameRule.adjustValidMove(7);
    expect(gameRule.validMoves).to.deep.equal([2, 3, 5]);
  });
});