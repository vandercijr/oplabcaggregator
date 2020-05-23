import React from 'react';
import IORunnerSection from './iorunnersection';
import IORunnerButton from './iorunnerbutton';
const  SinglyLinkedList = require('oplabchallenge/lib/algorithms/list/linkedlist');

class IOLinkedListRunner extends React.Component {
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
      linked_list_item_id : '1',
      operation_type: 'all'
    }
  }

  onChangeInputHandler =  (value) => {
    this.setState({
      input:  value
    });
  }

  onChangeIdHandler =  (value) => {
    console.log(value);
    this.setState({
      linked_list_item_id:  value
    });
  }

  onClickCheckHandler =  (value) => {
    this.setState({
      operation_type:  value
    });
  }

  onClickRunHandler = ()  =>  {
    const singlyLinkedList  = new SinglyLinkedList();

    let _input = this.state.input.split('\n');
    let _output= '';

    if (_input[_input.length]  === "") _input.slice(_input.length);

    _output = 'Creating a singly linked list \n';

    for (let i = 0; i < _input.length; i++) {
      singlyLinkedList.push(i+1, _input[i]);
    }

    _output = _output.concat('Elements on linked list :  ', singlyLinkedList.count(), '\n');

    let _id = parseInt(this.state.linked_list_item_id);

    if (this.state.operation_type === 'fo') {

      _output = _output.concat('The singly linked list item id ', _id, ' element\n');
      _output = _output.concat(
        JSON.stringify(
          singlyLinkedList.find(_id),
          undefined,
          4
        )
      );
    }

    if (this.state.operation_type === 'rm') {

      singlyLinkedList.remove(_id);

      _output = _output.concat('Removed the item id ',  _id, ' element\n');
      _output = _output.concat(
        JSON.stringify(
          singlyLinkedList.findAll(),
          undefined,
          4
        )
      );
    }

    if (this.state.operation_type === 'all') {
      _output = _output.concat('The singly linked list\n');
      _output = _output.concat(
        JSON.stringify(
          singlyLinkedList.findAll(),
          undefined,
          4
        )
      );
    }

    this.setState({
      output: _output
    })
  }

  render() {
    return  <React.Fragment>
              <IORunnerSection title={this.props.title} input={this.state.input} output={this.state.output} onChangeInputHandler={this.onChangeInputHandler}/>
              <div className="w-100"></div>
              <div className="btn-group" role="group">
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                  <label className="btn btn-secondary active">
                    <input type="radio" name="boper" id="all" defaultChecked onClick={() =>  {this.onClickCheckHandler('all')}} /> Build Linked List
                  </label>
                  <label className="btn btn-secondary active">
                    <input type="radio" name="boper" id="fo" onClick={() =>  {this.onClickCheckHandler('fo')}} /> Find One
                  </label>
                  <label className="btn btn-secondary">
                    <input type="radio" name="boper" id="rm" onClick={() =>  {this.onClickCheckHandler('rm')}}/> Remove
                  </label>
                  <input type="text" defaultValue={this.state.linked_list_item_id} onChange={(e) =>  {this.onChangeIdHandler(e.target.value)}} />
                </div>
              </div>
              <br/>
              <br/>
              <IORunnerButton text={this.props.runText} onClickRunHandler={this.onClickRunHandler}/>
            </React.Fragment>
  }
}

export default IOLinkedListRunner;
