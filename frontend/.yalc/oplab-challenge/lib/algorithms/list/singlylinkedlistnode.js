'use strict'; //////////////////////////////////////////////////////////////////////////

/**
 * Node structure
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Node = /*#__PURE__*/function () {
  function Node(id, data, next) {
    _classCallCheck(this, Node);

    this._id = id;
    this._data = data;
    this._next = next;
  }

  _createClass(Node, [{
    key: "data",
    set: function set(value) {
      this._data = value;
    },
    get: function get() {
      return this._data;
    }
  }, {
    key: "next",
    set: function set(value) {
      this._next = value;
    },
    get: function get() {
      return this._next;
    }
  }, {
    key: "id",
    get: function get() {
      return this._id;
    }
  }]);

  return Node;
}(); //////////////////////////////////////////////////////////////////////////


module.exports = Node;