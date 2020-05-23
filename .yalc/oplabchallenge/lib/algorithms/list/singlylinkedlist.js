'use strict';
/**
 * Arquivo: singlylinkedlist.js
 * Author: Vanderci Curvelo Junior
 * Description: very basic implementation of a singly linked list'
 * Data: 11/05/2020
 *
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Node = require('./singlylinkedlistnode');

var SinglyLinkedList = /*#__PURE__*/function () {
  function SinglyLinkedList() {
    _classCallCheck(this, SinglyLinkedList);

    this.validationMessage = ['Id should be an integer'];

    this.isValidId = function (id) {
      return id > 0;
    };

    this.head_node = undefined;
  }

  _createClass(SinglyLinkedList, [{
    key: "addToTop",
    //////////////////////////////////////////////////////////////////////////
    // add a node at top of the list
    value: function addToTop(id, data) {
      var next;

      if (typeof this.head_node !== 'undefined') {
        next = this.head_node;
      }

      this.head_node = new Node(id, data, next);
    }
  }, {
    key: "push",
    //////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////
    // add a node like push data into an array
    value: function push(id, data) {
      var current_node = this.head_node;
      var next;

      if (typeof this.head_node === 'undefined') {
        this.addToTop(id, data);
        return true;
      }

      while (typeof current_node.next !== 'undefined') {
        current_node = current_node.next;
      }

      current_node.next = new Node(id, data, next);
    }
  }, {
    key: "remove",
    //////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////
    value: function remove(id) {
      if (!this.isValidId(id)) return this.validationMessage[0];
      var current_node = this.head_node;

      while (typeof current_node.next !== 'undefined') {
        //check the if first node contain the id
        if (current_node.id === id) {
          this.head_node = current_node.next;
          return true;
        }

        if (current_node.next.id === id) {
          current_node.next = current_node.next.next;
          return true;
        }

        current_node = current_node.next;
      }
    }
  }, {
    key: "find",
    //////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////
    value: function find(id) {
      if (!this.isValidId(id)) return this.validationMessage[0];
      var current_node = this.head_node;

      while (typeof current_node !== 'undefined') {
        if (current_node.id === id) {
          return current_node;
        }

        current_node = current_node.next;
      }

      return new Node({}, {});
    }
  }, {
    key: "findAll",
    //////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////
    value: function findAll() {
      return this.head_node;
    } //////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////

  }, {
    key: "count",
    value: function count() {
      var current_node = this.head_node;
      var count = 0;

      while (typeof current_node !== 'undefined') {
        count++;
        current_node = current_node.next;
      }

      return count;
    }
  }]);

  return SinglyLinkedList;
}();

module.exports = SinglyLinkedList;