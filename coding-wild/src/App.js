import React, { Component } from 'react';
import './App.css';

// Components
import Header from './components/Global/Header';
import Footer from './components/Global/Footer';
import Landing from './components/Landing/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Landing/>
        <Footer/>
      </div>
    );
  }
}

export default App;
 