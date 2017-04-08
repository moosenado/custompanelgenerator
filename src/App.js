import React, { Component } from 'react';
import PanelChoice from './containers/panel_choice/PanelChoice';

import tflogo from './../public/imgs/testforce_logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      	<header>
        	<img src={tflogo} alt="company logo" role="presentation"/>
        </header>

        <main className="app-container">
        	<PanelChoice />
        </main>

        <footer>
        </footer>

      </div>
    );
  }
}

export default App;
