import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './home';
import Services from './services';
import About from './about';
import Contact from './contact';
import Nav from './nav';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  render() {
    return (
      <div className="App">
        <Nav />
        <Services />
      </div>
    );
  }
}

export default App;
