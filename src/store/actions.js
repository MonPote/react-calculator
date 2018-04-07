export const ADD_SYMBOL = symbol => ({
  type: 'ADD_SYMBOL',
  symbol
});

export const RESOLVE_SYMBOL = symbol => ({
  type: 'RESOLVE_SYMBOL',
  symbol
});

export const CLEAR_OPERATION = () => ({ type: 'CLEAR_OPERATION' });

export const DISPLAY_ERROR = () => ({ type: 'DISPLAY_ERROR' });

export const MONKEY_IS_TYPING = isTyping => ({
  type: 'MONKEY_IS_TYPING',
  isTyping
});
