// @flow
import React, { Component } from 'react';
import './app.css';
import Calculator from '../Calculator/Calculator';
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
        <div className="container">
          <Calculator />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
