import React, { Component } from "react";
import logo from './../../logo.svg';
import "./WelcomeToReact.css";

class WelcomeToReact extends Component {

  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
  }

  renderList() {
    const listToRender = ['One', 'Two', 'Three']
    return listToRender.map( ( num, index ) => {
      return (
        <div key={index} >
          { num }
        </div>
      )
    })
  }

  render() {
    return (
      <div className="this-is-crazy">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        { this.renderList() }
      </div>
    )
  }
}

export default WelcomeToReact;