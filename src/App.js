import React, { Component } from 'react';
import { connect } from 'react-redux';
import math from 'mathjs';
import { Observable } from 'rxjs';
import './App.css';
import * as actionTypes from './store/actions';
import KeypadContainer from './components/KeypadContainer';
import ComputerInput from './components/ComputerInput';
import ClearButton from './components/ClearButton';

class App extends Component {
  componentDidMount() {
    document.addEventListener(
      'keydown',
      this.spaceEventFunction.bind(this),
      false
    );
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.spaceEventFunction, false);
  }

  spaceEventFunction(event) {
    if (event.keyCode === 32) {
      //FIXME Create random function
      const testArr = [...'123213+4324324'];

      Observable.interval(50 /* ms */)
        .take(testArr.length)
        .subscribe(
          idx => {
            this.props.addSymbol(testArr[idx]);
          },
          undefined,
          () => {
            const result = math.eval(this.props.currentOperation);
            this.props.resolveCompute(result);
          }
        );
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m8 l5 xl4">
          <div className="card">
            <div className="card-content">
              <div className="row">
                <div className="col s12 m12 l12">
                  <ComputerInput>
                    <span>{this.props.currentResult}</span>
                  </ComputerInput>
                </div>
              </div>

              <div className="row input-clear-row">
                <div className="col s9 m9 l9">
                  <ComputerInput>
                    <span>{this.props.currentOperation}</span>
                  </ComputerInput>
                </div>
                <div className="col s3 m3 l3">
                  <ClearButton />
                </div>
              </div>

              <div className="row">
                <KeypadContainer />
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
