import React from 'react';
// import ReactDOM  from 'react-dom';
import StatusDisplayArea from './StatusDisplayArea';
import northern_data from './northern_data.json';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter() });
import { shallow, render, mount } from 'enzyme';

it('renders StatusDisplayArea', () => {
  const wrapper = shallow(<StatusDisplayArea />);
  expect(wrapper.find('.display-container').length).toBe(1);
})

it('should render an array of statuses', () => {
  const wrapper = mount(<StatusDisplayArea />);
  expect(wrapper.find('Status').length).toBe(4);
})