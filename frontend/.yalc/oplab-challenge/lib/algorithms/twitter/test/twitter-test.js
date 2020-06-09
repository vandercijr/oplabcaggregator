'use strict';
/**
 * Arquivo: twitter-test.js
 * Author: Vanderci Curvelo Junior
 * Description: test for the file : 'twitter.js'
 * Data: 17/05/2020
 *
 * Documentação: http://chaijs.com/guide/styles/#expect
 *
 */

var chai = require('chai');

var Twitter = require('../twitter');

var expect = chai.expect;
describe('Test game of stones', function () {
  it('Give a string search five tweets with this word', function () {
    var twitter = Twitter("Development");
    twitter.events.on('tweet', function (e) {
      expect(e.tweet.text).to.be.a('string');
    });
  });
});