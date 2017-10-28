import React from 'react';
import Stats from './Stats';
import northern_data from './../StatusDisplayArea/northern_data.json';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter() });
import { shallow, render, mount } from 'enzyme';



it('should render a completed Stat if present', () => {
  const wrapper = shallow(<Stats completed="2"/>);

  const completedMessage = <div className="stat-message status-completed" >
    <div className="data-circle data-circle--blue" ></div>
    Completed
    <span className="data-value data-value--blue" >2</span>
  </div>;

  expect(wrapper.find('.status-completed').contains(completedMessage)).toEqual(true);
})

it('should render an onTarget Stat if present', () => {
  const wrapper = shallow(<Stats onTarget="155"/>);

  const onTargetMessage = <div className="stat-message status-on-target" >
    <div className="data-circle data-circle--green" ></div>
    On Target
    <span className="data-value data-value--green" >155</span>
  </div>;

  expect(wrapper.find('.status-on-target').contains(onTargetMessage)).toEqual(true);
})

it('should render a remaining Stat if present', () => {
  
  const wrapper = shallow(<Stats remaining="4"/>);

  const remainingMessage = <div className="stat-message status-remaining" >
    <div className="data-circle data-circle--gray" ></div>
    Remaining
    <span className="data-value data-value--gray" >4</span>
  </div>;

  expect(wrapper.find('.status-remaining').contains(remainingMessage)).toEqual(true);
})
