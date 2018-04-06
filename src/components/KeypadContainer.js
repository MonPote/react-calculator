import React, { Component } from 'react';
import { connect } from 'react-redux';
import math from 'mathjs';
import * as actionTypes from '../store/actions';

class KeypadContainer extends Component {
  keys = [
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
    '.',
    '=',
    'x'
  ];

  resolveButton(symbol) {
    if (symbol === '=') {
      const expr = this.props.currentOperation.replace(/x/g, '*');
      try {
        const result = math.eval(expr);
        this.props.resolveCompute(result);
      } catch (e) {
        this.props.displayError();
      }
    } else if (symbol.match(/^[/x+-]{1}$/)) {
      this.props.addSymbol(` ${symbol} `);
    } else if (symbol.match(/^([0-9]|[.]){1}$/)) {
      this.props.addSymbol(symbol);
    }
  }

  getButtonCss(symbol) {
    if (symbol === '=') {
      return 'btn blue';
    } else if (symbol.match(/^[/x+-]{1}$/)) {
      return 'btn grey lighten-1 text-black';
    } else {
      return 'btn grey lighten-3 text-black';
    }
  }

  render() {
    return (
      <div className="App-test-parent">
        {this.keys.map(key => (
          <a
            key={key}
            className={'App-test-child ' + this.getButtonCss(key)}
            onClick={() => this.resolveButton(key)}
          >
            {key}
          </a>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({ currentOperation: state.currentOperation });

const mapDispatchToPros = dispatch => {
  return {
    addSymbol: symbol => dispatch({ type: actionTypes.ADD_SYMBOL, symbol }),
    resolveCompute: symbol =>
      dispatch({ type: actionTypes.RESOLVE_SYMBOL, symbol }),
    displayError: () => dispatch({ type: actionTypes.DISPLAY_ERROR })
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(KeypadContainer);
