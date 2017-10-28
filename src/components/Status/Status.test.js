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

const wrapperWithProps = shallow(
  <Status 
    header={ northern_data.categories[0].name } 
    completionPercentage="35" 
    completed="2"
    onTarget="155"
    remaining="4"
    editable={ true }
  />
);

it('should render the correct status header message', () => {
  
  const headerMessage = <h3 className="status-header" >Task Status</h3>;
  
  expect(wrapperWithProps.find('.status-header').contains(headerMessage)).toEqual(true);
})

it('should render the correct status body message', () => {

  const bodyMessage = <div className="status-body" >35 %<div className="status-editable" ><img src="edit-icon.png" alt="edit"/></div></div>;

  expect(wrapperWithProps.find('.status-body').contains(bodyMessage)).toEqual(true);
})

it('should render an edit icon if editable is true', () => {

  const editableIcon = <div className="status-editable" ><img src="edit-icon.png" alt="edit"/></div>;

  expect(wrapperWithProps.find('.status-editable').contains(editableIcon)).toEqual(true);
})







