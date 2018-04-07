import reducer from './reducer';
import * as actionsTypes from './actions';

describe('reducer', () => {
  let initialState = {
    currentOperation: '',
    currentResult: '0',
    isMonkeyTyping: false
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_SYMBOL', () => {
    expect(
      reducer(initialState, {
        type: actionsTypes.ADD_SYMBOL,
        symbol: '1'
      })
    ).toEqual({
      currentOperation: '1',
      currentResult: '0',
      isMonkeyTyping: false
    });
  });

  it('should not add incorrect symbol ADD_SYMBOL', () => {
    expect(
      reducer(initialState, {
        type: actionsTypes.ADD_SYMBOL,
        symbol: 'd'
      })
    ).toEqual(initialState);
  });

  it('should handle RESOLVE_SYMBOL', () => {
    expect(
      reducer(
        {
          currentOperation: '1+2',
          currentResult: '',
          isMonkeyTyping: false
        },
        {
          type: actionsTypes.RESOLVE_SYMBOL,
          symbol: '1+2'
        }
      )
    ).toEqual({
      currentOperation: '1+2',
      currentResult: '1+2',
      isMonkeyTyping: false
    });
  });

  it('should handle CLEAR_OPERATION', () => {
    expect(
      reducer(
        {
          currentOperation: '1+2',
          currentResult: '',
          isMonkeyTyping: false
        },
        {
          type: actionsTypes.CLEAR_OPERATION,
          symbol: '1+2'
        }
      )
    ).toEqual({
      currentOperation: '',
      currentResult: '0',
      isMonkeyTyping: false
    });
  });

  it('should handle DISPLAY_ERROR', () => {
    expect(reducer(initialState, { type: actionsTypes.DISPLAY_ERROR })).toEqual(
      {
        currentOperation: '',
        currentResult: 'Error',
        isMonkeyTyping: false
      }
    );
  });

  it('should handle MONKEY_IS_TYPING', () => {
    expect(
      reducer(initialState, {
        type: actionsTypes.MONKEY_IS_TYPING,
        isTyping: true
      })
    ).toEqual({
      currentOperation: '',
      currentResult: '0',
      isMonkeyTyping: true
    });
  });
});
