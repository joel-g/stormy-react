import React, { Component } from 'react';
import { default as Fade } from 'react-fade'
import $ from 'jquery';

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

    switch(this.state.currentDisplay) {
      case 'Legal compliance':
        display = <p>Legal compliance description. {lorem}</p>
        break;
      case 'Staff training':
        display = <p>Staff training description. {lorem}</p>
        break;
      case 'Staff hiring':
        display = <p>Staff hiring description. {lorem}</p>
        break;
      case 'Tribal relations':
        display = <p>Tribal relations description. {lorem}</p>
        break;
      case 'Cultivation':
        display = <p>Cultivation description. {lorem}</p>
        break;
      case 'Genetics selection':
        display = <p>Genetics description. {lorem}</p>
        break;
      case 'Branding':
        display = <p>Branding description. {lorem}</p>
        break;
      case 'Marketing':
        display = <p>Marketing description. {lorem}</p>
    };

    const services = [
      'Legal compliance',
      'Staff training',
      'Staff hiring',
      'Tribal relations',
      'Cultivation',
      'Genetics selection',
      'Branding',
      'Marketing'
      ]

    return (
      <Fade duration={0.5}>
      <div className='content'>
        <aside className='left-side-ba'>
        </aside>
        <h1 className='page-header'>Services</h1>
        <ul onClick={ e =>this.servicesClickHandler(e) } className='services-list'>
          {services.map( (s) => <li>{s}</li>)}
        </ul>
        <div className='service-description j'>
          {display}
        </div>
      </div>
      </Fade>
    )
  }
}

export default Services;
