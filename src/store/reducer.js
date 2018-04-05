import * as actionTypes from './actions';

const intialState = {
  currentOperation: '',
  currentResult: '0'
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SYMBOL:
      return {
        ...state,
        currentOperation: state.currentOperation + action.symbol || ''
      };
    case actionTypes.RESOLVE_SYMBOL: {
      return { ...state, currentResult: action.symbol };
    }
    case actionTypes.CLEAR_OPERATION: {
      return { ...state, currentOperation: '' };
    }
    default:
      return state;
  }
};

export default reducer;
