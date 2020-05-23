'use strict';
/**
 * Arquivo: linkedlist-test.js
 * Author: Vanderci Curvelo Junior
 * Description: test for the file : 'linkedlist.js'
 * Data: 11/05/2020
 *
 * Documentação: http://chaijs.com/guide/styles/#expect
 *
 */

var chai = require('chai');

var SinglyLinkedList = require('../linkedlist');

var Node = require('../singlylinkedlistnode');

var expect = chai.expect;
var input = ['Name 1', 'Name 2']; //names generated from ttps://www.name-generator.org.uk

var item1 = new Node(1, input[0]);
var item2 = new Node(2, input[1]);
var mylist = new Node(item1._id, item1._data);
mylist.next = item2;
console.log(item1);
console.log(mylist);
describe('Test some linkedlist algorithms', function () {
  it('Should have count equal to 0 on creating a linkedlist', function () {
    var singlyLinkedList = new SinglyLinkedList();
    expect(singlyLinkedList.count()).to.be.equal(0);
  });
  it('Should have count equal to 1 pushing a item to the linked list', function () {
    var singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.push(1, input[0]);
    expect(singlyLinkedList.count()).to.be.equal(1);
  });
  it('Should have count equal to 2 pushing a item to the linked list', function () {
    var singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.push(1, input[0]);
    singlyLinkedList.push(2, input[1]);
    expect(singlyLinkedList.count()).to.be.equal(2);
  });
  it('Should push an item to the linked list', function () {
    var singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.push(1, input[0]);
    expect(singlyLinkedList.findAll()).to.deep.equal(item1);
  });
  it('Should push two items to the linked list', function () {
    var singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.push(1, input[0]);
    singlyLinkedList.push(2, input[1]);
    expect(singlyLinkedList.findAll()).to.deep.equal(mylist);
  });
  it('Should find the specified item on the linked list', function () {
    var singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.push(1, input[0]);
    singlyLinkedList.push(2, input[1]);
    expect(singlyLinkedList.find(2)).to.deep.equal(item2);
  });
  it('Should remove the first item from the linked list', function () {
    var singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.push(1, input[0]);
    singlyLinkedList.push(2, input[1]);
    singlyLinkedList.remove(1);
    expect(singlyLinkedList.findAll()).to.deep.equal(item2);
  });
  it('Should remove the second item from the linked list', function () {
    var singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.push(1, input[0]);
    singlyLinkedList.push(2, input[1]);
    singlyLinkedList.remove(2);
    expect(singlyLinkedList.findAll()).to.deep.equal(item1);
  });
});