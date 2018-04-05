import React, { Component } from 'react';
import { connect } from 'react-redux';
import math from 'mathjs';
import './App.css';
import * as actionTypes from './store/actions';

class App extends Component {
  buttons = ['=', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+'];

  resolveButton(symbol) {
    if (symbol === '=') {
      const result = math.eval(this.props.currentOperation);
      console.log('result', result);
      this.props.resolveCompute(result);
    } else {
      this.props.addSymbol(symbol);
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-content">
              <div className="col m12">Result : {this.props.currentResult}</div>
              <div className="col m10">
                Current Operation : {this.props.currentOperation}
              </div>
              <div className="col m2">C</div>
              <div className="row">
                <div className="App-test-parent col m10">
                  {this.buttons.map(button => (
                    <a
                      key={button}
                      className="App-test-child waves-effect waves-light btn"
                      onClick={() => this.resolveButton(button)}
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

const mapStateToProps = state => {
  return {
    currentResult: state.currentResult,
    currentOperation: state.currentOperation
  };
};

const mapDispatchToPros = dispatch => {
  return {
    addSymbol: symbol => dispatch({ type: actionTypes.ADD_SYMBOL, symbol }),
    resolveCompute: symbol =>
      dispatch({ type: actionTypes.RESOLVE_SYMBOL, symbol })
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(App);
