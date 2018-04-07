import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

class ClearButton extends Component {
  render() {
    return (
      <a
        className="btn red lighten-1"
        style={{ width: '100%' }}
        onClick={() => this.props.clearOperation()}
      >
        C
      </a>
    );
  }
}

const mapDispatchToPros = dispatch => {
  return {
    clearOperation: () => dispatch({ type: actionTypes.CLEAR_OPERATION })
  };
};

export default connect(undefined, mapDispatchToPros)(ClearButton);
