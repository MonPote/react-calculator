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

  it('render Keypad', () => {
    // const wrapper = shallow(<KeypadContainer />);
    // expect(wrapper.find(ReactTable)).toHaveLength(1);
    // console.log('wrapper', wrapper);
    // expect(wrapper.length).toEqual(1);
    // expect(wrapper.find(KeypadContainer).length).toEqual(1);
  });

  it('render 9 elem', () => {
    // expect(
    //   wrapper.contains(
    //     <a
    //       key={7}
    //       className={'Keypad-key-child btn grey lighten-1 text-black'}
    //       onClick={() => this.resolveButton(key)}
    //     >
    //       7
    //     </a>
    //   )
    // ).toBe(true);
  });

  it('check props matches with initialState', () => {
    expect(wrapper.prop('currentOperation')).toEqual(
      initialState.currentOperation
    );
  });
});
