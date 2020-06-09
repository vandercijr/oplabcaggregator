'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GameRule = /*#__PURE__*/function () {
  function GameRule() {
    _classCallCheck(this, GameRule);

    this.totalValidMoves = [2, 3, 5];
    this.validMoves = [];
  }

  _createClass(GameRule, [{
    key: "adjustValidMove",

    /** This method adjusts the valid moves when the number of stones becomes less then the major number of valid moves, or less or equal 7
     ** due to the valid moves and the challenge rules that imposed no failling moves
    */
    value: function adjustValidMove(stones) {
      this.validMoves = [];

      for (var i = 0; i < this.totalValidMoves.length; i++) {
        if (stones - this.totalValidMoves[i] <= 1) {
          this.validMoves.push(this.totalValidMoves[i]);
          return true;
        }
      }

      this.validMoves = this.totalValidMoves; //
      // while (GameOfStonesRule.validMoves[GameOfStonesRule.validMoves.length-1] > stones)
      //   GameOfStonesRule.validMoves.splice(GameOfStonesRule.validMoves.length-1);
      //

      return true;
    }
  }]);

  return GameRule;
}();

module.exports = GameRule;