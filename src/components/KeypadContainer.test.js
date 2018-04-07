import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import KeypadContainer from './KeypadContainer';

configure({ adapter: new Adapter() });

describe('<KeypadContainer', () => {
  const initialState = { currentOperation: '1 + 1' };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<KeypadContainer store={store} />);
  });

  it('render KeypadContainer without crash', () => {
    expect(wrapper).toHaveLength(1);
  });

  // FIXME somehow redux broke this test
  it('render Keypad-key-parent div');
  // FIXME somehow redux broke this test
  it('render 16 <a/> elem');

  it('check props matches with initialState', () => {
    expect(wrapper.prop('currentOperation')).toEqual(
      initialState.currentOperation
    );
  });
});
