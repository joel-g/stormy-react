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

  navClickHandler(e){
    console.log('test')
    // console.log(e.target.text)
    // this.setState({})
  }

  render() {
    let display;
    if (this.state.currentPage === 'home') {
      display = <Home clickHandler={e => this.navClickHandler(e)} />
    } else if (this.state.currentPage === 'services') {
      display = <Services />
    } else if (this.state.currentPage === 'about') {
      display = <About />
    } else if (this.state.currentPage === 'contact') {
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
