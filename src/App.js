import React, { Component } from 'react';
import $ from 'jquery';
import Home from './components/home';
import Services from './components/services';
import About from './components/about';
import Contact from './components/contact';
import Nav from './components/nav';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentDisplay: 'Home'
    }
  }

  navClickHandler(e){
    this.setState({currentDisplay: $(e.target).text()})
  }

  render() {
    let display;
    if (this.state.currentDisplay === 'Home') {
      display = <Home />
    } else if (this.state.currentDisplay === 'Services') {
      display = <Services />
    } else if (this.state.currentDisplay === 'About') {
      display = <About />
    } else if (this.state.currentDisplay === 'Contact') {
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
