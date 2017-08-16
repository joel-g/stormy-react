import React, { Component } from 'react';
import $ from 'jquery';
// import PropTypes from 'proptypes';

class Services extends Component {
  constructor() {
    super();
    this.state = {
      currentDisplay: 'Staff training'
    }
  }

  servicesClickHandler(e){
    this.setState({currentDisplay: $(e.target).text()})
  }

  render() {
    let display;
    if (this.state.currentDisplay === 'Legal compliance') {
      display = <p>legal compliance description</p>
    } else if (this.state.currentDisplay === 'Staff training') {
      display = <p>staff training description</p>
    } else if (this.state.currentDisplay === 'Staff hiring') {
      display = <p>staff hiring description</p>
    } else if (this.state.currentDisplay === 'Tribal relations') {
      display = <p>tribal relations description</p>
    } else if (this.state.currentDisplay === 'Cultivation') {
      display = <p>Cultivation description</p>
    } else if (this.state.currentDisplay === 'Genetics selection') {
      display = <p>Genetics description</p>
    } else if (this.state.currentDisplay === 'Branding') {
      display = <p>Branding description</p>
    } else if (this.state.currentDisplay === 'Marketing') {
      display = <p>Marketing description</p>
    };
    return (
      <div className='content'>
        <ul className='services-list'>
          <li onClick={ e =>this.servicesClickHandler(e) }>Legal compliance</li>
          <li onClick={ e =>this.servicesClickHandler(e) }>Staff training</li>
          <li onClick={ e =>this.servicesClickHandler(e) }>Staff hiring</li>
          <li onClick={ e =>this.servicesClickHandler(e) }>Tribal relations</li>
          <li onClick={ e =>this.servicesClickHandler(e) }>Cultivation</li>
          <li onClick={ e =>this.servicesClickHandler(e) }>Genetics selection</li>
          <li onClick={ e =>this.servicesClickHandler(e) }>Branding</li>
          <li onClick={ e =>this.servicesClickHandler(e) }>Marketing</li>
        </ul>
        <div className='service-description'>
          {display}
        </div>
      </div>
    )
  }
}

export default Services;
