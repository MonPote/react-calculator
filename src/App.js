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

  generateSimpleRandomExpr() {
    const maxNbOfValue = 5;
    const maxValueOfRandom = 10000;
    const nbOfValue = math.randomInt(2, maxNbOfValue);
    const arrayOfOperator = ['x', '/', '+', '-'];

    let randomExp = math.randomInt(maxValueOfRandom);
    for (let i = 0; i < nbOfValue; ++i) {
      let operator = math.pickRandom(arrayOfOperator);
      randomExp = `${randomExp} ${operator} ${math.randomInt(
        maxValueOfRandom
      )}`;
    }

    return randomExp;
  }

  spaceEventFunction(event) {
    if (!this.props.isMonkeyTyping && event.keyCode === 32) {
      const randomExp = this.generateSimpleRandomExpr();
      const randomExpArray = [...randomExp];
      this.props.clearOperation();
      this.props.updateIsMonkeyTyping(true);

      Observable.interval(50 /* ms */)
        .take(randomExpArray.length)
        .subscribe(
          idx => {
            this.props.addSymbol(randomExpArray[idx]);
          },
          undefined,
          () => {
            const expr = randomExp.replace(/x/g, '*');
            try {
              const result = math.eval(expr);
              this.props.resolveCompute(result);
            } catch (e) {
              // Should never arrive here
              this.props.displayError();
            }
            this.props.updateIsMonkeyTyping(false);
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
    currentOperation: state.currentOperation,
    isMonkeyTyping: state.isMonkeyTyping
  };
};

const mapDispatchToPros = dispatch => {
  return {
    addSymbol: symbol => dispatch({ type: actionTypes.ADD_SYMBOL, symbol }),
    resolveCompute: symbol =>
      dispatch({ type: actionTypes.RESOLVE_SYMBOL, symbol }),
    displayError: () => dispatch({ type: actionTypes.DISPLAY_ERROR }),
    updateIsMonkeyTyping: isTyping =>
      dispatch({ type: actionTypes.MONKEY_IS_TYPING, isTyping }),
    clearOperation: () => dispatch({ type: actionTypes.CLEAR_OPERATION })
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(App);
