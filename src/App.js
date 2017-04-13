import React, { Component } from 'react';
import PanelChoice from './containers/panel_choice/PanelChoice';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="app-container">
        	<PanelChoice />
        </main>
      </div>
    );
  }
}

export default App;
