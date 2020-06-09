import React from 'react';
import IORunnerSection from './iorunnersection';
import IORunnerButton from './iorunnerbutton';

class IORunner extends React.Component {
  render() {
    return  <React.Fragment>
              <IORunnerSection title={this.props.title} />
              <IORunnerButton text={this.props.runText} />
            </React.Fragment>
  }
}

export default IORunner;
