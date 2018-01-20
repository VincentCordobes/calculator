// @flow
import React, { Component } from 'react';
import './app.css';
import Calculator from '../Calculator/Calculator';
import History from '../History/History';
import Footer from '../Footer/Footer';

class App extends Component<*, *> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <h1 className="App-title">Calculator</h1>
          </div>
        </header>
        <div className="container main-content">
          <Calculator />
          <History />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
