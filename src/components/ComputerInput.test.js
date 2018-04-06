import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import ComputerInput from './ComputerInput';

configure({ adapter: new Adapter() });

describe('<ComputerInput />', () => {
  // const initialState = { currentOperation };
  it('render <ComputerInput />', () => {
    const wrapper = shallow(<ComputerInput />);
    console.log('wrapper', wrapper);
    // wrapper.setProps({ currentOperation: '1+1' });
  });
});
