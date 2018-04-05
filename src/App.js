import React, { Component } from 'react';
import { connect } from 'react-redux';
import math from 'mathjs';
import './App.css';
import * as actionTypes from './store/actions';

class App extends Component {
  buttons = ['=', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+'];
  buttons2 = ['/', '+', '-', '*'];
  newButtons = [
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '+',
    '1',
    '2',
    '3',
    '-',
    '0',
    ',',
    '=',
    '*'
  ];
  resolveButton(symbol) {
    if (symbol === '=') {
      const result = math.eval(this.props.currentOperation);
      console.log('result', result);
      this.props.resolveCompute(result);
    } else if (symbol === 'C') {
      this.props.clearOperation();
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
              <div className="row">
                <div className="col m12 result-box">
                  <span>{this.props.currentResult}</span>
                </div>
              </div>

              <div className="row">
                <div className="col m10 result-box">
                  {this.props.currentOperation}
                </div>
                <div className="col m2">
                  <a
                    className="waves-effect waves-light btn"
                    onClick={() => this.resolveButton('C')}
                  >
                    C
                  </a>
                </div>
              </div>

              <div className="row">
                <div className="App-test-parent col m12">
                  {this.newButtons.map(button => (
                    <a
                      key={button}
                      className="App-test-child waves-effect waves-light btn"
                      onClick={() => this.resolveButton(button)}
                    >
                      {button}
                    </a>
                  ))}
                </div>
                <div className="col m2" />
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
      dispatch({ type: actionTypes.RESOLVE_SYMBOL, symbol }),
    clearOperation: () => dispatch({ type: actionTypes.CLEAR_OPERATION })
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(App);
