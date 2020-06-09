import React from 'react';

class IORunnerButton extends React.Component {
  render() {
    return  <React.Fragment>
              <div className="input-group">
                <button type="button" className="btn btn-primary" onClick={() =>  {this.props.onClickRunHandler()}}>{this.props.text}</button>
              </div>
            </React.Fragment>
  }
}

export default IORunnerButton;
