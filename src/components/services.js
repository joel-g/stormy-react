import React, { Component } from 'react';
import $ from 'jquery';
// import PropTypes from 'proptypes';

class Services extends Component {
  constructor() {
    super();
    this.state = {
      currentDisplay: 'None'
    }
  }

  servicesClickHandler(e){
    this.setState({currentDisplay: $(e.target).text()})
  }

  render() {
    let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra massa leo, quis feugiat nisl vestibulum nec. Nunc pharetra tempor aliquet. Nulla facilisi.';
    let display;
    if (this.state.currentDisplay === 'Legal compliance') {
      display = <p>Legal compliance description. {lorem}</p>
    } else if (this.state.currentDisplay === 'Staff training') {
      display = <p>Staff training description. {lorem}</p>
    } else if (this.state.currentDisplay === 'Staff hiring') {
      display = <p>Staff hiring description. {lorem}</p>
    } else if (this.state.currentDisplay === 'Tribal relations') {
      display = <p>Tribal relations description. {lorem}</p>
    } else if (this.state.currentDisplay === 'Cultivation') {
      display = <p>Cultivation description. {lorem}</p>
    } else if (this.state.currentDisplay === 'Genetics selection') {
      display = <p>Genetics description. {lorem}</p>
    } else if (this.state.currentDisplay === 'Branding') {
      display = <p>Branding description. {lorem}</p>
    } else if (this.state.currentDisplay === 'Marketing') {
      display = <p>Marketing description. {lorem}</p>
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
        <div className='service-description j'>
          {display}
        </div>
      </div>
    )
  }
}

export default Services;
