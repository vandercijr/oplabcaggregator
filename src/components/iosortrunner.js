import React from 'react';
import IORunnerSection from './iorunnersection';
import IORunnerButton from './iorunnerbutton';
const { bubbleSort } = require('oplabchallenge/lib/algorithms/sort/sort.js');

class IOSortRunner extends React.Component {
  constructor(props)  {
    super(props);

    this.state  = {
      input: 'Paris Cutler\n' +
              'Gideon Stibbons\n' +
              'Cordelia Holt\n' +
              'Randall Ridcully\n'+
              'Nadia Drake\n'+
              'Ruki Imperial\n'+
              'Tamika Konstan\n'+
              'Faust Rune\n'+
              'Ponder Weasley\n'+
              'Ommin Voldemort',
      output: '',
      order_type: 'asc'
    }
  }

  onChangeInputHandler =  (value) => {
    this.setState({
      input:  value
    });
  }

  onClickCheckHandler =  (value) => {
    this.setState({
      order_type:  value
    });
  }

  onClickRunHandler = ()  =>  {
    let _input = this.state.input.split('\n');

    if (_input[_input.length]  === "")  _input.slice(_input.length);

    bubbleSort(_input, this.state.order_type);

    this.setState({
      output: _input.join('\n')
    })
  }

  render() {
    return  <React.Fragment>
              <IORunnerSection title={this.props.title} input={this.state.input} output={this.state.output} onChangeInputHandler={this.onChangeInputHandler}/>
              <div className="w-100"></div>
              <div className="btn-group" role="group">
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                  <label className="btn btn-secondary active">
                    <input type="radio" name="bsorder" id="asc" defaultChecked onClick={() =>  {this.onClickCheckHandler('asc')}} /> Ascendent
                  </label>
                  <label className="btn btn-secondary">
                    <input type="radio" name="bsorder" id="desc" onClick={() =>  {this.onClickCheckHandler('desc')}}/> Descendent
                  </label>
                </div>
              </div>
              <br/>
              <br/>
              <IORunnerButton text={this.props.runText} onClickRunHandler={this.onClickRunHandler}/>
            </React.Fragment>
  }
}

export default IOSortRunner;
