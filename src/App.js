// Import React and Component
import React, { Component } from 'react';
// Import CSS from App.css
import './App.css';
// Import the Today component to be used below
import Today from './Today/Today'
// Import the History component to be used below
import History from './History/History';

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="topheader">
            <header className="container">
              <nav className="navbar">
                <div className="navbar-brand">
                  <span className="navbar-item">PusherCoins</span>
                </div>
              </nav>
            </header>
          </div>
          <section className="results--section">
            <div className="container">
              <h2 className="container-title">PusherCoins is a realtime price information about BTC, ETH and LTC.</h2>
            </div>
            <div className="results--section__inner">
              <Today />
              <History />
            </div>
          </section>
        </div>
    );
  }
}

export default App;