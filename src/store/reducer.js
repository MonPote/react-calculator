import * as actionTypes from './actions';
import { operatorWithSpaceRegex, nbRegex } from '../regex';

const intialState = {
  currentOperation: '',
  currentResult: '0',
  isMonkeyTyping: false
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SYMBOL:
      if (
        action.symbol.match(operatorWithSpaceRegex) ||
        action.symbol.match(nbRegex)
      ) {
        return {
          ...state,
          currentOperation: state.currentOperation + action.symbol
        };
      }
      return state;
    case actionTypes.RESOLVE_SYMBOL:
      return { ...state, currentResult: action.symbol };
    case actionTypes.CLEAR_OPERATION:
      return { ...state, currentOperation: '', currentResult: '0' };
    case actionTypes.DISPLAY_ERROR:
      return { ...state, currentResult: 'Error' };
    case actionTypes.MONKEY_IS_TYPING:
      return { ...state, isMonkeyTyping: action.isTyping || false };
    default:
      return state;
  }
};

export default reducer;
