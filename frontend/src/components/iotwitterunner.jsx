import React from 'react';
import IORunnerButton from './iorunnerbutton';
import IOTweetSection from './iotweetsection';
import axios from 'axios';

class IOTwitterRunner extends React.Component {
  constructor(props)  {
    super(props);

    this.state  = {
      input: 'Geroge Floyd',
      progress: '',
      output: [],
    }
  }

  onChangeInputHandler =  (value) => {
    this.setState({
      input:  value
    });
  }

  onClickRunHandler = ()  =>  {
    this.setState({
      progress: 'Looking for Tweets'
    });

    if (this.state.input.length !== "")  {
      axios.get(process.env.REACT_APP_BACKEND_HOST+'/twitter/'+this.state.input)
      .then(res => {
        this.setState({
          output: res.data.statuses,
          progress:  ""
        });
      })
    }
  }

  render() {
    return  <React.Fragment>
              <h1>{this.props.title}</h1>
              <div className="row">
                <div className="col-12">
                  <h3>Input</h3>
                  <input type="text" name="input" className="form-control" onChange={(e) =>  this.onChangeInputHandler(e.target.value)}  value={  this.state.input  } />
                  <br />
                  <IORunnerButton text={this.props.runText} onClickRunHandler={this.onClickRunHandler}/>
                  <br />
                </div>
                <div className="col-12">
                  <h3>Output</h3>
                  <span>{this.state.progress}</span>
                  <IOTweetSection tweets={this.state.output}/>
                </div>
              </div>
            </React.Fragment>
  }
}

export default IOTwitterRunner;
