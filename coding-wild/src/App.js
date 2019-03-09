import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Header from './components/Global/Header';
import Footer from './components/Global/Footer';
import Landing from './components/Landing/'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            DON'T Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Landing/>
        <Footer/>
      </div>
    );
  }
}

export default App;
 