import React from 'react';
import IORunnerSection from './iorunnersection';
import IORunnerButton from './iorunnerbutton';
const Game = require('oplabchallenge/lib/algorithms/game/game.js');

class IOGameRunner extends React.Component {
  constructor(props)  {
    super(props);

    this.state  = {
      input: 2,
      output: ''
    }
  }

  onChangeInputHandler =  (value) => {
    this.setState({
      input:  value
    });
  }

  onClickRunHandler = ()  =>  {
    let _messages = '';

    if (!(this.state.input > 0)) {
      this.setState({
        output: 'Inválid Parameter. Should be a number greated than 0'
      })
      return false;
    }

    if (parseInt(this.state.input) != this.state.input) {
      this.setState({
        output: 'Inválid Parameter. Should be a integer number'
      })
      return false;
    }

    const game = Game(parseInt(this.state.input));

    game.events.on('game.start', (e) =>  {
      _messages = _messages.concat('Game started\n');
    })

    game.events.on('game.turn', (e) =>  {
      _messages = _messages.concat('Turn #',e.turn,'\n');
    })

    game.events.on('game.stone', (e) =>  {
      _messages = _messages.concat(e.stones, ' stone(s) left\n');
    })

    game.events.on('player.move', (e) =>  {
      _messages = _messages.concat('Player ', e.name, ' removed ', e.move, ' stones\n');
    })

    game.events.on('game.winner', (e) =>  {
      _messages = _messages.concat('The winner is ', e.name);

      this.setState({
        output: _messages
      })
    })

    game.run();
  }

  render() {
    return  <React.Fragment>
              <IORunnerSection title={this.props.title} input={this.state.input} output={this.state.output} onChangeInputHandler={this.onChangeInputHandler}/>
              <div className="w-100"></div>
              <br/>
              <br/>
              <IORunnerButton text={this.props.runText} onClickRunHandler={this.onClickRunHandler}/>
            </React.Fragment>
  }
}

export default IOGameRunner;
