import * as actionTypes from './actions';

describe('actions', () => {
  it('should create an action ADD_SYMBOL', () => {
    const addAction = actionTypes.ADD_SYMBOL('1');
    expect(addAction).toEqual({
      type: 'ADD_SYMBOL',
      symbol: '1'
    });
  });

  it('should create an action RESOLVE_SYMBOL', () => {
    const resolveAction = actionTypes.RESOLVE_SYMBOL('1+23-12');
    expect(resolveAction).toEqual({
      type: 'RESOLVE_SYMBOL',
      symbol: '1+23-12'
    });
  });

  it('should create an action CLEAR_OPERATION', () => {
    const clearAction = actionTypes.CLEAR_OPERATION();
    expect(clearAction).toEqual({ type: 'CLEAR_OPERATION' });
  });

  it('should create an action DISPLAY_ERROR', () => {
    const displayErrorAction = actionTypes.DISPLAY_ERROR();
    expect(displayErrorAction).toEqual({ type: 'DISPLAY_ERROR' });
  });

  it('should create an action MONKEY_IS_TYPING', () => {
    const monkeyIsTypingAction = actionTypes.MONKEY_IS_TYPING(true);
    expect(monkeyIsTypingAction).toEqual({
      type: 'MONKEY_IS_TYPING',
      isTyping: true
    });
  });
});
