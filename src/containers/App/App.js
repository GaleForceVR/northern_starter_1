import React, { Component } from 'react';

import './App.css';
import StatusDisplayArea from './../../components/StatusDisplayArea/StatusDisplayArea.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StatusDisplayArea />
      </div>
    );
  }
}

export default App;
