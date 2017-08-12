import React, { Component } from 'react';
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
      currentPage: 'home'
    }
  }

  render() {
    let display;
    if (this.state.currentPage === 'home') {
      display = <Home />
    } else if (this.state.currentPage === 'services') {
      display = <Services />
    } else if (this.state.currentPage === 'about') {
      display = <About />
    } else if (this.state.currentPage === 'contact') {
      display = <Contact />
    };

    return (
      <div className="App">
        <Nav />
        {display}
      </div>
    );
  }
}

export default App;
