import React, { Component } from 'react';

import tflogo from './../public/imgs/testforce_logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
      
      	<header>
        	<img src={tflogo} alt="company logo" role="presentation"/>
        </header>

        <main className="app-container">
        </main>

        <footer>
        </footer>

      </div>
    );
  }
}

export default App;
