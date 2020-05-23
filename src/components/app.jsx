import React from 'react';
import IOSortRunner from './iosortrunner';
import IOLinkedListRunner from './iolinkedlistrunner';
import IOGameRunner from './iogamerunner';

class App extends React.Component {
  render() {
    return  <React.Fragment>
              <nav className="navbar fixed-top navbar-light bg-light">
                <div className="container">
                  <ul className="nav">
                    <li className="nav-item">
                      <a className="nav-link active" href="#bubble">Bubble Sort</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#linkedlist">Linked List</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#gameofstones">Game Of Stones</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#twitter">Twitter</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="http://localhost:42399" target="noopener noreferrer">Template</a>
                    </li>
                  </ul>
                </div>
              </nav>
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
            </React.Fragment>
  }
}

export default App;
