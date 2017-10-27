import React from 'react';
import Status from './Status';
import northern_data from './../StatusDisplayArea/northern_data.json';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter() });
import { shallow, render, mount } from 'enzyme';

const wrapper = shallow(<Status />);

it('renders Status', () => {
  expect(wrapper.find('.Status').length).toBe(1);
})

it('should render a status header', () => {
 expect(wrapper.find('.status-header').length).toBe(1);
})

const wrapperWithProps = shallow(<Status header={ northern_data.categories[0].name } completionPercentage="35" />);

it('should render the correct status header message', () => {
  
  const headerMessage = <h3 className="status-header" >Task Status</h3>;
  
  expect(wrapperWithProps.find('.status-header').contains(headerMessage)).toEqual(true);
})

it('should render the correct status body message', () => {

  const bodyMessage = <div className="status-body" >35</div>;

  console.log(wrapperWithProps.find('.status-body').html())

  expect(wrapperWithProps.find('.status-body').contains(bodyMessage)).toEqual(true);
})

// it('should render the ')