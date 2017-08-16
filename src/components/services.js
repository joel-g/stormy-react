import React, { Component } from 'react';
// import PropTypes from 'proptypes';

class Services extends Component {
  constructor() {
    super();
    this.state = {
      currentDisplay: 'Legal compliance'
    }
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
    };
    return (
      <div className='content'>
        <ul className='services-list'>
          <li>Legal compliance</li>
          <li>Staff training</li>
          <li>Staff hiring</li>
          <li>Tribal relations</li>
          <li>Cultivation</li>
          <li>Genetics selection</li>
          <li>Branding</li>
          <li>Marketing</li>
        </ul>
      <div>
        {display}
      </div>
      </div>
    )
  }
}

export default Services;
