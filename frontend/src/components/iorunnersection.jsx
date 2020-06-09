import React from 'react';

class IORunnerSection extends React.Component {
  render() {
    return  <React.Fragment>
              <h1>{this.props.title}</h1>
              <div className="row">
                <div className="col-6">
                  <h3>Input</h3>
                  <textarea rows="10" className="form-control" onChange={(e) =>  this.props.onChangeInputHandler(e.target.value)} defaultValue={this.props.input}></textarea>
                </div>
                <div className="col-6">
                  <h3>Output</h3>
                  <textarea rows="10" className="form-control" defaultValue={this.props.output}></textarea>
                </div>
              </div>
            </React.Fragment>
  }
}

export default IORunnerSection;
