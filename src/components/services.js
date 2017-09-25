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
        display = <p>{"Is your business complying with all city and state regulations? Are your employees? Let's make sure."}</p>
        break;
      case 'Staff training':
        display = <p>{"Make sure your staff is following best practices to ensure customer loyalty and sales growth."}</p>
        break;
      case 'Staff hiring':
        display = <p>{'Screen, interview and hire your sales, management and security staff.'}</p>
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
        display = <p>{'Is your branding sending the right message? Are you attacting the right customers?'}</p>
        break;
      case 'Marketing':
        display = <p>Marketing description. {lorem}</p>
        break;
      default:
        display = null
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
          {services.map( (s) => <li key={s}>{s}</li>)}
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
