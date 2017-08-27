import React, { Component } from 'react';
import $ from 'jquery';
import Home from './components/home';
import Services from './components/services';
import About from './components/about';
import Contact from './components/contact';
import Nav from './components/nav';
import Footer from './components/Footer';
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
    switch(this.state.currentDisplay) {
      case 'Services':
        display = <Services />
        break;
      case 'About':
        display = <About />
        break;
      case 'Contact':
        display = <Contact />
        break
      default:
        display = <Home />
    };

    return (
      <div className="App">
        <Nav clickHandler={e => this.navClickHandler(e)}/>
        {display}
        <Footer />
      </div>
    );
  }
}

export default App;
