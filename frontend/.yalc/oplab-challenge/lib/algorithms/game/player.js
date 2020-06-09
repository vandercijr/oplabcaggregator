'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GameRule = require('./gamerule');

var Player = /*#__PURE__*/function () {
  function Player(name) {
    _classCallCheck(this, Player);

    this._name = name;
    this.gameRule = new GameRule();
  }

  _createClass(Player, [{
    key: "move",
    value: function move(stones) {
      if (stones === 1) return 0;
      this.gameRule.adjustValidMove(stones);
      var valid_moves = this.gameRule.validMoves;
      return valid_moves[Math.floor(Math.random() * valid_moves.length)];
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }]);

  return Player;
}();

module.exports = Player;