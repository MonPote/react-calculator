import React, { Component } from 'react';
import './App.css';

class App extends Component {
  buttons = ['=', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  onButtonClick() {}

  render() {
    return (
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-content">
              <div className="col m12">INPUT 1</div>
              <div className="col m10">INPUT 2</div>
              <div className="col m2">C</div>
              <div className="row">
                <div className="App-test-parent col m10">
                  {this.buttons.map(button => (
                    <a
                      key={button}
                      className="App-test-child waves-effect waves-light btn"
                    >
                      {button}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
