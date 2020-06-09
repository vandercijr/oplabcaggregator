import React from 'react';
import IOSortRunner from './iosortrunner';
import IOLinkedListRunner from './iolinkedlistrunner';
import IOTwitterRunner from './iotwitterunner';
import IOGameRunner from './iogamerunner';
import Menu from './menu';

class App extends React.Component {
  render() {
    return  <React.Fragment>
              <Menu />
              <div className="row iorunner">
                <div className="col" id="bubble">
                  <IOSortRunner title="Bubble Sort" runText="Order"/>
                </div>
              </div>
              <div className="row iorunner">
                <div className="col" id="linkedlist">
                  <IOLinkedListRunner title="Singly Linked List" runText="Run"/>
                </div>
              </div>
              <div className="row iorunner">
                <div className="col" id="gameofstones">
                  <IOGameRunner title="Game Of Stones" runText="Run"/>
                </div>
              </div>
              <div className="row iorunner">
                <div className="col" id="twitter">
                  <IOTwitterRunner title="Twitter Reader" runText="Retrieve"/>
                </div>
              </div>
            </React.Fragment>
  }
}

export default App;
