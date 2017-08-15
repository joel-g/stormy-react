import React, { Component } from 'react';
import $ from 'jquery';
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
      currentPage: 'Home'
    }
  }

  navClickHandler(e){
    this.setState({currentPage: $(e.target).text()})
  }

  render() {
    let display;
    if (this.state.currentPage === 'Home') {
      display = <Home />
    } else if (this.state.currentPage === 'Services') {
      display = <Services />
    } else if (this.state.currentPage === 'About') {
      display = <About />
    } else if (this.state.currentPage === 'Contact') {
      display = <Contact />
    };

    return (
      <div className="App">
        <Nav clickHandler={e => this.navClickHandler(e)}/>
        {display}
      </div>
    );
  }
}

export default App;
