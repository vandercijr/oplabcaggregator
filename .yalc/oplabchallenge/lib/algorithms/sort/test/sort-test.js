'use strict';
/**
 * Arquivo: sort-test.js
 * Author: Vanderci Curvelo Junior
 * Description: test for the file : 'sort.js'
 * Data: 11/05/2020
 *
 * Documentação: http://chaijs.com/guide/styles/#expect
 *
 */

var chai = require('chai');

var _require = require('../sort.js'),
    bubbleSort = _require.bubbleSort;

var expect = chai.expect; //names generated from ttps://www.name-generator.org.uk

var array_input = ['Paris Cutler', 'Gideon Stibbons', 'Cordelia Holt', 'Randall Ridcully', 'Nadia Drake', 'Ruki Imperial', 'Tamika Konstan', 'Faust Rune', 'Ponder Weasley', 'Ommin Voldemort'];
var asorted_array = ['Cordelia Holt', 'Faust Rune', 'Gideon Stibbons', 'Nadia Drake', 'Ommin Voldemort', 'Paris Cutler', 'Ponder Weasley', 'Randall Ridcully', 'Ruki Imperial', 'Tamika Konstan'];
var dsorted_array = ['Tamika Konstan', 'Ruki Imperial', 'Randall Ridcully', 'Ponder Weasley', 'Paris Cutler', 'Ommin Voldemort', 'Nadia Drake', 'Gideon Stibbons', 'Faust Rune', 'Cordelia Holt'];
describe('Test some sort algorithms', function () {
  it('Should sort an array using ascendent BubbleSort algorithm', function () {
    bubbleSort(array_input);
    expect(array_input).to.deep.equal(asorted_array);
  });
  it('Should sort an array using descendent BubbleSort algorithm', function () {
    bubbleSort(array_input, 'desc');
    expect(array_input).to.deep.equal(dsorted_array);
  });
});