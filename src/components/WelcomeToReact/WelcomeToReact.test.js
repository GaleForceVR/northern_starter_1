import React from 'react';
// import ReactDOM  from 'react-dom';
import WelcomeToReact from './WelcomeToReact';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter() });
import { shallow, render, mount } from 'enzyme';

it('renders welcome message', () => {
  const wrapper = shallow(<WelcomeToReact />);
  const welcome = <h1 className="App-title" >Welcome to React</h1>;
  // console.log(wrapper.find('.App-title'))
  // console.log(wrapper.contains(welcome))
  // console.log(welcome)
  expect(wrapper.find('.App-title').contains(welcome)).toEqual(true);
});

// it('renders the list', () => {
//   const wrapper = shallow(<WelcomeToReact />);
//   // wrapper.listToRender = jest.fn();
//   expect(wrapper.dive().instance().listToRender()).toHaveBeenCalled();
// });