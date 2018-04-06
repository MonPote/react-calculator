import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import ComputerInput from './ComputerInput';

configure({ adapter: new Adapter() });

describe('<ComputerInput />', () => {
  it('render <ComputerInput /> without crash', () => {
    const wrapper = shallow(<ComputerInput />);
    expect(wrapper.contains(<div className="result-box" />)).toBe(true);
  });

  it('render correcttly the children', () => {
    const wrapper = shallow(<ComputerInput>Hello</ComputerInput>);
    expect(wrapper.contains(<div className="result-box">Hello</div>)).toBe(
      true
    );
  });
});
